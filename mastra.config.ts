import { defineConfig } from 'mastra/config';

export default defineConfig({
  name: 'teacher-agent',
  version: '1.0.0',
  
  // Agent configuration
  agents: {
    teacherAgent: {
      description: 'A comprehensive AI teacher for all subjects and levels.',
      provider: 'google',
      model: process.env.MODEL || 'gemini-2.5-pro',
      maxTokens: 4000,
      temperature: 0.7,
      instructions: [
        'You are an expert teacher capable of teaching any subject to any audience.',
        'Adapt your teaching style to the learner\'s needs and preferences.',
        'Use a mix of explanations, examples, and questions to create an engaging learning experience.',
      ],
    },
  },

  // Workflow configuration
  workflows: {
    teachWorkflow: {
      timeout: 30000, // 30 seconds
      retries: 2,
      concurrency: 5, // Limit concurrent full teaching sessions
    },
    quickAnswerWorkflow: {
      timeout: 15000, // 15 seconds
      retries: 1,
    },
    learningPathWorkflow: {
      timeout: 45000, // 45 seconds
      retries: 2,
    },
  },

  // Tool configuration
  tools: {
    educationTool: {
      timeout: 25000, // 25 seconds
      retries: 2,
    },
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: 'json',
  },

  // Performance optimization
  performance: {
    enableCaching: true,
    cacheTTL: 3600, // 1 hour
    maxConcurrentRequests: 20,
    cacheKey: 'user-query',
  },

  // Security settings
  security: {
    enableRateLimiting: true,
    maxRequestsPerMinute: 100,
    ipRateLimiting: 20,
    enableInputValidation: true,
    strictValidation: true,
  },

  // Cloud deployment settings
  cloud: {
    region: 'us-central1',
    memory: '512Mi',
    cpu: '1',
    maxInstances: 20,
    minInstances: 1,
    autoscaling: {
      cpuTargetUtilization: 0.7,
      memoryTargetUtilization: 0.7,
    },
  },
});