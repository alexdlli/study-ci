# Learn CI with GitHub Actions

## Overview

This repository is designed as a beginner's guide to understanding and implementing Continuous Integration (CI) using GitHub Actions. It features a simple TypeScript project that includes a sum function and tests for this function using Jest.

## Prerequisites

Before you clone and run this project, ensure you have the following installed on your system:
- Node.js (preferably the latest LTS version)
- npm (Node Package Manager)

## CI Workflow
The CI workflow is defined in the .github/workflows/ci.yml file. Here’s a brief overview of what each step in the workflow does:

Checkout: Checks out the source code for the push or pull request.
Set up Node.js: Installs Node.js using the actions/setup-node action. This is configured to use Node.js version 20.
Install dependencies: Runs npm ci to install all dependencies. This ensures that the environment is consistent and uses exact versions defined in package-lock.json.
Run tests: Executes npm test to run the tests. The CI process will fail if any test fails.
Contributing
If you'd like to contribute to this project, start by forking the repository. Make your changes and submit a pull request. All contributions should include tests if they add or change functionality.


## Acknowledgements
GitHub Actions for providing the CI platform.
Node.js and npm for the runtime and package management.
Jest for the testing framework.
