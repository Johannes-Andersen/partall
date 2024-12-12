FROM mcr.microsoft.com/devcontainers/javascript-node:22@sha256:896bfba10582c9239d1c36bab53b80af06253019f62b846fa440ee643ca63eb1

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo "$SNIPPET" >> "/root/.bashrc"

WORKDIR /workspaces/partall

ENV PNPM_HOME=/workspaces/pnpm
