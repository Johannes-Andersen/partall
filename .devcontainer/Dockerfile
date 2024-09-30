FROM mcr.microsoft.com/devcontainers/javascript-node:22@sha256:61c3428ca51d3e899b4d2850e0395fd72d67c7e7de5139c9a9d7d6e2843e3284

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo "$SNIPPET" >> "/root/.bashrc"

WORKDIR /workspaces/partall

ENV PNPM_HOME=/workspaces/pnpm
