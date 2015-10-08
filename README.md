# foundry-release-npm-build [![Build status](https://travis-ci.org/twolfson/foundry-release-npm-build.png?branch=master)](https://travis-ci.org/twolfson/foundry-release-npm-build)

This repository has been deprecated with the release of `foundry-release-spec@2.0.0`.

Instead of using it, we suggest a custom command in `releaseCommands`:

```js
{
    "releaseCommands": [
        {
            "type": "customCommand",
            "updateFiles": "npm run build"
        }
    ]
}
```

Our reasoning is this library was already a one-off. If anyone wants more customization (e.g. flags, running `npm run compile` instead), then it would be more configuration for a single command. The custom command covers that easily and transparently.

-----------

Run `npm run build` on `foundry release`

This is an [npm][] plugin for [foundry][], a plugin based release management library.

[npm]: https://npmjs.org/
[foundry]: https://github.com/twolfson/foundry

## Documentation
This library was build to match the [foundry plugin specification][spec]. Documentation can be found at:

https://github.com/twolfson/foundry-release-spec

[spec]: https://github.com/twolfson/foundry-release-spec

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via `npm run lint` and test via `npm test`.

## Donating
Support this project and [others by twolfson][gratipay] via [gratipay][].

[![Support via Gratipay][gratipay-badge]][gratipay]

[gratipay-badge]: https://cdn.rawgit.com/gratipay/gratipay-badge/2.x.x/dist/gratipay.png
[gratipay]: https://www.gratipay.com/twolfson/

## Unlicense
As of Jan 18 2015, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE
