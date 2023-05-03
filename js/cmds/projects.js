export default async function (output, _hist, ...args) {
  if (args.length) {
    const name = args[0];
    output.innerHTML += '<span data-color="orange">Opening Github...</span>';
    window.open('https://github.com/SX-9/' + name);
  } else {
    let repositories;
    try {
      repositories = await fetch(
        "https://api.github.com/users/SX-9/repos?type=owner&sort=created"
      ).then((r) => r.json());
    } catch (e) {
      output.innerHTML += '<span data-color="red">' + e + "</span>";
      return;
    }

    const nonForkedRepositories = repositories
      .filter((repo) => !repo.fork)
      .slice(0, 10);

    const repositoriesInfo = nonForkedRepositories.map((repo) => ({
      name: repo.name,
      description: repo.description,
      link: repo.html_url,
      stars: repo.stargazers_count,
    }));

    repositoriesInfo.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    output.innerHTML += '\n';

    repositoriesInfo.forEach((repo) => {
      output.innerHTML += `\<span data-color="cyan"><a href="${repo.link}">${repo.name}</a></span> <span data-color="yellow">${repo.stars}</span> <span data-color="grey">|==>></span> ${repo.description}\n`;
    });

    output.innerHTML += `
View More On My <span><a href="https://github.com/SX-9?tab=repositories">Github</a></span>\n
`;
  }
}
