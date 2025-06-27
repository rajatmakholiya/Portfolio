const CV = ({ currentTheme }) => {
  return (
    <div
      className={`min-h-screen p-6 sm:p-10 ${
        currentTheme === "dark"
          ? "bg-[#242424] text-gray-200"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`max-w-4xl mx-auto shadow-xl rounded-2xl p-8 space-y-8 ${
          currentTheme === "dark" ? "bg-[#3a3a3a]" : "bg-white"
        }`}
      >
        <header className="text-center space-y-1">
          <h1 className="text-4xl font-bold text-inherit">Rajat Makholiya</h1>
          <p className="text-lg text-inherit">Software Engineer</p>
          <p className="text-sm text-gray-400">
            Pune, Maharashtra | +91 8979140288 |{" "}
            <a
              href="mailto:rajatmakholiya07@gmail.com"
              className={`underline ${
                currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              rajatmakholiya07@gmail.com
            </a>
          </p>
          <div
            className={`flex justify-center gap-4 ${
              currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/rajat-makholiya-1b92a1222/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rajatmakholiya?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Professional Summary
          </h2>
          <p>
            Motivated and detail-oriented Computer Science graduate and current
            Master’s student (expected 2025). Skilled in full-stack development,
            experienced with React.js, Next.js, Node.js, React Native,
            TypeScript, Redux, Tailwind, and MongoDB. Passionate about bridging
            tech gaps and building responsive apps. Agile team player,
            cloud-savvy with Google Cloud, and Git version control expert.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Education
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Master of Computer Programming</strong> — Savitribai Phule
              Pune University, 2024 - 2026
            </li>
            <li>
              <strong>Bachelor of Computer Programming</strong> — Osmania
              University, 2021 – 2024
            </li>
            <li>
              <strong>Class XII</strong> — Gen. B.C. Joshi Army Public School,
              2018 – 2019
            </li>
            <li>
              <strong>Class X</strong> — Gen. B.C. Joshi Army Public School,
              2016 – 2017
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Professional Experience
          </h2>
          <div className="space-y-2">
            <h3 className="font-bold">
              Web Developer Intern – eComet Foundation
            </h3>
            <p className="text-sm italic">
              Hyderabad, Telangana | Jun 2021 – Jan 2022
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Developed a fully responsive, user-friendly website for an ed-tech organization using React, ensuring optimal performance across all devices.
              </li>
              <li>
                Implemented clean UI/UX principles to present precise and relevant organizational information, enhancing user engagement and accessibility.
              </li>
              <li>Gained hands-on experience in modern web development, including responsive design, component-based architecture, and React best practices.</li>
            </ul>
          </div>

          <div className="space-y-2 mt-5">
            <h3 className="font-bold">
              Front-End Developer Intern – GoApptiv Pvt. Ltd.
            </h3>
            <p className="text-sm italic">
              Hyderabad, Telangana | Oct 2022 – Jun 2024
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Developed an Oncology Management App for patient care tracking. Managing and Tracking Cancer and Oncology Patients data, treatment plans, and progress. Also manages medical records and keeps track of next appointments.
              </li>
              <li>
                Revamped and deployed dynamic reports for business analytics.
              </li>
              <li>Enhanced workflows for customer and manager operations.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Projects
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Real Estate Marketplace</h3>
              <p className="italic">Tailwind CSS, Redux, Vite</p>
              <ul className="list-disc list-inside ml-4">
                <li>Dynamic, responsive real estate platform.</li>
                <li>State managed with Redux for fluid interactions.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Travel Agency Management System</h3>
              <p className="italic">React Native | 2024 – Present</p>
              <ul className="list-disc list-inside ml-4">
                <li>Mobile-first booking system for rural travel agencies.</li>
                <li>Scalable and modern UX for underserved areas.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">E-commerce Store</h3>
              <p className="italic">Next.js, Lucid React, TypeScript</p>
              <ul className="list-disc list-inside ml-4">
                <li>Built fully responsive fashion store with modern UI.</li>
                <li>Optimized for scalability and maintainability.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Kanban To-Do App</h3>
              <p className="italic">Next.js, TypeScript, Lucid React</p>
              <ul className="list-disc list-inside ml-4">
                <li>Clean, drag-and-drop Kanban productivity tool.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Technical Skills
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1">
            <li>
              <strong>Frontend:</strong> React.js, React Native, Next.js,
              Tailwind CSS, Material-UI, Redux, Zustand, Vanilla JS, TypeScript,
              Lucid React
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, NestJS, RESTful
              APIs, MERN
            </li>
            <li>
              <strong>Database:</strong> MongoDB
            </li>
            <li>
              <strong>Tools & Cloud:</strong> Google Cloud, Git/GitHub, Vite
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Additional Information
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Strong analytical & problem-solving skills</li>
            <li>Agile development experience</li>
            <li>Great communicator & collaborator</li>
            <li>
              Enthusiastic about Generative AI (GPT-4, Gemini, Stability AI)
            </li>
            <li>Contributor to open-source frontend projects</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CV;
