Step 1: Build an assistant
Each developer (or 2) gets a set of requirements for an assistant. We will give them a shell frontend app to start with: @GitHub - Omerisra6/elementor-editor-ai-workshop . We will grovide them with a Vercel AI Gateway API key and a link to the Vercel AI SDK for experimentation

For example, you need to create a banking assistant that will have the following context available: accounts.csv, guidelines.md. The assistant should help the bank employees do their daily work. Requirements: the assistant should help the employees get account balances, it should check for account loans, etc.

Step 2: Keep your secrets
In this step, we will tell each team that their assistant needs to hide a detail that exists inside their context, and they will need to update their system prompt to guide the assistant to hide it.

For example, the balance of the Batsri account should not be accessible to the user.

That part should help them improve their prompt engineering skills.

Step 3: Red Team Game
Each team will get an opponent team to play against.

The rules of the game are:

The goal is to get the secret from the opponent team assistant based on a hint.

The team that gets it first wins.

All tricks are valid.

Step 4: assistant to agent - adding tools
In this step, the developers will create one/two tools that will be accessible for their assistant.

For example, the banking assistant could have a convert_currency tool that will help her with currency queries.
