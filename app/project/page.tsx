"use client";

import { useState, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  deploymentLink?: string; // Optional
  githubLink: string;
}

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/project")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10">Loading projects...</div>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div key={proj.id} className="border p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold mb-2">{proj.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{proj.startDate} - {proj.endDate}</p>
            <p className="text-gray-700 mb-6">{proj.description}</p>
            
            <div className="flex gap-4">
              {proj.deploymentLink && (
                <a href={proj.deploymentLink} target="_blank" className="text-blue-600 hover:underline font-medium">
                  Live Demo
                </a>
              )}
              <a href={proj.githubLink} target="_blank" className="text-gray-800 hover:underline font-medium">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}