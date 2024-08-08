FROM mcr.microsoft.com/devcontainers/javascript-node:22@sha256:e2228dfc5285942804c12b897f914e3262e9bba48c2ff473bad8b9fbd9bf7d26

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo "$SNIPPET" >> "/root/.bashrc"

WORKDIR /workspaces/partall

ENV PNPM_HOME=/workspaces/pnpm
