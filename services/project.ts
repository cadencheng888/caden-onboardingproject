// app/services/project.ts OR services/project.ts

// 1. Initialize the array (This must exist!)
let projects = [
  { id: '1', title: 'Portfolio Website', tech: 'Next.js' },
  { id: '2', title: 'E-commerce App', tech: 'React & Node' }
];

// 2. The Create Function
export async function createProject(data: any) {
  // If 'projects' is undefined, this line will cause a 500 error
  const newProject = { id: Date.now().toString(), ...data };
  projects.push(newProject);
  return newProject;
}

// 3. The Get Function
export async function getProjects() {
  return projects;
}

// 4. The Specific Get Function
export async function getProjectById(id: string) {
  return projects.find(p => p.id === id);
}

// 5. The Update Function
export async function updateProject(id: string, data: any) {
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        projects[index] = { ...projects[index], ...data };
        return projects[index];
    }
    return null;
}

// 6. The Delete Function
export async function deleteProject(id: string) {
    projects = projects.filter(p => p.id !== id);
    return true;
}