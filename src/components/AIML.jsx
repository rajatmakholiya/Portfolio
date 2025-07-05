const AIML = ({currentTheme}) => {
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
            <p className="text-lg">AI/ML Engineer</p>
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
                'Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch (basic)',
                'Jupyter Notebooks', 'Google Colab', 'Git', 'GitHub', 'SQL (basic)', 'Data Preprocessing',
                'Supervised Learning', 'Unsupervised Learning', 'Regression', 'Classification', 'Clustering',
                'Neural Networks (basic)', 'Feature Engineering', 'AWS SageMaker (conceptual)'
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
                'Analytical Thinking', 'Problem-Solving', 'Continuous Learning', 'Attention to Detail',
                'Data Interpretation', 'Collaboration', 'Curiosity'
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
                <strong className="block font-semibold">Data-Driven Decision Making using AI</strong>
                <span className={`text-gray-500 block ${currentTheme === 'dark' ? 'text-gray-100' : ''}`}>
                  IIM (April 2025)
                </span>
              </li>
              <li>
                <strong className="block font-semibold">Introduction to DevOps</strong> {/* Kept for broad tech exposure */}
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
                <li className="mb-2">Love exploring new AI/ML concepts and applying them to personal projects.</li>
                <li>Enjoy staying updated with advancements in AI, reading research papers, and engaging in online courses.</li>
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
              Enthusiastic and motivated AI/ML beginner with a foundational understanding of machine learning concepts, data analysis, and model implementation. Eager to apply theoretical knowledge to practical problems and actively learning key frameworks like TensorFlow and scikit-learn. Passionate about exploring various AI/ML domains and contributing to innovative solutions.
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
                  <li>Worked on crafting and refining prompts for Large Language Models (LLMs), focusing on human-in-the-loop program correction for superior responses.</li>
                  <li>Contributed to LLM performance optimization via reinforcement learning with human feedback, enhancing model accuracy and output quality.</li>
                  <li>Gained practical experience in natural language processing and understanding model behavior.</li>
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
                  <li>Built and implemented a platform to manage and track Oncology Patients, gaining experience with data handling and system logic.</li>
                  <li>Contributed to a collaborative Agile/Scrum team, focusing on efficient development workflows and problem-solving.</li>
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
                  <li>Designed and developed web solutions, enhancing problem-solving and technical implementation skills.</li>
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
                <p className="text-lg font-semibold">Genesis V1 Trading Bot</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>Developed a trading bot utilizing a smart and ML algorithm for paper trading, comparing data to optimize the algorithm.</li>
                  <li>Implemented reinforcement learning to train weights and enhance algorithm performance over time.</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold">News Summarize</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>Created a web scraper to collect news headlines, then used a local/cloud LLM to summarize articles.</li>
                  <li>Provides a quick daily digest, demonstrating practical application of NLP and LLMs.</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold">Pahari Rasoi Ghar</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>A full-stack food ordering application, demonstrating comprehensive software development skills.</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold">Fidget Around</p>
                <ul className="list-disc ml-6 space-y-2 text-md">
                  <li>An interactive application with 3D micro-features for relaxation, showcasing creative development.</li>
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
export default AIML;