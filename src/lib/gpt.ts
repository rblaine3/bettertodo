import OpenAI from 'openai';

// Make OpenAI configuration optional
const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

interface TaskSuggestion {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  tags: string[];
}

/**
 * Generates task suggestions based on user input using GPT
 * If OpenAI is not configured, returns mock data
 * @param userInput - Natural language input from the user
 * @returns Array of task suggestions
 */
export async function generateTaskSuggestions(userInput: string): Promise<TaskSuggestion[]> {
  // Return mock data if OpenAI is not configured
  if (!openai) {
    console.log('OpenAI not configured - returning mock data');
    return [
      {
        title: 'Example Task 1',
        description: 'This is a mock task generated locally',
        priority: 'medium',
        dueDate: new Date(Date.now() + 86400000).toISOString(),
        tags: ['mock', 'example']
      },
      {
        title: 'Example Task 2',
        description: 'Another mock task for testing',
        priority: 'high',
        dueDate: new Date(Date.now() + 172800000).toISOString(),
        tags: ['test', 'demo']
      }
    ];
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a task management assistant. Generate structured task suggestions based on user input. 
                   Format your response as JSON array of tasks with title, description, priority, dueDate, and tags.`
        },
        {
          role: "user",
          content: userInput
        }
      ],
      model: "gpt-3.5-turbo",
      response_format: { type: "json_object" },
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) throw new Error('No response from GPT');

    const parsedResponse = JSON.parse(response);
    return parsedResponse.tasks || [];
  } catch (error) {
    console.error('Error generating task suggestions:', error);
    throw error;
  }
}

export default {
  generateTaskSuggestions,
};
