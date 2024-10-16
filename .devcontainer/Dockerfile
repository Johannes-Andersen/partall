FROM mcr.microsoft.com/devcontainers/javascript-node:22@sha256:d493ef047b5ee96655fb543919e6e036dc87582509e6c622c9fe999b6eeb5148

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo "$SNIPPET" >> "/root/.bashrc"

WORKDIR /workspaces/partall

ENV PNPM_HOME=/workspaces/pnpm
