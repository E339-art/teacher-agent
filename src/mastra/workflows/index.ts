import { createWorkflow } from '@mastra/core/workflows';

/**
 * Simple Teaching Workflow: Provides educational content for any topic.
 */
export const teachWorkflow = createWorkflow({
  id: 'teach-workflow',
  description: 'A simple teaching workflow that provides educational content for any topic.',
  steps: [
    {
      id: 'teach',
      description: 'Provide educational content about the requested topic.',
      input: {
        topic: { type: 'string', description: 'The topic to teach about' },
        audience: { type: 'string', description: 'The target audience', optional: true },
        format: { type: 'string', description: 'Teaching format', optional: true }
      },
      output: {
        message: { type: 'string', description: 'The educational response' },
        followUp: { type: 'array', description: 'Follow-up suggestions' }
      }
    },
  ],
});

/**
 * Quick Answer Workflow: For rapid explanations.
 */
export const quickAnswerWorkflow = createWorkflow({
  id: 'quick-answer-workflow',
  description: 'Provides quick answers to questions.',
  steps: [
    {
      id: 'answer',
      description: 'Provide a quick answer to the question.',
      input: {
        question: { type: 'string', description: 'The question to answer' }
      },
      output: {
        message: { type: 'string', description: 'The answer' },
        followUp: { type: 'array', description: 'Follow-up suggestions' }
      }
    },
  ],
});

export default [teachWorkflow, quickAnswerWorkflow];