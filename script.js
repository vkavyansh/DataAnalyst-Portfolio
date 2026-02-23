// Resume link
document.getElementById("resumeBtn").href =
"https://drive.google.com/file/d/1JtfXsnUu9V_E_A1EdmVkeVDAkIgOnsoq/view?usp=drive_link";

// Dark mode logic
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("themeToggle");
  btn.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Skills
const skills = [
  "Python","Pandas","Matplotlib","Numpy","Streamlit","SQL","Excel","Power BI","Tableau","HTML","CSS","JavaScript"
];

skills.forEach(skill => {
  const div = document.createElement("div");
  div.className = "skill";
  div.innerText = skill;
  document.getElementById("skillsList").appendChild(div);
});

// Experience
const experiences = [
  {
    name: "Tata Data Visualisation",
    desc: "Business dashboards for executive decision making."
  },
  {
    name: "Deloitte Data Analytics",
    desc: "Tableau dashboards & Excel-based analysis."
  }
];

experiences.forEach(exp => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `<h3>${exp.name}</h3><p>${exp.desc}</p>`;
  document.getElementById("projectsList").appendChild(div);
});

// Certifications
const certs = [
  "Tata - GenAI Powered Data Analytics Job Simulation",
  "Tata - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
  "LinkedIn Cloud Computing: Understanding  Core Concepts  Cloud Computing: Understanding  Core Concepts",
  "AWS - Solutions Architecture Job Simulation",
  "Infosys Python Fundamentals",
  "Deloitte Australia - Data Analytics Job Simulation"
];

certs.forEach(cert => {
  const div = document.createElement("div");
  div.className = "project skill"; // added 'skill' class to center text like skills
  div.innerText = cert;
  document.getElementById("certList").appendChild(div);
});

// --- GITHUB & FEATURED PROJECTS ---
const githubContainer = document.getElementById("githubProjects");

// 1. Inject Featured DataPilot Project manually
const dataPilotCard = document.createElement("div");
dataPilotCard.className = "project featured-project";
dataPilotCard.innerHTML = `
    <div class="project-header">
        <h3>⭐ DataPilot (Live Web App)</h3>
        <span class="badge">Live</span>
    </div>
    <p>An interactive, full-stack data analytics web application built to automate Exploratory Data Analysis (EDA). Engineered a code-free UI allowing users to upload datasets, instantly clean missing values, generate custom dynamic visualizations, and automatically build Power BI-style dashboards.</p>
    <div class="tech-stack">
        <span>Python</span><span>Streamlit</span><span>Pandas</span><span>Matplotlib</span>
    </div>
    <div class="project-links">
        <a href="https://datapilot-bykavyansh01.streamlit.app" target="_blank" class="btn-primary small-btn">🔴 Live Demo</a>
        <a href="https://github.com/vkavyansh/DataPilot-App" target="_blank" class="btn-outline small-btn">💻 Source Code</a>
    </div>
`;
// Note: Replace the Source Code link above with your actual DataPilot repo link!
githubContainer.appendChild(dataPilotCard);

// 2. Fetch the rest of the GitHub Projects dynamically
async function loadGitHub() {
  try {
    const res = await fetch("https://api.github.com/users/vkavyansh/repos");
    const data = await res.json();

    // Filter out DataPilot so it doesn't show up twice, then grab the latest 5
    const filteredRepos = data
        .filter(repo => !repo.name.toLowerCase().includes('datapilot'))
        .slice(0, 5);

    filteredRepos.forEach(repo => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "A project developed by Kavyansh Verma."}</p>
        <a href="${repo.html_url}" target="_blank" class="repo-link">View Repository →</a>
      `;
      githubContainer.appendChild(div);
    });
  } catch (error) {
    console.error("Error loading GitHub repos:", error);
  }
}


loadGitHub();
