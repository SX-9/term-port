const welcome = `
            /\\    <span data-color="red">|></span>      <span data-color="lime">  ______                        ____                __   </span>
     <span data-color="red"><|</span>    /  \\<span data-color="brown">__</span>/ \\      <span data-color="lime"> /_  __/___   _____ ____ ___   / __ \\ ____   _____ / /_  </span>
     / \\<span data-color="brown">__</span>/<span data-color="brown">----</span>\\/   \\     <span data-color="lime">  / /  / _ \\ / ___// __ \`__ \\ / /_/ // __ \\ / ___// __/ </span>
    /<span data-color="brown">---</span>\\/      \\    \\    <span data-color="lime"> / /  /  __// /   / / / / / // ____// /_/ // /   / /_    </span>
   /     \\       \\    \\   <span data-color="lime">/_/   \\___//_/   /_/ /_/ /_//_/     \\____//_/    \\__/    </span>
  <span data-color="cyan"><~~~~~~~~~~~~~~~~~~~~></span>        <span data-color="grey">===> Terminal Portfolio | Made By <a href="https://sx9.is-a.dev">sx9dev</a></span>

  Type <span data-color="yellow">help</span> For List Of Available Commands
`;
const terminal = document.querySelector('pre')
terminal.innerHTML = welcome;

const prompt = document.querySelector('#prompt-template').content.cloneNode(true);
terminal.appendChild(prompt);