FROM mcr.microsoft.com/devcontainers/javascript-node:22@sha256:b3030464fe18c02840992f9b0b46422e0ea3589a424c9617efda22b71308f023

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo "$SNIPPET" >> "/root/.bashrc"

WORKDIR /workspaces/partall

ENV PNPM_HOME=/workspaces/pnpm
