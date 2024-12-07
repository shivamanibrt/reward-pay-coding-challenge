# Reward Pay Coding Challenge

## Project Overview

This is a TypeScript-based financial metrics calculator for the Reward Pay coding challenge. The project provides utility functions to calculate various accounting and financial metrics based on account data.

## Prerequisites

- Node.js (v18+ recommended)
- pnpm (Package Manager)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/shivamanibrt/reward-pay-coding-challenge.git
cd reward-pay-coding-challenge
```

2. Install dependencies:

```bash
pnpm install
```

## Running the Application

### Local Development Mode

To run the application in development mode with hot reloading:

```bash
pnpm dev
```

### Production Mode

1. Build the application:

```bash
pnpm build
```

2. Start the production server:

```bash
pnpm start
```

## Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `pnpm test`     | Run test suite using Mocha               |
| `pnpm build`    | Compile TypeScript to JavaScript         |
| `pnpm start`    | Run the compiled JavaScript (production) |
| `pnpm dev`      | Run the project in development mode      |
| `pnpm lint`     | Run ESLint                               |
| `pnpm lint:fix` | Automatically fix linting issues         |
| `pnpm prettier` | Format code using Prettier               |

## Project Structure

```
project-root/
│
├── src/
│   ├── index.ts
│   ├── types/
│   │   └── dataTypes.ts
│   └── utils/
│       └── calculateMetrics.ts
│
├── tests/
│   └── testcase.test.ts
│
├── tsconfig.json
└── package.json
```

## Running Tests

```bash
pnpm test
```

## Linting and Code Quality

- Lint code: `pnpm lint`
- Fix linting issues: `pnpm lint:fix`
- Format code: `pnpm prettier`

## Technologies

- TypeScript
- Node.js
- Mocha
- Chai
- ESLint
- Prettier

## License

ISC License
