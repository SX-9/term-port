export default function(output) {
    let quotes = [
        'Algorithm === A word programmers use dont wanna explain what they did.',
        'I dont always test my code. But when I do, I do it in Production!',
        'Spiders Are The Only Web Developers That Enjoy Catching Bugs',
        'Programming is 10% writing code and 90% fixing errors.',
        'And is &&, Or is ||, and Not is !, Except in Python.',
        'Happiness === When Your Code Runs Without Errors.',
        'Indentation matters, Semicolons are optional.',
        'Real programmers count from 0 (Except Lua).',
        'I hate programming, I love programming.',
        'In Javascript, Everything is an object!',
        'If Your Code Works, Dont Touch It.',
        'Programming Is Painful And Fun!',
        'Theres No Place Like 127.0.0.1.',
        'Exiting Vim is a nightmare.',
        '0.1 Plus 0.2 Is Not 0.3.',
        'I use Arch Linux btw.',
        'My code works! Why?',
        'Hello World!',
    ];
    output.innerHTML += '"' + quotes[Math.floor(Math.random() * quotes.length + 10) % quotes.length] + '"';
}
