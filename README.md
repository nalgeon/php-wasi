# PHP WASI build

This is a [WASI](https://wasi.dev/) build of the PHP 8.2 interpreter compiled by [VMware Labs](https://github.com/vmware-labs/webassembly-language-runtimes).

It is published as an NPM package [@antonz/php-wasi](https://www.npmjs.com/package/@antonz/php-wasi):

```
https://unpkg.com/@antonz/php-wasi/dist/php-cgi.wasm
https://unpkg.com/@antonz/php-wasi/dist/php-cgi-slim.wasm
```

## Usage

Using the [Runno](https://github.com/nalgeon/runno) runtime:

```js
import { WASI } from "https://unpkg.com/@antonz/runno/dist/runno.mjs";

const url = "https://unpkg.com/@antonz/php-wasi/dist/php-cgi.wasm";
const result = await WASI.start(fetch(url), {
    args: ["php", "--version"],
    stdout: (out) => console.log(out),
    stderr: (err) => console.error(err),
});
console.log(`exit code = ${result.exitCode}`);
```

Result:

```
PHP 8.2.6 (cgi-fcgi) (built: Jul 14 2023 11:22:44)
Copyright (c) The PHP Group
Zend Engine v4.2.6, Copyright (c) Zend Technologies
exit code = 0
```

## Building from source

```
make prepare
make build
```

## License

Copyright 2023 [VMware Labs](https://github.com/vmware-labs/webassembly-language-runtimes), Apache-2.0 license.

PHP is copyrighted by [The PHP Group](https://www.php.net/license/index.php), PHP License v3.01.
