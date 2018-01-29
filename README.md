# crudTest API

This repository houses the core API for crudtest.com.

## Contributing

Want to raise an issue or pull request? Do give our [Contributing page](https://github.com/abinavseelan/crudtest-api/blob/master/CONTRIBUTING.md) a read. 🤓

### Getting started

_Note: This has been developed on node 9.x. Please develop your feature and/or bugfix with a node version that is 9.0 and above_ 😄

1. Clone repository
2. Run `npm install` to install all the dependencies
3. Run `npm run start:dev` to fire up the server

### Development

There is a pre-commit hook to run the linter. Please make sure that your code conforms to the linting rules. We use [Airbnb's linting rules](https://github.com/airbnb/javascript) in this project.

To lint your code manually you can run

```bash
$ npm run lint
```

This will both lint and _try_ to fix your linting errors.

_Note: The linter may fix some lint issues during the pre-commit phase. Please make sure to do a `git status` before pushing to Github to make sure that all your changes are pushed!_

There are also some unit tests for the APIs in the `/test` folder. When making changes to the core functionality, make sure the test pass, and are updated if the changes requires it.

The pre-commit hook runs the tests are well.

If you want to run the tests manually you can run

```bash
$ npm run test
```

Our CI builds will test to see
- if the packages in package.json are valid
- if the code is formatted correctly
- if the tests pass

Please make sure everything that is run by pre-commit hook passes locally. 🙂

## Updating docs

There is a separate [repo for the docs](https://github.com/abinavseelan/crudtest-website). If you're adding a new feature or changing existing functionality, please do raise a PR to our docs repository as well! 🙇‍

