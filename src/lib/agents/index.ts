import { createInterviewAgent } from './interview-agent';
import { createTaskManagerAgent } from './task-manager-agent';
import { createApprovalAgent } from './approval-agent';

export interface AgentSystem {
  interviewAgent: any;
  taskManagerAgent: any;
  approvalAgent: any;
}

export async function createAgentSystem(): Promise<AgentSystem> {
  const [interviewAgent, taskManagerAgent, approvalAgent] = await Promise.all([
    createInterviewAgent(),
    createTaskManagerAgent(),
    createApprovalAgent(),
  ]);

  return {
    interviewAgent,
    taskManagerAgent,
    approvalAgent,
  };
}

export async function handleUserInput(
  agentSystem: AgentSystem,
  input: string,
  chatHistory: any[]
) {
  // First, let the interview agent gather information
  const interviewResult = await agentSystem.interviewAgent.invoke({
    input,
    chat_history: chatHistory,
  });

  // If the interview agent has collected enough information, proceed with task management
  if (interviewResult.includes('collect_task_info')) {
    const taskInfo = JSON.parse(
      interviewResult.match(/collect_task_info\((.*?)\)/)[1]
    );

    // Request approval for the action
    const approvalResult = await agentSystem.approvalAgent.invoke({
      input: JSON.stringify({
        action: 'create_task',
        details: taskInfo,
        implications: [
          'A new task will be created in your task list',
          'You\'ll receive notifications based on the due date',
          'The task will be visible in your calendar',
        ],
        options: ['Proceed', 'Modify', 'Cancel'],
      }),
      chat_history: chatHistory,
    });

    // If approved, proceed with task creation
    if (approvalResult.includes('"approved":true')) {
      return await agentSystem.taskManagerAgent.invoke({
        input: JSON.stringify(taskInfo),
        chat_history: chatHistory,
      });
    }
  }

  return interviewResult;
}
