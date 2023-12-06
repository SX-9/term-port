import { handle } from "./cmds.js";

const msg = "Welcome To " + navigator.platform + "!";
const welcome = `<div class="nomobile">
          /\\    <span data-color="red">|></span>      <span data-color="lime">  ______                        ____                __</span>
   <span data-color="red"><|</span>    /  \\<span data-color="orange">__</span>/ \\      <span data-color="lime"> /_  __/___   _____ ____ ___   / __ \\ ____   _____ / /_</span>
   / \\<span data-color="orange">__</span>/<span data-color="orange">----</span>\\/   \\     <span data-color="lime">  / /  / _ \\ / ___// __ \`__ \\ / /_/ // __ \\ / ___// __/</span>
  /<span data-color="orange">---</span>\\/      \\    \\    <span data-color="lime"> / /  /  __// /   / / / / / // ____// /_/ // /   / /_</span>
 /     \\       \\    \\   <span data-color="lime">/_/   \\___//_/   /_/ /_/ /_//_/     \\____//_/    \\__/</span>
<span data-color="cyan"><~~~~~~~~~~~~~~~~~~~~></span>        <span data-color="grey">===> Terminal Portfolio | Made By <a href="https://new.sx9.is-a.dev">sx9dev</a></span></div>

Type <span data-color="yellow">help</span> For List Of Available Commands
<b><span data-color="red">NOTICE:</span></b> I Stand With <span data-color="yellow">Palestine</span> 🇵🇸 And <span data-color="lime">You Should Too!</span> <a href="https://donate.unrwa.org">Donate Here</a>

`;
const sleep = (m) => new Promise((r) => setTimeout(r, m));
const terminal = document.querySelector("pre");
const history = [];
let prompt = document.querySelector("#prompt-template").content.cloneNode(true);

setTimeout(async () => {
  for (let i = 0; i < msg.length; i++) {
    terminal.innerText += msg[i];
    await sleep(100);
  }
  terminal.innerHTML += welcome;
  terminal.appendChild(prompt);
}, 500);

window.addEventListener("DOMContentLoaded", () => {
  document.onclick = () => {
    let prompts = document.querySelectorAll("input");
    if (!window.getSelection().toString()) prompts[prompts.length - 1].focus();
  };
  window.onkeydown = async (e) => {
    let prompts = document.querySelectorAll("input");
    let command = prompts[prompts.length - 1];
    if (e.key === "Enter") {
      command.setAttribute("placeholder", command.value);
      command.setAttribute("readonly", true);
      document
        .querySelectorAll(".help")
        .forEach((el) => el.parentElement.remove());

      if (command.value.includes("&&")) {
        let runs = command.value.split("&&");
        for (let cmds of runs) {
          await handle(cmds, terminal, history);
          terminal.innerHTML += "\n";
        }
      } else {
        await handle(command.value, terminal, history);
      }
      history.push(command.value);

      prompt = document
        .querySelector("#prompt-template")
        .content.cloneNode(true);
      terminal.appendChild(prompt);

      prompts = document.querySelectorAll("input");
      prompts[prompts.length - 1].focus();
      document.body.scrollTop = document.body.scrollHeight;
    } else if (e.key === "ArrowUp") {
      command.value = history[history.length - 1];
    } else if (e.key === "ArrowDown") {
      command.value = "";
    }
  };
});
