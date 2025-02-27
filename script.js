document.addEventListener('DOMContentLoaded', function() {
    const githubUsername = 'Bvruno'; // Cambia esto por tu nombre de usuario de GitHub
    const linkedinProfile = 'bruno-varillas-poblete'; // Cambia esto por tu perfil de LinkedIn

    // Cargar repositorios de GitHub
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => response.json())
        .then(data => {
            const reposContainer = document.getElementById('github-repos');
            data.forEach(repo => {
                console.log(repo);
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
});

document.addEventListener('DOMContentLoaded', function() {
    // Cargar el archivo JSON
    fetch('experience.json')
        .then(response => response.json())
        .then(data => {
            // Mostrar experiencia laboral
            const experienceContainer = document.getElementById('linkedin-experience');
            data.work.forEach(exp => {
                console.log(exp);
                const experienceCard = document.createElement('div');
                experienceCard.className = 'experience-card';
                experienceCard.innerHTML = `
                    <h3>${exp.position} en ${exp.name}</h3>
                    <p>${exp.location} - ${exp.startDate} a ${exp.endDate}</p>
                    <p>${exp.summary.replace(/\n/g, '<br>')}</p>
                `;
                experienceContainer.appendChild(experienceCard);
            });

            // Mostrar educación
            const educationContainer = document.getElementById('education-list');
            data.education.forEach(edu => {
                const educationCard = document.createElement('div');
                educationCard.className = 'education-card';
                educationCard.innerHTML = `
                    <h3>${edu.institution}</h3>
                    <p>${edu.area} - ${edu.studyType}</p>
                    <p>${edu.startDate} a ${edu.endDate}</p>
                `;
                educationContainer.appendChild(educationCard);
            });

            // Mostrar certificados
            const certificatesContainer = document.getElementById('certificates-list');
            data.certificates.forEach(cert => {
                const certificateCard = document.createElement('div');
                certificateCard.className = 'certificate-card';
                certificateCard.innerHTML = `
                    <h3>${cert.name}</h3>
                    <p>Emitido por: ${cert.issuer}</p>
                    <p>Fecha: ${cert.startDate}</p>
                    ${cert.url ? `<a href="${cert.url}" target="_blank">Ver certificado</a>` : ''}
                `;
                certificatesContainer.appendChild(certificateCard);
            });

            // Mostrar habilidades
            const skillsContainer = document.getElementById('skills-list');
            data.skills.forEach(skill => {
                const skillItem = document.createElement('span');
                skillItem.className = 'skill-item';
                skillItem.textContent = skill.name;
                skillsContainer.appendChild(skillItem);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    // Cargar el archivo JSON
    fetch('experience.json')
        .then(response => response.json())
        .then(data => {
            // Mostrar habilidades en la página de inicio
            if (document.getElementById('skills-list')) {
                const skillsContainer = document.getElementById('skills-list');
                data.skills.forEach(skill => {
                    const skillItem = document.createElement('span');
                    skillItem.className = 'skill-item';
                    skillItem.textContent = skill.name;
                    skillsContainer.appendChild(skillItem);
                });
            }

            // Mostrar certificados
            if (document.getElementById('certificates-list')) {
                const certificatesContainer = document.getElementById('certificates-list');
                data.certificates.forEach(cert => {
                    const certificateCard = document.createElement('div');
                    certificateCard.className = 'certificate-card';
                    certificateCard.innerHTML = `
                        <h3>${cert.name}</h3>
                        <p>Emitido por: ${cert.issuer}</p>
                        <p>Fecha: ${cert.startDate}</p>
                        ${cert.url ? `<a href="${cert.url}" target="_blank">Ver certificado</a>` : ''}
                    `;
                    certificatesContainer.appendChild(certificateCard);
                });
            }

            // Mostrar educación
            if (document.getElementById('education-list')) {
                const educationContainer = document.getElementById('education-list');
                data.education.forEach(edu => {
                    const educationCard = document.createElement('div');
                    educationCard.className = 'education-card';
                    educationCard.innerHTML = `
                        <h3>${edu.institution}</h3>
                        <p>${edu.area} - ${edu.studyType}</p>
                        <p>${edu.startDate} a ${edu.endDate}</p>
                    `;
                    educationContainer.appendChild(educationCard);
                });
            }

            // Mostrar experiencia laboral en la página de experiencia
            if (document.getElementById('linkedin-experience')) {
                const experienceContainer = document.getElementById('linkedin-experience');
                data.work.forEach(exp => {
                    const experienceCard = document.createElement('div');
                    experienceCard.className = 'experience-card';
                    experienceCard.innerHTML = `
                        <h3>${exp.position} en ${exp.name}</h3>
                        <p>${exp.location} - ${exp.startDate} a ${exp.endDate}</p>
                        <p>${exp.summary.replace(/\n/g, '<br>')}</p>
                    `;
                    experienceContainer.appendChild(experienceCard);
                });
            }

            // Mostrar proyectos de GitHub en la página de proyectos
            if (document.getElementById('github-repos')) {
                const githubUsername = 'Bvruno'; // Cambia esto por tu nombre de usuario de GitHub
                fetch(`https://api.github.com/users/${githubUsername}/repos`)
                    .then(response => response.json())
                    .then(repos => {
                        const reposContainer = document.getElementById('github-repos');
                        repos.forEach(repo => {
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
            }
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});