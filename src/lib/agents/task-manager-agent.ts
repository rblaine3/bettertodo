import { ChatOpenAI } from "@langchain/openai";
import { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import {
  CreateTaskTool,
  UpdateTaskTool,
  AddSubstepsTool,
  AddTaskContentTool,
} from "../tools/database-tools";

const TASK_MANAGER_SYSTEM_PROMPT = `You are a task management agent responsible for creating and updating tasks in the database.
You work with the interview agent to ensure all necessary information is collected before taking action.

Follow these guidelines:
1. Only create or update tasks when you have complete, validated information
2. Structure data appropriately for database operations
3. Handle errors gracefully and provide clear feedback
4. Always confirm successful operations with the user
5. Never delete data without explicit confirmation

Remember to:
- Validate dates and priorities
- Ensure required fields are present
- Structure subtasks logically
- Maintain data consistency
`;

export async function createTaskManagerAgent() {
  const model = new ChatOpenAI({
    modelName: "gpt-4",
    temperature: 0.3,
  });

  const tools = [
    new CreateTaskTool(),
    new UpdateTaskTool(),
    new AddSubstepsTool(),
    new AddTaskContentTool(),
  ];

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", TASK_MANAGER_SYSTEM_PROMPT],
    new MessagesPlaceholder("chat_history"),
    ["human", "{input}"],
    new MessagesPlaceholder("agent_scratchpad"),
  ]);

  const agent = await createOpenAIFunctionsAgent({
    llm: model,
    prompt,
    tools,
  });

  return new AgentExecutor({
    agent,
    tools,
  });
}
