<p float="left">
  <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"  alt=""/ width="100">
  <img src="https://4.bp.blogspot.com/-X7UPkOQjQuQ/WuHLUEM7SDI/AAAAAAAAAOY/rXGXSOfPP2ckF_cSOC3C5d3B_BhIgNcxACLcBGAs/s1600/mongodb%2B%25282%2529.png"  alt="" width="100"/>
</p>

# Debt Register API

REST API for control a collections of debts from users

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


--- 
### MongoDB
#### MongoDB installation on:
- [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- [Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu)
- [macOs](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

---
###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/douglas-martins/debt-register-api
    $ cd debt-register-api
    $ yarn install

## Configure app


```bash
# Copy the base file for the environment one (from the / for this project)
$ cp .env_template .env
```

Default value for .env:

```dotenv
APP_VERSION=1.0.0                                 
HOST=localhost    
PORT=3000   
DATABASE_HOST=127.0.0.1   
DATABASE_PORT=27017   
DATABASE_NAME=debts
```

## Running the project

    $ yarn start dev
