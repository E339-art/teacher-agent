import { defineConfig } from 'mastra/config';

export default defineConfig({
  name: 'teacher-agent',
  version: '1.0.0',
  
  // Agent configuration
  agents: {
    teacherAgent: {
      model: process.env.MODEL || 'gemini-2.5-pro',
      maxTokens: 4000,
      temperature: 0.7,
    },
  },

  // Workflow configuration
  workflows: {
    teachWorkflow: {
      timeout: 30000, // 30 seconds
      retries: 2,
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
    maxConcurrentRequests: 10,
  },

  // Security settings
  security: {
    enableRateLimiting: true,
    maxRequestsPerMinute: 60,
    enableInputValidation: true,
  },

  // Cloud deployment settings
  cloud: {
    region: 'us-central1',
    memory: '512Mi',
    cpu: '0.5',
    maxInstances: 10,
    minInstances: 1,
  },
});