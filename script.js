document.addEventListener('DOMContentLoaded', function() {
    const githubUsername = 'Bvruno'; // Cambia esto por tu nombre de usuario de GitHub
    const linkedinProfile = 'bruno-varillas-poblete'; // Cambia esto por tu perfil de LinkedIn

    // Cargar repositorios de GitHub
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => response.json())
        .then(data => {
            const reposContainer = document.getElementById('github-repos');
            data.forEach(repo => {
                const repoCard = document.createElement('div');
                repoCard.className = 'repo-card';
                repoCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'Sin descripción'}</p>
                    <a href="${repo.html_url}" target="_blank">Ver en GitHub</a>
                `;
                reposContainer.appendChild(repoCard);
            });
        })
        .catch(error => console.error('Error al cargar los repositorios:', error));

    // Cargar experiencia laboral desde experience.json
    fetch('experience.json')
        .then(response => response.json())
        .then(data => {
            const experienceContainer = document.getElementById('linkedin-experience');
            data.forEach(exp => {
                const experienceCard = document.createElement('div');
                experienceCard.className = 'experience-card';
                experienceCard.innerHTML = `
                    <h3>${exp.title}</h3>
                    <p>${exp.company} - ${exp.dates}</p>
                    <p>${exp.description}</p>
                `;
                experienceContainer.appendChild(experienceCard);
            });
        })
        .catch(error => console.error('Error al cargar la experiencia:', error));
});