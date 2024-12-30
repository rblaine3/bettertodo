import { Tool } from "langchain/tools";

export class CreateTaskTool extends Tool {
  name = "create_task";
  description = "Create a new task in the database. Input should be a JSON string with title, description, priority, dueDate, and tags.";

  async _call(input: string) {
    try {
      const taskData = JSON.parse(input);
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const task = await response.json();
      return JSON.stringify(task);
    } catch (error) {
      return `Error creating task: ${error.message}`;
    }
  }
}

export class UpdateTaskTool extends Tool {
  name = "update_task";
  description = "Update an existing task. Input should be a JSON string with taskId and the fields to update.";

  async _call(input: string) {
    try {
      const updateData = JSON.parse(input);
      const response = await fetch('/api/tasks', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const task = await response.json();
      return JSON.stringify(task);
    } catch (error) {
      return `Error updating task: ${error.message}`;
    }
  }
}

export class AddSubstepsTool extends Tool {
  name = "add_substeps";
  description = "Add substeps to a task. Input should be a JSON string with taskId and an array of substeps.";

  async _call(input: string) {
    try {
      const { taskId, steps } = JSON.parse(input);
      const response = await fetch(`/api/tasks/${taskId}/substeps`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ steps }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const substeps = await response.json();
      return JSON.stringify(substeps);
    } catch (error) {
      return `Error adding substeps: ${error.message}`;
    }
  }
}

export class AddTaskContentTool extends Tool {
  name = "add_task_content";
  description = "Add notes or attachments to a task. Input should be a JSON string with taskId and content details.";

  async _call(input: string) {
    try {
      const { taskId, ...contentData } = JSON.parse(input);
      const response = await fetch(`/api/tasks/${taskId}/content`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contentData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const content = await response.json();
      return JSON.stringify(content);
    } catch (error) {
      return `Error adding content: ${error.message}`;
    }
  }
}
