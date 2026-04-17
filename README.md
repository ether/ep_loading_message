![Publish Status](https://github.com/ether/ep_loading_message/workflows/Node.js%20Package/badge.svg) [![Backend Tests Status](https://github.com/ether/ep_loading_message/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/ether/ep_loading_message/actions/workflows/test-and-release.yml)

Helpful messages during loading
======================

Display a helpful "did you know" type message to your users.

Todo
====
* All the things
* Locales / i18n
* Test coverage

## Installation

Install from the Etherpad admin UI (**Admin → Manage Plugins**,
search for `ep_loading_message` and click *Install*), or from the Etherpad
root directory:

```sh
pnpm run plugins install ep_loading_message
```

> ⚠️ Don't run `npm i` / `npm install` yourself from the Etherpad
> source tree — Etherpad tracks installed plugins through its own
> plugin-manager, and hand-editing `package.json` can leave the
> server unable to start.

After installing, restart Etherpad.
