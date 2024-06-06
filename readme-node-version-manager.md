Step 1: Run the nvm installer
``` 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
Step 2:Update your profile configuration
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
Step 3: 3. Reload the shell configuration
```
source ~/.bashrc
```
Step 4: Verify nvm 
```
nvm -v
```

Step 5: to install latest version

```
nvm install latest
```

Step 6: to install specific version of node
Syntax:
nvm install vX.Y.Z
```
nvm install v14.15.1
```
Step 6.1:Verify Node Version; to check if v14.15.1; if not use the the command nvm use v14.15.1 to set the node version
```
node -v
```
Step 6.2: set node version to v14.15.1
```
nvm use v14.15.1
```
Step 6.3 Install angular
```
npm install -g @angular/cli@11.2.5
```
Verify angular cli 

```
 ng --version
```