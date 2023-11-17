# Contributing

## Getting Started

The basic steps to contributing are:

1. Fork the repository on GitHub
   - https://github.com/Johannes-Andersen/Johand/fork
2. Create a new branch for your changes
3. Commit your changes to your forked repository
4. Submit a pull request to the `main` branch of the upstream repository
5. Wait for your pull request tests to pass, if they fail, fix the issues and push the fixes to your forked repository
6. Wait for a maintainer to review your pull request

## Installation

### Prerequisites

We use [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) to manage dependencies and run scripts.

- [Node.js](https://nodejs.org/en/) (v21 or higher)
- [npm](https://www.npmjs.com/) (v10 or higher)

### Running linting

We use [AGLint](https://github.com/AdguardTeam/AGLint) to lint the lists, and [prettier](https://prettier.io/) to format everything else.
If you got VSCode installed, install the recommended extensions to lint the lists. The recommended extensions are found in `.vscode/extensions.json`.

If you don't have VSCode installed, you can run the linter manually by running `npm run lint` in the root of the repository.
Tip: You can run `npm run lint:fix` to automatically fix some of the linting errors.

### CODEOWNERS

There are CODEOWNERS files in the repository. These files are used to automatically assign reviewers to pull requests.
To make them more manageable, we use a smaller CODEOWNERS files in subfolders. These files are then generated into a global CODEOWNERS file.

So, if you are making changes to any CODEOWNERS file across the repo, make sure to run `npm run codeowners` to update the global CODEOWNERS file.

### Building

To build the filter lists, run `npm run build` in the root of the repository.

This will create a `out` folder with the built filter list.

If you only want to build a specific filter list, you can run `npm run build -- --list=<listName>`.

## Updating the filter lists

### Adding a new rule

> [!IMPORTANT]  
> Make sure to have a read over the [README](README.md) to see if there are any special instructions or policies for that filter list.

To add a new rule, you can edit the corresponding filter list file. For example, if you want to add a new rule to the Norwegian ad list, you can edit the `filters.txt` file under the `norwegian-ads` folder.

### Adding a new list

> [!NOTE]  
> Normally, you should not need to add a new list. Preferably, you should add new rules to existing lists.
>
> If thats not possible, you should consider if the new list is a good fit for this repository. If you are unsure, you can open an issue to discuss it.
>
> It is always better to create a issue to discuss it before creating a pull request to avoid wasting time on a pull request that will be rejected.

To add a new list, create a new folder inside the filters folder. The folder name should be in the structure of: `<group>-<name>`. For example: `norwegian-ads`.

- Groups are used to group filter lists together. For example, all Norwegian lists are grouped together under the `norwegian` group. So when the lists are built, they will be built into a single file called `norwegian-all.txt`.
- The name is used to identify the purpose of the list. For example, the Norwegian ad list is called `norwegian-ads.txt`.
- Create the `header.txt` file. This is the metadata that is appended to the top of the `filters.txt` file in the output.
- Create the `CODEOWNERS` file. This is used to automatically assign reviewers to pull requests.

You should also update the `README.md` file to include the new list. There is also issue templates in the `.github/ISSUE_TEMPLATE` folder that you may should update.
The maintainers will create the appropriate GitHub tags and GitHub Actions workflows for the new list.
