FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:16

USER root

# Install zsh
RUN sudo apt update && sudo apt install -y \
    zsh curl

# Install plugins
RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
RUN git clone https://github.com/lukechilds/zsh-nvm ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-nvm

# Set the default shell to zsh
ENV SHELL /bin/zsh

# Clone the dotfiles repository
RUN mkdir -p ~/dev/dotfiles
RUN git clone https://github.com/miccou/dotfiles.git ~/dev/dotfiles

 # Run the installation script  
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

# Copy custom dotfile
RUN cat ~/dev/dotfiles/.zshrc > ~/.zshrc

# Install the AWS CLI
# RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
# RUN unzip awscliv2.zip && sudo ./aws/install && rm awscliv2.zip

# Install ionic
RUN npm install -g @angular/cli

# Keep container alive
CMD exec /bin/bash -c "echo Container started ; trap \"exit 0\" 15; while sleep 1 & wait $!; do :; done"