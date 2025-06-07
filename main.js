// Project data
const projects = [
     {
        title: "🥩 Le Grill Royal",
        description: "Bienvenue sur le site officiel du Grill Royal !",
        tags: ["Node.js", "Vanilla", "Tailwind"],
        image: "assets/legrill.png",
        link: "https://le-grill-royal.vercel.app/"
    },
      {
        title: "Artisanat Sucré",
        description: "Le site vitrine d’une boulangerie-pâtisserie française spécialisée dans le trompe-l’œil pâtissier",
        tags: ["Vanilla", "Three.js", "CSS"],
        image: "assets/Artisanat.png",
        link: "https://artisanat-sucre.vercel.app/"
    },
        {
        title: "LA BANLIEUE PVRIS — Site Officiel",
        description: "Plateforme de vente de vetements",
        tags: ["Angular", "TypeScript", "Tailwind CSS", "GSAP"],
        image: "assets/LBPARIS.png",
        link: "https://lbparis.vercel.app/"
    },
    {
        title: "Portfolio",
        description: "Mon portfolio personnel, qui met en avant mon CV et mes compétences techniques.",
        tags: ["React", "Node.js", "Express.js"],
        image: "assets/portfolio.png",
        link: "https://cvkevin.vercel.app/"
    },
    {
        title: "🚗 Elite Drive",
        description: "Bienvenue sur le site d’Elite Drive, l’auto/moto-école nouvelle génération.",
        tags: ["Vanilla", "Three.js", "CSS"],
        image: "assets/eliteDrive.png",
        link: "https://elite-drive-ecru.vercel.app/"
    },
    {
        title: "📝 ToDo List",
        description: "To do list, gestion de plusieurs tâches et plusieurs projets.",
        tags: ["Node.js", "Anuglar", "PWA (application mobile)"],
        image: "assets/todolist.png",
        link: "https://tache-a-faire.vercel.app/todo"
    }
];

// Generate project cards
const projectsGrid = document.getElementById('projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card glass-card rounded-xl overflow-hidden gradient-border';
    projectCard.innerHTML = `
        <div class="relative h-64 overflow-hidden group">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                    <h4 class="text-xl font-bold text-white">${project.title}</h4>
                    <p class="text-gray-300 text-sm mt-1">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        ${project.tags.map(tag =>
                            `<span class="text-xs px-2 py-1 bg-gray-800/50 text-neon-blue rounded-full">${tag}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
        <div class="p-6">
            <button class="w-full py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:shadow-lg hover:shadow-neon-blue/30 transition-all project-btn"
                    data-link="${project.link}">
                Voir le projet
            </button>
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.hostname && link.hostname !== location.hostname) {
            return; 
        }
        e.preventDefault();
        console.log(`Navigating to: ${link.getAttribute('href')}`);
    });
});

document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.add('animate-pulse');
        setTimeout(() => {
            btn.classList.remove('animate-pulse');
            // Ouvre le lien du projet
            const url = btn.getAttribute('data-link');
            if (url && url !== "#") {
                window.open(url, "_blank"); // ouvre dans un nouvel onglet
            }
        }, 300);
    });
});
