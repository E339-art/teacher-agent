import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

/**
 * Education Tool: A comprehensive teaching tool that generates personalized educational content
 * for any topic, audience, and format.
 */
export const educationTool = createTool({
  id: 'education-tool',
  description: 'Generate personalized educational content including lessons, explanations, quizzes, and summaries for any topic and audience.',
  inputSchema: z.object({
    topic: z.string().describe('The topic or subject to teach about'),
    audience: z.string().optional().describe('Learner profile: age, background, experience level'),
    format: z.enum(['explanation', 'lesson', 'quiz', 'summary']).default('explanation')
      .describe('Teaching format: explanation, lesson, quiz, summary'),
    goals: z.string().optional().describe('Specific learning goals or objectives'),
    language: z.string().optional().describe('Preferred language for the teaching output'),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional().describe('Difficulty level'),
  }),
  outputSchema: z.object({
    response: z.string().describe('A comprehensive, audience-tailored educational response'),
    followUpSuggestions: z.array(z.string()).optional().describe('Suggested next questions or learning steps'),
    practiceQuestions: z.array(z.string()).optional().describe('Practice questions or exercises'),
    keyTakeaways: z.array(z.string()).optional().describe('Key points to remember'),
  }),
  execute: async ({ context }) => {
    const { topic, audience, format, goals, language, difficulty } = context;

    // Build a comprehensive educational response
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

    // Generate follow-up suggestions
    const followUpSuggestions: string[] = [];
    const practiceQuestions: string[] = [];
    const keyTakeaways: string[] = [
      `Understanding ${topic} is fundamental to this field`,
      `Practice is essential for mastery`,
      `Real-world application helps solidify concepts`
    ];

    if (format === 'explanation' || format === 'lesson') {
      followUpSuggestions.push(
        `Would you like to practice with some exercises on ${topic}?`,
        `Should we explore related concepts to ${topic}?`,
        `Would you like me to create a quiz to test your understanding?`,
        `Shall we dive deeper into any specific aspect of ${topic}?`
      );
      
      practiceQuestions.push(
        `Explain ${topic} in your own words`,
        `Give three examples of ${topic} in everyday life`,
        `What questions do you still have about ${topic}?`
      );
    } else if (format === 'quiz') {
      followUpSuggestions.push(
        `Would you like to review the explanations for any questions?`,
        `Should we explore the topics covered in the quiz further?`,
        `Would you like to try a more advanced quiz on ${topic}?`
      );
    }

    return {
      response,
      followUpSuggestions,
      practiceQuestions,
      keyTakeaways,
    };
  },
});