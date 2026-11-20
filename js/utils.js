const projects = {
    p1: {
        title: "SciLab",
        category: "LABORATORY INVENTORY SYSTEM",
        description: "A web-based science laboratory inventory and transaction system for Padre Garcia Integrated National High School. It streamlines equipment tracking, borrowing and returns, QR lookups, and inventory imports, with a responsive interface designed to run over a local network.",
        techStack: ["Laravel", "Tailwind CSS", "SQLite", "Laravel Excel"],
        image: "./assets/images/SCILAB.jpg",
        imageAlt: "SciLab project preview",
        repository: "https://github.com/LanceKitL/sci-lab"
    },
    p2: {
        title: "AutoMatik",
        category: "DEALERSHIP MANAGEMENT PLATFORM",
        description: "A full-stack dealership management system for vehicle inventory, customer inquiries, service bookings, sales, financing, and staff workflows. Built as a Polytechnic University of the Philippines capstone project.",
        techStack: ["Python", "Flask", "React", "Vite", "Tailwind CSS", "MySQL"],
        image: "./assets/images/AUTOMATIK.jpg",
        imageAlt: "AutoMatik project preview",
        repository: "https://github.com/LanceKitL/automatik"
    },
    p3: {
        title: "KitVid",
        category: "LOCAL MEDIA TOOL",
        description: "A local web front end for yt-dlp and FFmpeg. Queue videos, choose video or audio formats, follow download progress, and save files to a folder on your own machine.",
        techStack: ["Python", "HTML", "CSS", "JavaScript", "yt-dlp", "FFmpeg"],
        image: "./assets/images/KITVID.jpg",
        imageAlt: "KitVid project preview",
        repository: "https://github.com/LanceKitL/kitvid_downloader"
    },
    p4: {
        title: "PomoKit",
        category: "PRODUCTIVITY WORKSPACE",
        description: "A flexible Pomodoro workspace for planning tasks, focusing with configurable timer sessions, and keeping notes close. Tasks, preferences, timer state, and notes are stored in the browser.",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
        image: "./assets/images/PomoKit.png",
        imageAlt: "PomoKit project preview",
        repository: "https://github.com/LanceKitL/PomoKit"
    }
};

const projectIds = Object.keys(projects);
const folders = document.querySelectorAll(".project_folder");
const projectDialog = document.querySelector("#projectDialog");
const projectTitle = document.querySelector("#projectDialogTitle");
const projectIndex = document.querySelector("#projectDialogIndex");
const projectCategory = document.querySelector("#projectDialogCategory");
const projectDescription = document.querySelector("#projectDialogDescription");
const projectTech = document.querySelector("#projectDialogTech");
const projectImage = document.querySelector("#projectDialogImage");
const projectLink = document.querySelector("#projectDialogLink");
const closeProjectButton = document.querySelector(".project_dialog_close");
const previousProjectButton = document.querySelector("#previousProject");
const nextProjectButton = document.querySelector("#nextProject");
let previousBodyOverflow = "";
let activeProjectId = null;
let modalOpenTimeout;

function populateProject(projectId) {
    const project = projects[projectId];
    if (!project) {
        return;
    }

    projectIndex.textContent = `ARCHIVE // ${String(projectIds.indexOf(projectId) + 1).padStart(2, "0")}`;
    projectCategory.textContent = project.category;
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectImage.src = project.image;
    projectImage.alt = project.imageAlt;
    projectLink.href = project.repository;
    projectTech.replaceChildren(...project.techStack.map((technology) => {
        const item = document.createElement("li");
        item.textContent = technology;
        return item;
    }));

}

function openProject(projectId) {
    if (!projects[projectId] || projectDialog.open) {
        return;
    }

    const isFirstOpen = activeProjectId === null;
    window.clearTimeout(modalOpenTimeout);
    activeProjectId = projectId;
    folders.forEach((folder) => {
        folder.classList.toggle("is-active", folder.dataset.projectId === projectId);
    });
    populateProject(projectId);

    if (isFirstOpen) {
        previousBodyOverflow = document.body.style.overflow;
    }
    document.body.style.overflow = "hidden";
    modalOpenTimeout = window.setTimeout(() => {
        projectDialog.showModal();
    }, 360);
}

function navigateProject(direction) {
    if (!activeProjectId) {
        return;
    }
    const currentIndex = projectIds.indexOf(activeProjectId);
    const nextIndex = (currentIndex + direction + projectIds.length) % projectIds.length;
    activeProjectId = projectIds[nextIndex];
    folders.forEach((folder) => {
        folder.classList.toggle("is-active", folder.dataset.projectId === activeProjectId);
    });
    populateProject(activeProjectId);
}

folders.forEach((folder) => {
    folder.addEventListener("click", () => openProject(folder.dataset.projectId));
});

closeProjectButton.addEventListener("click", () => projectDialog.close());
previousProjectButton.addEventListener("click", () => navigateProject(-1));
nextProjectButton.addEventListener("click", () => navigateProject(1));
projectDialog.addEventListener("click", (event) => {
    if (event.target === projectDialog) {
        projectDialog.close();
    }
});
projectDialog.addEventListener("close", () => {
    window.clearTimeout(modalOpenTimeout);
    document.body.style.overflow = previousBodyOverflow;
    folders.forEach((folder) => folder.classList.remove("is-active"));
    activeProjectId = null;
});
projectDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        event.preventDefault();
        projectDialog.close();
    } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigateProject(-1);
    } else if (event.key === "ArrowRight") {
        event.preventDefault();
        navigateProject(1);
    }
});

// ==========================================================================
// EXPLORE MORE — Zoom-out transition to journal
// ==========================================================================
const exploreBtn = document.getElementById('exploreMoreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        // Zoom out from the center of the visible viewport (not the whole page),
        // so the transition doesn't jump when the button is below the fold.
        const originY = window.scrollY + window.innerHeight / 2;
        document.body.style.transformOrigin = `50% ${originY}px`;
        document.body.classList.add('page-zoom-out');

        // Navigate once the transition has finished
        setTimeout(() => {
            window.location.href = './journal.html';
        }, 780);
    });
}
