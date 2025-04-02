FROM mcr.microsoft.com/devcontainers/javascript-node:22@sha256:be11ae66559ef546d02d407b9f4303391c291182b91d1013f16dc665a53fae82

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo "$SNIPPET" >> "/root/.bashrc"

WORKDIR /workspaces/partall

ENV PNPM_HOME=/workspaces/pnpm
