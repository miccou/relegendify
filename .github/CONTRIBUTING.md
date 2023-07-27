# Contributing

Thanks for your interest in contributing to this repository. Please read the following information to get started with the development environment and start working on issues.

## PR and branch naming

Please use the following convention for naming your pull requests and branches: 

- PR: `#{ISSUE ID} PR title` e.g. `#543 foo all the bars`
- Branch: `issues/{ISSUE ID}/description` e.g. `issues/1337/add-elite-stuff`

## Choosing an issue and starting work on it

To get started, you can either choose an existing issue from <https://github.com/miccou/relegendify/issues> or create your own issue if you can identify a feature improvement or bug. 

Once you've identified an issue to work on, you should add a comment to the issue stating you're going to begin work (this avoids duplicate effort).

## Getting a copy of the code

1. Fork the repo to your account
2. Clone the fork
3. Checkout a new feature branch using the naming convention above e.g. `issues/69/do-the-thing`
4. Start developing and committing your changes regularly
5. Push your feature branch to the fork
6. Using the GitHub console or CLI, create a pull request from your feature branch, to merge into upstream master

If your fork will be used for multiple feature branches, you should keep it up to date by periodically running `git checkout master && git pull upstream master`.

## Developing the solution

### Local environment

Prerequisites for local environment development:
- Node 20.x
- Angular CLI (install with `npm i -g @angular/cli`)
  
To get started:
1. Fork the repository and clone your fork
2. From the root of the repository run `npm i` to install dependencies
3. Run `ng serve` and navigate to <http://localhost:4200>

### Codespaces

This repository include a devcontainer configuration for generating a GitHub codespace with prerequisites and suggested extensions already installed.

To get started:
1. Create a codespace via your forked version of this repository
2. Once the codespace is started run `npm i` to install dependencies
3. Run `ng serve` and navigate to <http://localhost:4200>