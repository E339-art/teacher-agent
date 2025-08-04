import { createWorkflow } from '@mastra/core';
import { educationTool } from '../tools';
import { z } from 'zod';

/**
 * Teach Workflow: Provides a comprehensive and adaptive teaching session.
 * It gathers necessary learner details, delivers a tailored lesson/explanation,
 * and offers follow-up actions such as quizzes or further exploration.
 */
export const teachWorkflow = createWorkflow({
  id: 'teach-workflow',
  description: 'A universal teaching workflow that customizes lessons, explanations, and quizzes for any topic and audience.',
  inputSchema: educationTool.inputSchema,
  outputSchema: educationTool.outputSchema,
  steps: [
    {
      id: 'clarify-audience',
      description: 'Ensure the learner’s profile is clarified for better personalization.',
      handler: (input: any, context: any) => {
        if (!input.audience) {
          return {
            prompt: 'Could you tell me about the intended audience or your background? For example, age, experience level, or learning goals.',
            needed: 'audience',
          };
        }
        return { next: true };
      },
    },
    {
      id: 'clarify-topic',
      description: 'Ensure that the subject matter is defined.',
      handler: (input: any, context: any) => {
        if (!input.topic) {
          return {
            prompt: 'What specific topic would you like to learn about?',
            needed: 'topic',
          };
        }
        return { next: true };
      },
    },
    {
      id: 'clarify-format',
      description: 'Confirm the preferred learning format (e.g., explanation, lesson, quiz, summary).',
      handler: (input: any, context: any) => {
        if (!input.format) {
          return {
            prompt: 'Which format would you prefer? (Choose from: "explanation", "lesson", "summary")',
            needed: 'format',
          };
        }
        return { next: true };
      },
    },
    {
      id: 'teach',
      description: 'Deliver a tailored teaching lesson using the education tool.',
      handler: (input: any, context: any) => {
        const { topic, audience, format = 'lesson', goals, language } = input;
        const result = educationTool.execute(
          {
            topic,
            audience,
            format,
            goals,
            language,
          },
          { runtimeContext: context.runtimeContext }
        );

        // Return the teaching message and follow-up suggestions.
        return {
          message: result.response,
          followUp: result.followUpSuggestions ?? [],
        };
      },
    },
    {
      id: 'follow-up',
      description: 'Offer follow-up actions to further engage and deepen understanding.',
      handler: (input: any, context: any) => {
        const followUpOptions = [
          'Request More Examples',
          'Explore Related Topics',
          'Finish Session',
        ];
        return {
          prompt: 'Would you like to proceed with one of the follow-up actions?',
          options: followUpOptions,
        };
      },
    },
  ],
});

export default [teachWorkflow];