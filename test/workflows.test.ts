import { quickAnswerWorkflow, teachWorkflow } from '../src/mastra/workflows.js';
import { Mastra } from '@mastra/core';
import { expect } from 'chai';

describe('Workflows', () => {
  let mastra: Mastra;

  before(() => {
    mastra = new Mastra({
      workflows: { quickAnswerWorkflow, teachWorkflow },
    });
  });

  describe('quickAnswerWorkflow', () => {
    it('should execute and return a generic answer', async () => {
      const result = await mastra.workflows.quickAnswerWorkflow({
        question: 'What is the capital of France?',
      });

      expect(result).to.be.an('object');
      expect(result.message).to.be.a('string');
      expect(result.message).to.include('Here\'s a clear and concise answer to your question');
      expect(result.followUp).to.be.an('array');
    });
  });

  describe('teachWorkflow', () => {
    it('should execute and return a lesson plan', async () => {
      const result = await mastra.workflows.teachWorkflow({
        topic: 'Photosynthesis',
        format: 'lesson',
      });

      expect(result).to.be.an('object');
      expect(result.message).to.be.a('string');
      expect(result.message).to.include('## Lesson Plan');
      expect(result.message).to.include('### Learning Objectives');
      expect(result.followUp).to.be.an('array');
    });
  });
});
