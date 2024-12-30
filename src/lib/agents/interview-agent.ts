import { ChatOpenAI } from "@langchain/openai";
import { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { z } from "zod";

const INTERVIEW_SYSTEM_PROMPT = `You are an expert task management assistant focused on understanding the user's needs.
Your goal is to gather all necessary information through a friendly conversation before any task creation or modification.

Follow these guidelines:
1. Ask clear, focused questions one at a time
2. Gather essential details: task title, description, priority, deadline, and any potential subtasks
3. Help users break down complex tasks into manageable steps
4. Validate and confirm information before proceeding
5. Be conversational but efficient

Never create or modify tasks directly. Instead, collect information and pass it to the task creation agent.
`;

export async function createInterviewAgent() {
  const model = new ChatOpenAI({
    modelName: "gpt-4",
    temperature: 0.7,
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
      return JSON.stringify(input);
    },
  });

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", INTERVIEW_SYSTEM_PROMPT],
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
