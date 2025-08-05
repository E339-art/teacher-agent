import { createWorkflow, createStep } from '@mastra/core/workflows';
import { z } from 'zod';

// Input schemas
const teachInputSchema = z.object({
  topic: z.string().describe('The topic to teach about'),
  audience: z.string().optional().describe('The target audience'),
  format: z.enum(['explanation', 'lesson', 'quiz', 'summary']).optional().describe('Teaching format'),
  goals: z.string().optional().describe('Learning goals'),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional().describe('Difficulty level'),
});

const quickAnswerInputSchema = z.object({
  question: z.string().describe('The question to answer'),
});

// Output schemas
const teachOutputSchema = z.object({
  message: z.string().describe('The educational response'),
  followUp: z.array(z.string()).describe('Follow-up suggestions'),
});

const quickAnswerOutputSchema = z.object({
  message: z.string().describe('The answer'),
  followUp: z.array(z.string()).describe('Follow-up suggestions'),
});

/**
 * Simple Teaching Workflow: Provides educational content for any topic.
 */
export const teachWorkflow = createWorkflow({
  id: 'teach-workflow',
  description: 'A simple teaching workflow that provides educational content for any topic.',
  inputSchema: teachInputSchema,
  outputSchema: teachOutputSchema,
  steps: [
    createStep({
      id: 'teach',
      description: 'Provide educational content about the requested topic.',
      inputSchema: teachInputSchema,
      outputSchema: teachOutputSchema,
      execute: async ({ input }) => {
        try {
          const { topic, audience, format = 'explanation', goals, difficulty } = input;
          
          // Generate educational content
          let response = `# Teaching: ${topic}\n\n`;
          
          if (audience) {
            response += `**Audience:** ${audience}\n\n`;
          }
          
          if (difficulty) {
            response += `**Difficulty Level:** ${difficulty}\n\n`;
          }
          
          if (goals) {
            response += `**Learning Goals:** ${goals}\n\n`;
          }

          // Format-specific content
          switch (format) {
            case 'explanation':
              response += `## Explanation\n\nI'll explain ${topic} in a clear, engaging way that's perfect for your level.\n\n`;
              response += `### Key Concepts\n- Understanding the fundamentals of ${topic}\n- Real-world applications\n- Common misconceptions\n\n`;
              response += `### Examples\nHere are some practical examples to help you understand ${topic} better.\n\n`;
              break;
            
            case 'lesson':
              response += `## Lesson Plan\n\n### Learning Objectives\nBy the end of this lesson, you will:\n- Understand the core concepts of ${topic}\n- Apply your knowledge to real situations\n- Be able to explain ${topic} to others\n\n`;
              response += `### Lesson Structure\n1. **Introduction** - What is ${topic}?\n2. **Main Content** - Deep dive into concepts\n3. **Practice** - Hands-on learning\n4. **Assessment** - Check your understanding\n5. **Summary** - Key takeaways\n\n`;
              break;
            
            case 'quiz':
              response += `## Quiz: ${topic}\n\nTest your knowledge with these questions:\n\n`;
              response += `### Question 1\nWhat is the most important concept in ${topic}?\n\n`;
              response += `### Question 2\nHow would you apply ${topic} in a real-world scenario?\n\n`;
              response += `### Question 3\nWhat are the common mistakes people make when learning ${topic}?\n\n`;
              break;
            
            case 'summary':
              response += `## Summary: ${topic}\n\n### Main Points\n- Core concept 1\n- Core concept 2\n- Core concept 3\n\n`;
              response += `### Key Takeaways\n- Important insight 1\n- Important insight 2\n- Important insight 3\n\n`;
              break;
          }

          const followUp = [
            `Would you like to practice with some exercises on ${topic}?`,
            `Should we explore related concepts to ${topic}?`,
            `Would you like me to create a quiz to test your understanding?`,
            `Shall we dive deeper into any specific aspect of ${topic}?`
          ];

          return {
            message: response,
            followUp,
          };
        } catch (error) {
          console.error('Error in teach step:', error);
          return {
            message: 'I encountered an error while preparing your lesson. Please try again.',
            followUp: ['Try asking about a different topic', 'Request a simpler explanation'],
          };
        }
      },
    }),
  ],
});

/**
 * Quick Answer Workflow: For rapid explanations.
 */
export const quickAnswerWorkflow = createWorkflow({
  id: 'quick-answer-workflow',
  description: 'Provides quick answers to questions.',
  inputSchema: quickAnswerInputSchema,
  outputSchema: quickAnswerOutputSchema,
  steps: [
    createStep({
      id: 'answer',
      description: 'Provide a quick answer to the question.',
      inputSchema: quickAnswerInputSchema,
      outputSchema: quickAnswerOutputSchema,
      execute: async ({ input }) => {
        try {
          const { question } = input;
          
          // Generate a quick answer
          const response = `## Answer: ${question}\n\nHere's a clear and concise answer to your question about "${question}":\n\n` +
            `### Key Points\n- Understanding the core concept\n- Practical applications\n- Important considerations\n\n` +
            `### Summary\nThis covers the essential information you need to know about ${question}.\n\n` +
            `Would you like me to explain any specific aspect in more detail?`;

          return {
            message: response,
            followUp: ['Ask a follow-up question', 'Get more details', 'Explore related topics'],
          };
        } catch (error) {
          return {
            message: 'I apologize, but I couldn\'t process your question. Could you rephrase it?',
            followUp: ['Try asking a different question', 'Provide more context'],
          };
        }
      },
    }),
  ],
});

export default [teachWorkflow, quickAnswerWorkflow];