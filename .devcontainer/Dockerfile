FROM mcr.microsoft.com/devcontainers/javascript-node:22@sha256:1ab856e1911cc980d1439b0758f8772236b539da67b79a82f8248ce014c37c8c

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo "$SNIPPET" >> "/root/.bashrc"

WORKDIR /workspaces/partall

ENV PNPM_HOME=/workspaces/pnpm
