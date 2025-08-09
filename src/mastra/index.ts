import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { teachWorkflow, quickAnswerWorkflow } from './workflows';
import { teacherAgent } from './agents';
import { InMemoryStore } from '@mastra/core/storage';

export const mastra = new Mastra({
  workflows: { 
    teachWorkflow, 
    quickAnswerWorkflow
  },
  agents: { teacherAgent },
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
  storage: new InMemoryStore(),
});
