const url = "https://unpkg.com/@antonz/php-wasi/dist/php-cgi.wasm";
let bytes;

// load downloads the executable and returns its binary contents as a Response.
// Caches the response to avoid downloading on repeated calls.
async function load() {
    if (bytes === undefined) {
        bytes = await readFile(url);
    }
    return new Response(bytes, {
        status: 200,
        headers: { "content-type": "application/wasm" },
    });
}

// readFile fetches the file and returns its contents as an Uint8Array.
async function readFile(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${url}: http status ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
}

export default { load };
