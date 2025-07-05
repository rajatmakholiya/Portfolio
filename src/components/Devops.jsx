const DevOps = ({ currentTheme }) => {
  return (
    <div
      className={`min-h-screen p-6 md:p-12 font-sans ${
        currentTheme === 'dark' ? 'bg-[#242424] text-whitesmoke' : 'text-gray-700'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto shadow-xl rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-8 p-10 ${
          currentTheme === 'dark' ? 'bg-[#3a3a3a]' : 'bg-white'
        }`}
      >
        {/* Left Column */}
        <div className="space-y-8 col-span-1">
          {/* Profile */}
          <div className="text-center">
            <h1 className={`text-4xl font-bold`}>
              Rajat Makholiya
            </h1>
            <p className="text-lg">DevOps & Cloud Engineer</p>
            <p className={`text-md ${currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              India
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm">📞 +91 8979140288</p>
              <p className="text-sm">📧 rajatmakholiya07@gmail.com</p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2
              className={`text-xl font-semibold border-b pb-2 mb-4 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Technical Skills
            </h2>
            <ul className="flex flex-wrap gap-2 text-sm">
              {[
                'Docker', 'Kubernetes (basic)', 'AWS (EC2, S3, IAM)', 'Git', 'GitHub', 'Jenkins',
                'GitLab CI/CD', 'GitHub Actions', 'Bash Scripting', 'Python (for automation)',
                'CI/CD Pipelines', 'Microservices (conceptual)', 'Cloud Security (basics)', 'Networking (basics)'
              ].map((skill) => (
                <li
                  key={skill}
                  className={`px-3 py-1 rounded-full border ${
                    currentTheme === 'dark'
                      ? 'bg-gray-700/30 text-gray-200 border-gray-600/50 backdrop-blur-sm'
                      : 'bg-gray-200/30 text-gray-800 border-gray-300/50 backdrop-blur-sm'
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className={`text-xl font-semibold border-b pb-2 mb-4 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Soft Skills
            </h2>
            <ul className="flex flex-wrap gap-2 text-sm">
              {[
                'Problem-Solving', 'Automation Mindset', 'Collaboration', 'System Thinking',
                'Continuous Learning', 'Troubleshooting', 'Adaptability'
              ].map((skill) => (
                <li
                  key={skill}
                  className={`px-3 py-1 rounded-full border ${
                    currentTheme === 'dark'
                      ? 'bg-gray-700/30 text-gray-200 border-gray-600/50 backdrop-blur-sm'
                      : 'bg-gray-200/30 text-gray-800 border-gray-300/50 backdrop-blur-sm'
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
              className={`text-xl font-semibold border-b pb-2 mb-4 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Education
            </h2>
            <ul className="text-sm space-y-3">
              <li>
                <strong className="block font-semibold">Master of Computer Science</strong>
                <span className={`text-gray-500 block ${currentTheme === 'dark' ? 'text-white' : ''}`}>
                  Pune University, Pune (Expected 2026)
                </span>
                <span className={`text-gray-500 block ${currentTheme === 'dark' ? 'text-white' : ''}`}>
                  CGPA: 8.15
                </span>
              </li>
              <li>
                <strong className="block font-semibold">Bachelor of Computer Science</strong>
                <span className={`text-gray-500 block ${currentTheme === 'dark' ? 'text-white' : ''}`}>
                  Osmania University, Hyderabad (2021-2024)
                </span>
                <span className={`text-gray-500 block ${currentTheme === 'dark' ? 'text-white' : ''}`}>
                  CGPA: 8.05
                </span>
              </li>
            </ul>
          </div>

          {/* Certificates */}
          <div>
            <h2
              className={`text-xl font-semibold border-b pb-2 mb-4 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Certifications
            </h2>
            <ul className="text-sm space-y-3">
              <li>
                <strong className="block font-semibold">Introduction to DevOps</strong>
                <span className={`text-gray-500 block ${currentTheme === 'dark' ? 'text-gray-100' : ''}`}>
                  IBM (July 2025)
                </span>
              </li>
              <li>
                <strong className="block font-semibold">Introduction to Agile Development and Scrum</strong>
                <span className={`text-gray-500 block ${currentTheme === 'dark' ? 'text-gray-100' : ''}`}>
                  IBM (Nov 2024)
                </span>
              </li>
              <li>
                <strong className="block font-semibold">Data-Driven Decision Making using AI</strong> {/* Kept for broad tech exposure */}
                <span className={`text-gray-500 block ${currentTheme === 'dark' ? 'text-gray-100' : ''}`}>
                  IIM (April 2025)
                </span>
              </li>
            </ul>
          </div>

          {/* Languages & Hobbies */}
          <div className="text-sm space-y-4">
            <div>
              <h2 className="text-md font-semibold mb-2">Languages</h2>
              <ul className="list-disc ml-6">
                <li>English</li>
                <li>Hindi</li>
              </ul>
            </div>
            <div>
              <h2 className="text-md font-semibold mb-2">Hobbies</h2>
              <ul className="list-disc ml-6">
                <li className="mb-2">Love exploring new cloud technologies and automation tools.</li>
                <li>Enjoy learning about system architecture and infrastructure optimization.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 col-span-2">
          {/* Summary */}
          <div>
            <h2
              className={`text-2xl font-semibold border-b pb-2 mb-4 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Professional Summary
            </h2>
            <p className="text-md leading-relaxed">
              Enthusiastic and aspiring DevOps and Cloud beginner with a foundational understanding of CI/CD pipelines, containerization, and cloud infrastructure concepts. Eager to gain hands-on experience with tools like Docker, Kubernetes, and AWS, and passionate about automating workflows to build scalable and reliable systems.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2
              className={`text-2xl font-semibold border-b pb-2 mb-4 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Experience
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold">
                  Prompt Engineer/ LLM Trainer (Full Stack) - Freelancer – Outlier AI{' '}
                  <span className={`text-sm ${currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    (May 2025 - July 2025)
                  </span>
                </p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>Gained experience with tooling and workflow optimization in an LLM development environment.</li>
                </ul>
              </div>
              <div>
                <p className="text-lg font-semibold">
                  Front End Developer Intern – Goapptiv Pvt. Ltd.{' '}
                  <span className={`text-sm ${currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    (Oct 2022 - May 2024)
                  </span>
                </p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>Contributed to revamping legacy software, indirectly involved in performance improvements that touch upon deployment considerations.</li>
                  <li>Collaborated in Agile/Scrum team, gaining insight into development workflows that interact with deployment.</li>
                </ul>
              </div>
              <div>
                <p className="text-lg font-semibold">
                  Web Developer - Intern – Comet Foundation{' '}
                  <span className={`text-sm ${currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    (Dec 2021 - May 2022)
                  </span>
                </p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>Involved in the development and optimization of a website, providing foundational understanding of software lifecycle and deployment considerations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2
              className={`text-2xl font-semibold border-b pb-2 mb-4 ${
                currentTheme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              Projects
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold">CI/CD Pipeline for a Web App (Conceptual)</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>Explored setting up a basic CI/CD pipeline using GitHub Actions/Jenkins for a simple web application, aiming to automate build, test, and deployment stages.</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold">Dockerized Application Deployment (Conceptual)</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>Investigated containerizing a sample application using Docker, focusing on understanding Dockerfiles and image management for portable deployments.</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold">Automated Cloud Resource Script (Conceptual)</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>Researched developing simple Python/Bash scripts to automate basic cloud resource provisioning tasks on platforms like AWS.</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold">Pahari Rasoi Ghar (DevOps Perspective)</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>Considered scalable deployment strategies and infrastructure requirements for a full-stack food ordering application.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="pt-6 border-t flex flex-row justify-between" style={{ borderColor: currentTheme === 'dark' ? '#4B5563' : '#D1D5DB' }}>
            <p className="text-md">
              🔗{' '}
              <a href="https://github.com/rajatmakholiya?tab=repositories" className="hover:text-gray-300">
                GitHub
              </a>
            </p>
            <p className="text-md">
              🔗{' '}
              <a href="https://www.linkedin.com/in/rajat-makholiya-1b92a1222/" className="hover:text-gray-300">
                LinkedIn
              </a>
            </p>
            <p className="text-md">
              🔗{' '}
              <a href="www.faangpath.com" className="hover:text-gray-300">
                Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DevOps;