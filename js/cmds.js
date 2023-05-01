export async function handle(input, output, hist) {
    let exec = input.split(' ');
    let cmd = exec[0];
    let args = exec.slice(1);

    if (!cmd) return;

    try {
        let handler = await import('./cmds/' + cmd + '.js');
        await handler.default(output, hist, ...args);
    } catch (e) {
        if (e.message.startsWith('Failed to fetch dynamically imported module: ')) {
            output.innerHTML += 'Command <span data-color=grey>"' + input + '"</span> Not Found.';
        } else {
            output.innerHTML += '<span data-color="red">' + e + '</span>'
        }
    }
}
