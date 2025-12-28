// app/services/project.ts OR services/project.ts

// services/project.ts
let projects = [
  { 
    id: '1', 
    title: 'Onboarding Project', 
    description: 'A Next.js website',
    startDate: 'Dec 2023',
    endDate: 'Jan 2024',
    deploymentLink: '',
    githubLink: 'https://github.com/cadencheng888/caden-onboardingproject'
  }
  
];

export async function createProject(data: any) {
  const newProject = { id: Date.now().toString(), ...data };
  projects.push(newProject);
  return newProject;
}

export async function getProjects() {
  return projects;
}

export async function getProjectById(id: string) {
  return projects.find(p => p.id === id);
}

export async function updateProject(id: string, data: any) {
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        projects[index] = { ...projects[index], ...data };
        return projects[index];
    }
    return null;
}

export async function deleteProject(id: string) {
    projects = projects.filter(p => p.id !== id);
    return true;
}