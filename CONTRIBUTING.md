# Contributing

## Getting Started

The basic steps to contributing are:

1. Fork the repository on GitHub
   - https://github.com/Johannes-Andersen/Johand/fork
2. Create a new branch for your changes
3. Commit your changes to your forked repository
4. Submit a pull request to the `main` branch of the upstream repository
5. Wait for your pull request tests to pass; if they fail, fix the issues and push the fixes to your forked repository
6. Wait for a maintainer to review your pull request

## Installation

### Prerequisites

This repo uses [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) to manage dependencies and run scripts.

- [Node.js](https://nodejs.org/en/) (v21 or higher)
- [npm](https://www.npmjs.com/) (v10 or higher)

### Running linting

We use [AGLint](https://github.com/AdguardTeam/AGLint) to lint the lists and [prettier](https://prettier.io/) to format everything else.
If you have VSCode installed, install the recommended extensions to lint the lists. The recommended extensions are found in `.vscode/extensions.json`.

If you don't have VSCode installed, you can run the linter manually by running `npm run lint` in the root of the repository.
Tip: You can run `npm run lint:fix` to fix some of the linting errors automatically.

### CODEOWNERS

There are CODEOWNERS files in the repository. These files are used to assign reviewers to pull requests automatically.
There are small CODEOWNERS files in subfolders to make them more manageable. These files are then generated into a global CODEOWNERS file.

So, if you are making changes to any CODEOWNERS file across the repo, run `npm run codeowners` to update the global CODEOWNERS file.

### Building

To build the filter lists, run `npm run build` in the root of the repository.

This will create an `out` folder with the built filter list.

If you only want to build a specific filter list, you can run `npm run build -- --list=<listName>`.

## Updating the filter lists

### Adding a new rule

> [!IMPORTANT]  
> Make sure to have a read over the [README](README.md) to see if there are any special instructions or policies for that filter list.

You can edit the corresponding filter list file to add a new rule. For example, if you want to add a new rule to the ad list, you can edit the `filters.txt` file under the `ads` folder.

### Adding a new list

> [!NOTE]  
> Normally, you do not need to add a new list. Preferably, you should add new rules to existing lists.
>
> If that is not possible, consider whether the new list fits this repository well. If you are unsure, you can open an issue to discuss it.
>
> It is always better to create an issue and discuss it before making a pull request to save time on a pull request that may be rejected.

To add a new list, create a folder inside the filters folder.

- The name is used to identify the purpose of the list. For example, an ad list would be called `ads.txt`.
- Create the `header.txt` file. This metadata will be appended to the top of the `filters.txt` file in the output.
- Create the `CODEOWNERS` file. This is used to assign reviewers to pull requests automatically.

You should also update the `README.md` file to include the new list. You should also update the issue templates in the `.github/ISSUE_TEMPLATE` folder.
The maintainers will create the appropriate GitHub tags and GitHub Actions workflows for the new list.
