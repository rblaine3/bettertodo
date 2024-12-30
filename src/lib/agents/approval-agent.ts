import { ChatOpenAI } from "@langchain/openai";
import { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { z } from "zod";

const APPROVAL_SYSTEM_PROMPT = `You are an approval management agent responsible for ensuring user consent before any significant actions.

Follow these guidelines:
1. Present proposed actions clearly and concisely
2. Highlight important changes or implications
3. Wait for explicit user approval before proceeding
4. Provide options to modify or cancel actions
5. Document approval decisions

Remember:
- Never proceed without clear consent
- Explain potential consequences
- Provide clear yes/no choices
- Allow users to ask questions
`;

export async function createApprovalAgent() {
  const model = new ChatOpenAI({
    modelName: "gpt-4",
    temperature: 0.3,
  });

  const requestApprovalTool = new DynamicStructuredTool({
    name: "request_approval",
    description: "Request user approval for a proposed action",
    schema: z.object({
      action: z.string(),
      details: z.record(z.any()),
      implications: z.array(z.string()),
      options: z.array(z.string()),
    }),
    func: async (input) => {
      // In a real implementation, this would handle the UI interaction
      return JSON.stringify({
        presented: true,
        action: input.action,
        awaitingResponse: true,
      });
    },
  });

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", APPROVAL_SYSTEM_PROMPT],
    new MessagesPlaceholder("chat_history"),
    ["human", "{input}"],
    new MessagesPlaceholder("agent_scratchpad"),
  ]);

  const agent = await createOpenAIFunctionsAgent({
    llm: model,
    prompt,
    tools: [requestApprovalTool],
  });

  return new AgentExecutor({
    agent,
    tools: [requestApprovalTool],
  });
}
