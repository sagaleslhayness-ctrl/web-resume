const skillItems = document.querySelectorAll('.skill-item');
const skillDetailBox = document.getElementById('skill-detail-box');

skillItems.forEach(item => {
  item.addEventListener('click', () => {
    const tools = item.getAttribute('data-skill');
    skillDetailBox.innerHTML = `<strong>Tools & Tech:</strong> ${tools}`;
    skillDetailBox.classList.remove('hidden');
  });
});

const projectsData = {
  barangay: {
    title: "Barangay Express Portal (2026)",
    tech: "Tech Stack: React.js, Vite, Firebase, HTML/CSS",
    desc: "A web-based service portal designed to digitize barangay document requests, streamline administrative approvals, and allow residents to track their application status in real time.",
    link: "https://github.com/"
  },
  printgo: {
    title: "PrintGo Mobile Application (2026)",
    tech: "Tech Stack: Android Studio, Java, XML, Google Auth, QR Code",
    desc: "A hyper-local print-on-demand and pick-up mobile application connecting users with nearby print shops in Bulacan using Google Authentication, QR code shop access, and real-time order status tracking.",
    link: "https://github.com/"
  }
};

function openProjectModal(projectKey) {
  const project = projectsData[projectKey];
  if (!project) return;

  document.getElementById('modalTitle').innerText = project.title;
  document.getElementById('modalTech').innerText = project.tech;
  document.getElementById('modalDesc').innerText = project.desc;
  document.getElementById('modalLink').href = project.link;

  document.getElementById('projectModal').style.display = 'flex';
}

function closeProjectModal() {
  document.getElementById('projectModal').style.display = 'none';
}

function closeModalOnOutside(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeProjectModal();
  }
}

function copyEmail() {
  const email = "sagaleslhayness@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  });
}