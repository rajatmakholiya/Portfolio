export default function WD({ currentTheme }) {
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
            <p className="text-lg">Full Stack Developer</p>
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
                'React.JS', 'Next.JS', 'Typescript', 'MERN', 'MongoDB', 'Git+Github', 'AWS', 'Vue.JS',
                'Restful APIs', 'Redis', 'Kubernetes', 'Docker', 'Gitlab CI/CD', 'Jenkins', 'Shell', 'Bash'
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
                'Conversation', 'Critical thinker', 'Time-Management', 'Problem-Solving', 'Team-Work',
                'Conflict Resolution'
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
                <strong className="block font-semibold">Introduction to Agile Development and Scrum</strong>
                <span className={`text-gray-500 block ${currentTheme === 'dark' ? 'text-gray-100' : ''}`}>
                  IBM (Nov 2024)
                </span>
              </li>
              <li>
                <strong className="block font-semibold">Data-Driven Decision Making using AI</strong>
                <span className={`text-gray-500 block ${currentTheme === 'dark' ? 'text-gray-100' : ''}`}>
                  IIM (April 2025)
                </span>
              </li>
              <li>
                <strong className="block font-semibold">Introduction to DevOps</strong>
                <span className={`text-gray-500 block ${currentTheme === 'dark' ? 'text-gray-100' : ''}`}>
                  IBM (July 2025)
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
                <li className="mb-2">Love reading books and playing video games to cool down my mind or when I am out of ideas or feeling lost.</li>
                <li>Love building various tools and solutions for my personal use in my spare time, always trying to build something or realize an idea.</li>
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
              Passionate and curious Full-stack developer with more than 2 years of practical experience delivering responsive, user-focused web applications. Leveraged modern tech stacks including React, JavaScript, Next.js and Python, with a strong command of MongoDB, PostgreSQL, AWS, and Firebase. Well-versed in Docker, Git, Kubernetes, and CI/CD pipelines, and actively learning DevOps and serverless functions. A collaborative Agile team player dedicated to solving meaningful problems with clean and scalable code.
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
                  Web Developer - Intern – Comet Foundation{' '}
                  <span className={`text-sm ${currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    (Dec 2021 - May 2022)
                  </span>
                </p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>Designed and developed a web solution for the NGO with direct focus on awareness for underprivileged students for a better chance at higher education.</li>
                  <li>Increased efficiency with focus on bug fixes and team coordination.</li>
                  <li>Participated in various project cycles and offered valuable insight for software optimization.</li>
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
                  <li>Built and implemented a platform to manage and track Oncology Patients, increasing efficiency and finally helping Cancer Patients.</li>
                  <li>Revamped organisation's Legacy software Frontend to latest React TS based code with 40% increase in performance.</li>
                  <li>Collaborative Agile/Scrum team player and helped innovate and automate the development workflow.</li>
                </ul>
              </div>
              <div>
                <p className="text-lg font-semibold">
                  Prompt Engineer/ LLM Trainer (Full Stack) - Freelancer – Outlier AI{' '}
                  <span className={`text-sm ${currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    (May 2025 - July 2025)
                  </span>
                </p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>Worked on crafting and refining prompts, followed by human-in-the-loop program correction for superior responses.</li>
                  <li>Did prompt engineering and LLM performance optimization via reinforcement learning via Human-Generated Golden Response.</li>
                  <li>Directly contributed to LLM training by grading Prompts, providing high-quality prompts, grading LLM-generated responses, and significantly enhancing model accuracy and output quality.</li>
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
                <p className="text-lg font-semibold">Pahari Rasoi Ghar</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>A full stack food ordering application and a separate Admin Panel application, specifically designed for bachelors and students for cheaper meals from small-scale PG/Restaurants.</li>
                  <li>Provides a food solution to both entities and helps the small-scale businesses grow.</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold">Genesis V1 Trading Bot</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>A trading bot with a smart and an ML algorithm currently used to paper trade, which then compares the data to find the better algorithm, also uses the data to train weights using reinforcement learning to optimize the algorithm over time.</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold">News Summarize</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>A web Scraper that scrapes all the news headlines from the web, then uses a local or cloud LLM to summarize each news article and provide a quick digest for your day.</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold">Fidget Around</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>A quick feast for your anxiety, it contains multiple 3D and interactive micro-features to fidget around with to help you relax and calm down.</li>
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