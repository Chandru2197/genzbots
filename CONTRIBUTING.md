# Contributing to GenZBots

We love your input! We want to make contributing to GenZBots as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Project Structure

```
src/
├── app/              # App router components and layouts
├── assets/           # Static assets (fonts, icons, images)
├── components/       # Reusable React components
│   ├── about_page/  # About page specific components
│   ├── custome/     # Custom styled components
│   ├── layout/      # Layout components
│   └── service/     # Service-related components
├── lib/             # Utility functions and helpers
├── pages/           # Pages using the pages router
├── shared/          # Shared utilities and types
└── utils/           # General utility functions
```

## Styling Guidelines

- Use Tailwind CSS for styling when possible
- Create reusable components in the `components/custome` directory
- Follow the existing pattern for animations using Framer Motion
- Use styled-components for complex custom styling

## Pull Request Process

1. Update the README.md with details of changes to the interface
2. Update the package.json version if applicable
3. Your PR will be merged once you have the sign-off of at least one developer

## Any Questions?

Feel free to open an issue with the tag "question".
