# 🎓 Intelligent Teacher Agent

An advanced AI-powered teacher agent built with the Mastra framework that provides personalized education across all subjects and skill levels. This agent functions as a real teacher, not just a weather forecaster, offering comprehensive learning experiences.

## 🌟 Features

### 🎯 **Universal Teaching Capabilities**
- **All Subjects**: Mathematics, Sciences, Humanities, Technology, Business, Life Skills
- **All Ages**: Children (5-12), Teens (13-18), Adults, Seniors
- **All Levels**: Beginner, Intermediate, Advanced
- **All Formats**: Explanations, Structured Lessons, Interactive Quizzes, Summaries

### 🧠 **Intelligent Teaching Methods**
- **Adaptive Learning**: Automatically adjusts to learner's knowledge level
- **Socratic Method**: Guides discovery through thoughtful questions
- **Real-world Examples**: Connects concepts to practical applications
- **Multi-modal Explanations**: Uses analogies, stories, and visual descriptions
- **Progressive Difficulty**: Builds from fundamentals to advanced concepts

### 📚 **Educational Workflows**
1. **Comprehensive Teaching** (`teachWorkflow`): Full lessons with assessment and follow-up
2. **Quick Answers** (`quickAnswerWorkflow`): Rapid explanations for immediate questions
3. **Learning Paths** (`learningPathWorkflow`): Structured journeys for topic mastery

### 🛠 **Advanced Tools**
- **Education Tool**: Generates personalized content using Google's Gemini AI
- **Key Takeaways**: Extracts and highlights important concepts
- **Practice Questions**: Provides exercises and assessments
- **Follow-up Suggestions**: Guides continued learning

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Google AI API key
- Mastra Cloud account (for deployment)

### Local Development

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd teacher-agent
   pnpm install
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

3. **Run Development Server**
   ```bash
   pnpm dev
   ```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI API key | ✅ |
| `MODEL` | AI model to use (default: gemini-2.5-pro) | ❌ |
| `MASTRA_CLOUD_API_KEY` | Mastra Cloud API key | ✅ (for deployment) |
| `MASTRA_CLOUD_PROJECT_ID` | Mastra Cloud project ID | ✅ (for deployment) |
| `LOG_LEVEL` | Logging level (default: info) | ❌ |

## ☁️ Mastra Cloud Deployment

### 1. **Prepare for Deployment**
```bash
# Build the project
pnpm build

# Test locally
pnpm test
```

### 2. **Deploy to Mastra Cloud**
```bash
# Deploy using Mastra CLI
mastra deploy

# Or deploy via Mastra Cloud dashboard
# Upload your built project files
```

### 3. **Configure Cloud Settings**
- Set environment variables in Mastra Cloud dashboard
- Configure scaling and performance settings
- Set up monitoring and logging

## 📖 Usage Examples

### Basic Teaching Session
```
User: "I want to learn about photosynthesis"
Agent: "I'd love to help you learn about photosynthesis! To provide the best experience, could you tell me:
• Your age or grade level
• Your experience with biology/science
• Any specific learning goals
• How you prefer to learn"
```

### Quick Question
```
User: "What is the Pythagorean theorem?"
Agent: "The Pythagorean theorem states that in a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides: a² + b² = c²..."
```

### Learning Path Creation
```
User: "I want to master Python programming"
Agent: "Great goal! Let me create a personalized learning path for you. What's your current experience level with programming?"
```

## 🏗 Architecture

```
src/mastra/
├── agents/
│   └── index.ts          # Teacher agent configuration
├── tools/
│   └── index.ts          # Education tool with AI integration
├── workflows/
│   └── index.ts          # Teaching workflows
└── index.ts              # Main Mastra configuration
```

### Key Components

- **Teacher Agent**: Core AI teacher with comprehensive instructions
- **Education Tool**: Generates personalized educational content
- **Teaching Workflows**: Structured learning experiences
- **Mastra Integration**: Cloud-ready deployment configuration

## 🎨 Customization

### Agent Personality
Edit `src/mastra/agents/index.ts` to customize:
- Teaching style and approach
- Subject expertise areas
- Interaction guidelines
- Response structure

### Educational Content
Modify `src/mastra/tools/index.ts` to:
- Add new teaching formats
- Customize content generation prompts
- Integrate additional AI models
- Add subject-specific logic

### Workflows
Enhance `src/mastra/workflows/index.ts` to:
- Create new learning scenarios
- Add assessment workflows
- Implement progress tracking
- Build collaborative learning features

## 🔧 Development

### Adding New Subjects
1. Update agent instructions in `agents/index.ts`
2. Enhance education tool prompts in `tools/index.ts`
3. Add subject-specific workflows if needed

### Integrating External APIs
1. Add API client to dependencies
2. Create new tools for API integration
3. Update workflows to use new tools

### Performance Optimization
- Implement response caching
- Add request rate limiting
- Optimize AI model usage
- Monitor response times

## 📊 Monitoring & Analytics

### Built-in Logging
- Request/response logging
- Error tracking
- Performance metrics
- User interaction patterns

### Mastra Cloud Analytics
- Usage statistics
- Performance monitoring
- Cost tracking
- User feedback collection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

ISC License - see LICENSE file for details

## 🆘 Support

- **Documentation**: Check this README and code comments
- **Issues**: Report bugs via GitHub issues
- **Mastra Cloud**: Contact Mastra support for deployment issues
- **Google AI**: Consult Google AI documentation for API issues

---

**Ready to revolutionize education? Deploy your teacher agent on Mastra Cloud today! 🚀**
