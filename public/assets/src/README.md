# Frantic front-end assets

## Global installation
    sudo gem install sass
    brew install nodejs
    npm install -g grunt-cli

## Local installation
Install dependencies to local node_modules directory, as specified in package.json:

    npm install

## Adding new dependencies
Install and save the dependency to package.json:
    npm install <package-name> --save-dev

## Manual build

    grunt
    grunt dev

## Automatic build
    grunt watch
