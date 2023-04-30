export default function(output) {
    output.innerHTML += `\
Here Is A List Of Commands:
    <span data-color="lime">help</span> <span data-color="grey">-</span> <span data-color="yellow">Displays This.</span>
    <span data-color="lime">history</span> <span data-color="grey">-</span> <span data-color="yellow">Prints Your Command History.</span>
    <span data-color="lime">whoami</span> <span data-color="grey">-</span> <span data-color="yellow">What's Your Name?</span>
    <span data-color="lime">hostname</span> <span data-color="grey">-</span> <span data-color="yellow">What Is This?</span>
    <span data-color="lime">echo [text]</span> <span data-color="grey">-</span> <span data-color="yellow">Prints [text].</span>
    <span data-color="lime">eval [code]</span> <span data-color="grey">-</span> <span data-color="yellow">Evals [Code] As JS.</span>
`;
}