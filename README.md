# Rafikey AI Web

This is the official web frontend for the Rafikey AI service. Rafikey provides a safe and private space for young people to access information and services related to Sexual and Reproductive Health and Rights (SRHR).

This project is built with Vue 3 and Vite, providing a fast and modern development experience.

## Table of Contents

- [Rafikey AI Web](#rafikey-ai-web)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Project Setup](#project-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Available Scripts](#available-scripts)
  - [Environment Variables](#environment-variables)
  - [Contributing](#contributing)

## Tech Stack

This project is built using a modern web development stack:

- **Framework**: [Vue 3](https://vuejs.org/) (with Composition API and `<script setup>`)
- **Build Tool**: Vite
- **Language**: TypeScript
- **Routing**: Vue Router
- **State Management**: Pinia
- **Styling**: Tailwind CSS with DaisyUI
- **Animation**: GSAP (with ScrollTrigger)
- **Linting & Formatting**: ESLint and Prettier

## Project Setup

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v22.x or later recommended)
- A package manager like `npm`, `yarn`, or `pnpm`.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    cd RafikeyAIWeb
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

## Available Scripts

You can run the following commands from the root of the project:

- **`npm run dev`**: Starts the Vite development server with Hot Module Replacement (HMR).

- **`npm run build`**: Compiles the project for production. This includes type-checking and creates an optimized build in the `dist` directory.

- **`npm run preview`**: Serves the production build from the `dist` directory locally to preview it.

- **`npm run lint`**: Lints the codebase using ESLint and attempts to fix any issues.

- **`npm run format`**: Formats the code in the `src/` directory using Prettier.

- **`npm run zip-dist`**: Creates a `rafikey-web.zip` file containing the contents of the `dist` directory.

## Environment Variables

The project uses environment variables for configuration. You can create a `.env` file in the root of the project to set them. An example is `VITE_APP_RAFIKEY_CHATBOT_FRONTEND`, which is used to link to the chatbot application.

```
# .env
VITE_APP_RAFIKEY_CHATBOT_FRONTEND=https://chat.askrafikey.com
```

## Contributing

Contributions are welcome! Please follow the standard fork, branch, and pull request workflow. Ensure your code passes the linting and formatting checks before submitting a pull request.

---

*This README was generated to help you get started. Feel free to edit and expand it as the project grows!*