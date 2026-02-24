## Goal of the Presentation

- Explain why it’s worth building your own “custom agent” tool
- Understand how to control model behavior (prompt engineering)
- Build a simple agent together that follows specific instructions

## Part 1 — Why Build Your Own Agent?

### Out-of-the-box models are **generic**, but:
- They lack domain context
- They don’t follow strict response formats
- They can’t comply with specific business or project rules

### A custom agent allows you to:
- Define its **role, tone, and knowledge scope**
- **Control** the format and consistency of responses
- **Integrate** with your own data or APIs

## Part 2 — Core Prompt Engineering Techniques

### 1. Role Prompting
Give the model an identity and a point of view.  
Defines context, tone, and personality of the response.

---

### 2. Few-shot Prompting
Teach the model through examples.  
Helps it learn patterns and response structure from demonstrations.

---

### 3. Chain-of-Thought Prompting
Encourage the model to reason step by step.  
Useful for logic, reasoning, and structured problem-solving.

---

### 4. Output Formatting
Force a consistent structure or style in the model’s answers.  
Ensures predictability and easier post-processing.

---

### 5. Guardrails
Define what the model **can** and **cannot** say.  
Protects from unsafe, off-topic, or non-compliant answers.

---

## Part 3 — Building a Simple Agent (Live Demo)

## Goal
An agent that explains technical terms in simple language and always responds in a structured way.

### Steps

1. **Define the role**  
   “You are a teacher who explains complex terms in simple words.”

2. **Specify the response format**  
   “Always answer in a structured format with two fields: explanation and example.”

3. **Add one or two examples (few-shot)**  
   Show what a correct answer looks like.

4. **Ask the audience for input**  
   “Give me a difficult technical term — let’s test our agent.”

5. **Show the model’s response**

6. **Discuss the outcome**
    - Did it follow the format?
    - Was the explanation clear?
    - What could be improved (tone, safety rule, clarity)?


## Part 4 — What’s Next?

- **Memory** – remembering past context
- **External data (RAG)** – adding knowledge from your own sources
- **API integrations** – connecting to real-time data  

The AI SDK comes with several providers that you can use to interact with different language models:

AI Gateway Provider
The AI Gateway provider connects you to models from multiple AI providers through a single interface. Instead of integrating with each provider separately, you can access OpenAI, Anthropic, Google, Meta, xAI, and other providers and their models.

Access models from multiple providers without having to install additional provider modules/dependencies
