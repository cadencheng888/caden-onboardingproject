
let experiences = [
  { id: '1', title: 'Frontend Dev', company: 'CSE Society' },
  { id: '2', title: 'Backend Dev', company: 'CSE Society' }
];

export async function getExperiences() {
  return experiences;
}

export async function createExperience(data: any) {
  const newExp = { id: Date.now().toString(), ...data };
  experiences.push(newExp);
  return newExp;
}

export async function getExperienceById(id: string) {
  return experiences.find(exp => exp.id === id);
}

export async function updateExperience(id: string, data: any) {
    // Logic to update...
    return { id, ...data }; 
}

export async function deleteExperience(id: string) {
    experiences = experiences.filter(exp => exp.id !== id);
    return true;
}