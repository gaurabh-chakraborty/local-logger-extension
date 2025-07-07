# Contributing to AI Usage Tracker

We love your input! We want to make contributing to AI Usage Tracker as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

### Pull Requests Process

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

### Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/ai-usage-tracker.git
cd ai-usage-tracker

# Install dependencies
npm install

# Start development
npm run watch

# Package extension
npm run package
```

### Project Structure

```
src/
├── extension.ts          # Main extension entry point
├── commands/            # Command implementations
├── tracking/            # AI usage tracking logic
├── export/             # CSV export functionality
└── ui/                 # User interface components

package.json            # Extension manifest
README.md              # Documentation
USAGE_GUIDE.md         # User guide
```

## Code Style

- Use TypeScript for all new code
- Follow existing code formatting
- Add JSDoc comments for public functions
- Use meaningful variable and function names
- Keep functions small and focused

### Linting

```bash
npm run lint
```

## Testing

```bash
npm test
```

## Bug Reports

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Feature Requests

We track feature requests as GitHub issues. When creating a feature request:

- Use a clear and descriptive title
- Provide a detailed description of the proposed feature
- Include examples of how the feature would be used
- Consider the scope and impact on existing functionality

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone.

### Our Standards

Examples of behavior that contributes to creating a positive environment include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community

### Enforcement

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

## Attribution

This Contributing Guide is adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md).
