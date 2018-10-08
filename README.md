# Getting Started
```
git clone https://github.com/setlife-network/setbounty.git
cd setbounty
yarn install
```

# File Structure

There are three packages within this monorepo

1. **api** - All backend functionality
2. **chrome** - Chrome extension
3. **tools** - Developer tools which can be used by both `api` and `chrome`

# Development

To run the API
```
cd api
yarn dev
```

To bundle the Chrome extension
```
cd chrome
yarn dev
```

~~Alternatively you can run `yarn build` or `yarn dev` at the root level~~ **WHICH I HAVEN'T SETUP YET**

## Tooling

Lerna scripts will run an npm script in each package that contains that script ie. `lerna build` will run a build script for the api and chrome extension all at once.

See [Lerna Docs](https://github.com/lerna/lerna/blob/master/README.md) for more info.

## Installing Dependencies

Dependencies should be installed at the package level only. Install devDependencies like webpack, babel, eslint, etc. to the `tools` package.

Use the following commands to easily install package-specific node modules without changing folders all the time
```
# Install module-1 to api
lerna add module-1 --scope=api

# Install module-1 to chrome in devDependencies
lerna add module-1 --scope=chrome --dev

# Make tools package a dependency of api
lerna add tools --scope=api

# Install babel-core in all modules
lerna add babel-core
```
