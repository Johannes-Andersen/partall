FROM mcr.microsoft.com/devcontainers/javascript-node:22@sha256:f1e8fdca29c437891d8d793bf59d368e4c1850884c22161f7401086da63332d4

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo "$SNIPPET" >> "/root/.bashrc"

WORKDIR /workspaces/partall

ENV PNPM_HOME=/workspaces/pnpm
