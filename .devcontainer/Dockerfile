FROM mcr.microsoft.com/devcontainers/javascript-node:22@sha256:2ac7b2c5874c894d1589ab92d7d0fed0285063d3f9bfa0db1aeb8162fa2a89df

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo "$SNIPPET" >> "/root/.bashrc"

WORKDIR /workspaces/partall

ENV PNPM_HOME=/workspaces/pnpm
