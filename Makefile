.PHONY: build prepare

TAG = php%2F8.2.6%2B20230714-11be424
VERSION = 8.2.6

build:
	rm -rf dist
	mkdir -p dist
	curl -L -o dist/php-cgi-slim.wasm "https://github.com/vmware-labs/webassembly-language-runtimes/releases/download/$(TAG)/php-cgi-$(VERSION)-slim.wasm"
	curl -L -o dist/php-cgi.wasm "https://github.com/vmware-labs/webassembly-language-runtimes/releases/download/$(TAG)/php-cgi-$(VERSION).wasm"
	node_modules/.bin/esbuild src/index.js --minify --target=es2021 --format=esm --outfile=dist/index.js

prepare:
	npm install
