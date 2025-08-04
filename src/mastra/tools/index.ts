import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

/**
 * Education Tool: A universal teaching tool for all topics, all audiences, and all teaching formats.
 * Supports explanations, lessons, summaries, and quizzes, adapting to user level and learning goals.
 */
export const educationTool = createTool({
  id: 'education-tool',
  description: 'Teach, explain, summarize, and quiz on any topic for any age or experience level.',
  inputSchema: z.object({
    topic: z.string().describe('The topic or question to teach about, e.g., "cell division" or "quantum physics"'),
    audience: z.string().optional().describe('Learner profile: age, background, level, e.g., "7-year-old", "beginner adult", "high school student"'),
    format: z.enum(['explanation', 'lesson', 'quiz', 'summary']).default('explanation')
      .describe('Teaching format: explanation, lesson, quiz, summary'),
    goals: z.string().optional().describe('Specific learning goals (optional)'),
    language: z.string().optional().describe('Preferred language for the teaching output (optional)'),
  }),
  outputSchema: z.object({
    response: z.string().describe('A clear, accurate, audience-tailored teaching response'),
    followUpSuggestions: z.array(z.string()).optional().describe('Suggested next questions or learning steps'),
  }),
  execute: async ({ context }) => {
    const { topic, audience, format, goals, language } = context;

    const { text, usage } = await streamText({
      model: google(process.env.MODEL ?? 'gemini-1.5-pro'),
      prompt: `
        Teach about "${topic}"
        ${audience ? ` for ${audience}` : ''}
        ${format ? ` as a ${format}` : ''}
        ${goals ? ` with the learning goals: ${goals}` : ''}
        ${language ? ` in ${language}` : ''}
      `,
    });

    const suggestions = [
      `Would you like a quiz about ${topic}?`,
      `Need deeper examples on ${topic}?`,
      `Shall I summarize this topic for you?`
    ];

    return {
      response: text,
      followUpSuggestions: suggestions,
    };
  },
});