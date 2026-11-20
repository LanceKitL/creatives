// TODO: EXIT STATE, ENTER STATE, EDGE CASE HANDLING.

let cards = document.querySelectorAll(".card");
let pop_up = document.querySelector("#pop_up");
let project_content = document.querySelector("#project_content")

let projects = [
    {
        id: 0,
        title: "SciLab",
        description: "",
        year: 2024,
        tech_stack: ["Laravel", "Laragon", "Shell"]
    },
    {
        id: 1,
        title: "AutoMatik",
        description: "",
        year: 2025,
        tech_stack: ["Python Flask", "Svelte"]
    },
    {
        id: 2,
        title: "KitVid",
        description: "",
        year: 2026,
        tech_stack: ["Python", "Javascript"]
    },
    {
        id: 3,
        title: "PomoKit",
        description: "",
        year: 2026,
        tech_stack: ["NextJS", "Typescript"]
    }
]

cards.forEach((el, idx) => {
    el.addEventListener("click", () => {
        displayProject(el,idx);
    })
});

function displayProject(el, idx){
    projects.forEach(proj => {
        if(idx === proj.id){
            pop_up.style.display = "grid";
            pop_up.style.background = "black";
            pop_up.style.zIndex = 999999999999  ;
            document.body.style.overflowY = "hidden";
            console.log(proj);
            project_content += proj.title;
        }
    });
}

function closeProject(){
    document.body.style.overflowY = "auto";
    pop_up.style.display = "none";
}

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
