The messages variable contains a history of the conversation between you and the chatbot and provides the chatbot with the necessary context to make the next generation. The messages are of UIMessage type, which are designed for use in application UI - they contain the entire message history and associated metadata like timestamps.

### Choosing a Provider
- The AI SDK supports dozens of model providers through
- This quickstart uses the Vercel AI Gateway provider, which is the default global provider. This means you can access models using a simple string in the model configuration:
- Gateway --> model: "anthropic/claude-sonnet-4.5";
- Provider --> model: anthropic("claude-sonnet-4-5");

Now that you have a Route Handler that can query an LLM, it's time to setup your frontend. The AI SDK's UI package abstracts the complexity of a chat interface into one hook, useChat.
This page utilizes the useChat hook, which will, by default, use the POST API route you created earlier (/api/chat



- Workflows 
- Agents
- Custom Script
- CLI
 All of these to help work faster and smarter 
- Vercel AI SDK toolkit that's solves pain points 
