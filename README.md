# covid-19-south-africa-functions

## Description

Firebase Cloud Functions for the CVD19ZA mobile app.

## Development

`NOTE:` [nvm](https://github.com/nvm-sh/nvm) is required to easily switch between node,js versions. Firebase cloud functions only supports node.js v8 and v10. We use v10.

```
nvm use 10
yarn run dev
```

## Deployment

```
nvm use 10
yarn run deploy
```

## Publishing

`NOTE`: With each release, the version in [package.json](./package.json) should be updated if the package has changed. This command should be run before each release.`
