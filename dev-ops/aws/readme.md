# Learning Amazon Web Services Essentials
content will be added

## Build your first AWS server

ssh command to access instantiated server
```shell
$ssh -i key-name.pem server-name(pre-defined)@public IP4 address
$ssh -i testing.pem ec2-user@3.38.117.17
```

### Install Node js with NVM
Run below two commands in terminal to install Node Version Manager.

```shell
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
$export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

And then install Node.js long stable version like below. 

```shell
# install node js LTS version
$nvm install --lts
# use node js LTS version
$nvm use --lts
```

## Reference 
- [Intellipaat : AWS Tutorial For Beginners](https://www.youtube.com/playlist?l4959
- [Inflearn : Build your first server in AWS](https://www.inflearn.com/course/aws-%EC%84%9C%EB%B2%84-%EA%B5%AC%EC%B6%95-%EC%8B%9C%EC%9E%91/dashboard)
