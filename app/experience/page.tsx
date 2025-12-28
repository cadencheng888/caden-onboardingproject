"use client";

import { useState, useEffect } from "react";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/experience")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch experience:", err));
  }, []);

  if (loading) return <div className="p-10">Loading experience...</div>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">My Experience</h1>
      
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="border p-6 rounded-lg shadow-sm bg-white">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-xl font-bold">{exp.title}</h2>
                <h3 className="text-lg text-blue-600">{exp.company}</h3>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>{exp.startDate} - {exp.endDate}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}