FROM mcr.microsoft.com/devcontainers/javascript-node:22@sha256:78fda8c284dd3247d7385d55974e278314233f1acc130ba89757703137dbda45

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo "$SNIPPET" >> "/root/.bashrc"

WORKDIR /workspaces/partall

ENV PNPM_HOME=/workspaces/pnpm
