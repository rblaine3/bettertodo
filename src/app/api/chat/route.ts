import { NextResponse } from 'next/server';
import { ChatOpenAI } from "@langchain/openai";
import { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { z } from "zod";
import dbConnect from '@/lib/mongoose';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

const SYSTEM_PROMPT = `You are an expert task management assistant focused on understanding the user's needs.
Your goal is to gather all necessary information through a friendly conversation before any task creation or modification.

Follow these guidelines:
1. Ask clear, focused questions one at a time
2. Gather essential details: task title, description, priority, deadline, and any potential subtasks
3. Help users break down complex tasks into manageable steps
4. Validate and confirm information before proceeding
5. Be conversational but efficient`;

async function createAgent() {
  const model = new ChatOpenAI({
    modelName: "gpt-4",
    temperature: 0.7,
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const collectTaskInfoTool = new DynamicStructuredTool({
    name: "collect_task_info",
    description: "Collect and structure task information from the user's responses",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      priority: z.enum(["low", "medium", "high"]),
      dueDate: z.string(),
      tags: z.array(z.string()),
      substeps: z.array(z.object({
        title: z.string(),
        description: z.string().optional(),
      })).optional(),
    }),
    func: async (input) => {
      await dbConnect();
      // Here you can add logic to create the task in the database
      return JSON.stringify(input);
    },
  });

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", SYSTEM_PROMPT],
    new MessagesPlaceholder("chat_history"),
    ["human", "{input}"],
    new MessagesPlaceholder("agent_scratchpad"),
  ]);

  const agent = await createOpenAIFunctionsAgent({
    llm: model,
    prompt,
    tools: [collectTaskInfoTool],
  });

  return new AgentExecutor({
    agent,
    tools: [collectTaskInfoTool],
  });
}

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'OpenAI API key not configured' },
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();
    
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Convert messages to the format expected by the agent
    const chatHistory = messages.map((msg: any) => ({
      type: msg.role === 'user' ? 'human' : 'assistant',
      content: msg.content,
    }));

    const agent = await createAgent();
    const response = await agent.invoke({
      input: messages[messages.length - 1].content,
      chat_history: chatHistory.slice(0, -1),
    });

    // Extract the text content from the response
    const responseText = typeof response.output === 'string' 
      ? response.output 
      : response.output?.content || 'I apologize, but I encountered an error processing your request.';

    return NextResponse.json({ response: responseText });
  } catch (error: any) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
