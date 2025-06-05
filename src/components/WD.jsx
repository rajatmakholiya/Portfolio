export default function WD({ currentTheme }) {
  return (
    <div
      className={`min-h-screen p-6 md:p-12 font-sans ${
        currentTheme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto shadow-xl rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 p-8 ${
          currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        {/* Left Column */}
        <div className="space-y-6 col-span-1">
          {/* Profile */}
          <div className="text-center">
            <h1 className={`text-3xl font-bold ${currentTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              Rajat Makholiya
            </h1>
            <p className="text-sm">Full Stack Developer</p>
            <p className={`text-sm ${currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Hyderabad, India
            </p>
            <p className="text-sm">📞 +91 8979140288</p>
            <p className="text-sm">📧 rajatmakholiya07@gmail.com</p>
          </div>

          {/* Skills */}
          <div>
            <h2
              className={`text-xl font-semibold border-b pb-1 mb-2 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Skills
            </h2>
            <ul className="flex flex-wrap gap-2 text-sm">
              {[
                'React JS',
                'Vanilla JS',
                'JavaScript',
                'TypeScript',
                'MERN',
                'MongoDB',
                'G-Cloud',
                'React Native',
                'Git/GitHub',
                'NodeJS/ExpressJS',
                'AWS',
                'MaterialUI',
                'Tailwind+Vite',
                'RESTful APIs',
                'NextJS',
                'NestJS',
                'Redux',
                'Zustand',
              ].map((skill) => (
                <li
                  key={skill}
                  className={`px-3 py-1 rounded-full ${
                    currentTheme === 'dark' ? 'bg-blue-900 text-blue-400' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2
              className={`text-xl font-semibold border-b pb-1 mb-2 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Education
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <strong>Osmania University</strong>
                <br />
                Bachelor of Computer Applications (2021 - 2024)
              </li>
              <li>
                <strong>Gen. B.C. Joshi Army Public School</strong>
                <br />
                Intermediate (2018 - 2019)
              </li>
              <li>
                <strong>Gen. B.C. Joshi Army Public School</strong>
                <br />
                Secondary (2016 - 2017)
              </li>
            </ul>
          </div>

          {/* Certificates */}
          <div>
            <h2
              className={`text-xl font-semibold border-b pb-1 mb-2 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Certificates
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <strong>Linux AWK</strong>
                <br />
                Mar 2025 – IIT Pune / IIT Bombay
              </li>
              <li>
                <strong>Agile & Scrum</strong>
                <br />
                Nov 2024 – IBM Pune / Coursera
              </li>
            </ul>
          </div>

          {/* Languages & Hobbies */}
          <div className="flex justify-between text-sm">
            <div>
              <h2 className="text-md font-semibold mb-1">Languages</h2>
              <ul className="list-disc ml-5">
                <li>English</li>
                <li>Hindi</li>
              </ul>
            </div>
            <div>
              <h2 className="text-md font-semibold mb-1">Hobbies</h2>
              <ul className="list-disc ml-5">
                <li>Music</li>
                <li>Tech Research</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 col-span-2">
          {/* Summary */}
          <div>
            <h2
              className={`text-2xl font-semibold border-b pb-2 mb-2 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed">
              Dedicated Full Stack Developer with 1.5 years of experience building responsive web apps using React, TypeScript,
              and JavaScript on the frontend, and Node.js/Express.js on the backend. Proficient with MongoDB, AWS, Firebase, and
              cloud deployments. Skilled in using DevOps tools like Docker, Git, and CI/CD pipelines. Advocates for clean, scalable
              code and effective Agile team collaboration.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2
              className={`text-2xl font-semibold border-b pb-2 mb-2 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Experience
            </h2>
            <div className="text-sm space-y-2">
              <p>
                <strong>Full Stack Intern – Goapptiv Pvt. Ltd.</strong>{' '}
                <span className={currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>(Oct 2022 - May 2024)</span>
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Developed dynamic, user-friendly apps using React, JavaScript, and TypeScript.</li>
                <li>Built scalable UI components with React Router and Redux.</li>
                <li>Collaborated on solutions, optimized performance, and delivered improvements.</li>
                <li>Applied Agile (Scrum) methodologies and used Generative AI tools like GPT-4 and Stability AI for automation.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2
              className={`text-2xl font-semibold border-b pb-2 mb-2 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Projects
            </h2>

            <div className="text-sm mb-4">
              <p>
                <strong>Real Estate Marketplace</strong>{' '}
                <span className={currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>(Oct 2023 – Feb 2024)</span>
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Built with Tailwind CSS, Redux, and Vite.</li>
                <li>Designed a responsive UI and handled dynamic property listings.</li>
                <li>Focused on performance optimization and scalable architecture.</li>
              </ul>
            </div>

            <div className="text-sm">
              <p>
                <strong>Travel Agency Management</strong>{' '}
                <span className={currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>(Jan 2024 – Present)</span>
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Developed dual-interface React Native app for travel agencies and customers.</li>
                <li>Targeted non-metro cities and tourism regions with fragmented services.</li>
                <li>Focused on accessibility, scalability, and modern UX for underserved areas.</li>
              </ul>
            </div>
          </div>

          {/* Links */}
          <div className="pt-4 border-t" style={{ borderColor: currentTheme === 'dark' ? '#4B5563' : '#D1D5DB' }}>
            <p>
              🔗{' '}
              <a href="https://github.com/rajatmakholiya?tab=repositories" className="text-blue-600 underline">
                GitHub
              </a>
            </p>
            <p>
              🔗{' '}
              <a href="https://www.linkedin.com/in/rajat-makholiya-1b92a1222/" className="text-blue-600 underline">
                LinkedIn
              </a>
            </p>
            {/* <p>
              🔗{' '}
              <a
                href="https://drive.google.com/file/d/1lRQ60RMyAjoqtRdpegfI0TuMpgtO5aFr/view?usp=sharing"
                className="text-blue-600 underline"
              >
                Project Drive Folder
              </a> */}
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
