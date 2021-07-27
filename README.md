# covid-19-south-africa-functions

## Description

Firebase Cloud Functions for the [CVD19ZA mobile app](https://github.com/shaunsaker/covid-19-south-africa-app).

## Development

`NOTE:` [nvm](https://github.com/nvm-sh/nvm) is required to easily switch between node,js versions. Firebase cloud functions only supports node.js v8 and v10. We use v10.13.0.

Install dependencies

```
nvm use 10
yarn install
```

## Deployment

```
nvm use 10.13.0
yarn deploy
```

## Publishing

`NOTE`: With each release, the version in [package.json](./package.json) should be updated if the package has changed. This command should be run before each release.`
