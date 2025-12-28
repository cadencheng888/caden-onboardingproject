"use client"; 

export default function About() {
  return (
    <main className="p-8 max-w-xl mx-auto text-center">
      {}
      <h1 className="text-4xl font-bold mb-4">Caden Cheng</h1>

      {}
      <p className="text-lg mb-6">
        Hi! I’m Caden. I’m a 1st year student UC San Diego from the bay area passionate about coding, running, and building cool projects with React and Next.js!
      </p>

      {}
      <img
        src="/profile.jpeg" 
        alt="Caden"
        className="mx-auto rounded-full w-48 h-48 object-cover mb-6"
      />

      {}
      
    </main>
  );
}