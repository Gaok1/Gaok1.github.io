document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.github.com/users/username/repos")
    .then(response => response.json())
    .then(data => {
        let languages = {};
        data.forEach(repo => {
            if (repo.language) {
                if (!languages[repo.language]) {
                    languages[repo.language] = 1;
                } else {
                    languages[repo.language]++;
                }
            }
        });
        let languagesDiv = document.getElementById("languages");
        for (let language in languages) {
            let languageElement = document.createElement("div");
            languageElement.classList.add("language");
            languageElement.innerHTML = `<span>${language}</span>: ${languages[language]} repo(s)`;
            languagesDiv.appendChild(languageElement);
        }
    })
    .catch(error => console.log(error));
});
