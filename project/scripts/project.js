const projects = [

    {
        id: "w-01",
        title: "Week 01 Project",
        description: "Homepage",
        link: "../index.html"
    },
    {
        id: "w-02",
        title: "Week 02 Project",
        description: "Picture Album",
        link: "../temples.html"
    },

    {
        id: "w-03",
        title: "Week 03 Project",
        description: "Country Page",
        link: "../place.html"
    },

    {
        id: "w-04",
        title: "Week 04 Project",
        description: "Picture Album Enhancement",
        link: "../filtered-temples.html"
    },

    {
        id: "w-05",
        title: "Week 05 Project",
        description: "Product Review Form",
        link: "../form.html"
    },
    
];

const projectContainer = document.querySelector("#projectContainer");

function renderProjects() {
  if (projectContainer) {
    projectContainer.innerHTML = projects
      .map(project => `
        <a href="${project.link}" target="_blank" class="project-link">
          <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        </a>
      `)
      .join("");
  }
}

renderProjects();