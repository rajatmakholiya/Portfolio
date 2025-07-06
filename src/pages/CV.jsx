export default function CV({ currentTheme }) {
  return (
    <div
      className={`min-h-screen p-6 sm:p-10 ${
        currentTheme === "dark"
          ? "text-gray-200"
          : "text-gray-800"
      }`}
    >
      <div
        className={`max-w-4xl mx-auto shadow-xl rounded-2xl p-8 space-y-8 backdrop-blur-md ${
          currentTheme === "dark" ? "bg-[#3a3a3a]/60" : "bg-white/60"
        }`}
      >
        <header className="text-center space-y-1">
          <h1 className="text-4xl font-bold text-inherit">Rajat Makholiya</h1>
          <p className="text-lg text-inherit">Full-stack developer</p>
          <p className="text-sm">
            India | +91 8979140288 |{" "}
            <a
              href="mailto:rajatmakholiya07@gmail.com"
              
            >
              rajatmakholiya07@gmail.com
            </a>
          </p>
          <div
            className={`flex justify-center gap-4 `}
          >
            <a
              href="https://www.linkedin.com/in/rajat-makholiya-1b92a1222/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rajatmakholiya"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="www.faangpath.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Professional Summary
          </h2>
          <p>
            Passionate and curious Full-stack developer with more than 2 years of practical experience delivering responsive, user-focused web applications. Leveraged modern tech stacks including React, JavaScript, Next.js and Python, with a strong command of MongoDB, PostgreSQL, AWS, and Firebase. Well-versed in Docker, Git, Kubernetes, and CI/CD pipelines, and actively learning DevOps and serverless functions. A collaborative Agile team player dedicated to solving meaningful problems with clean and scalable code.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Education
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Master of Computer Science</strong> — Pune University, Pune
              <br />
              Expected 2026
              <br />
              CGPA: 8.15
            </li>
            <li>
              <strong>Bachelor of Computer Science</strong> — Osmania University, Hyderabad
              <br />
              2021-2024
              <br />
              CGPA: 8.05
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Professional Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">
                Web Developer - Intern – Comet Foundation
              </h3>
              <p className="text-sm italic">
                Hyderabad, India | Dec 2021 - May 2022
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Designed and developed a web solution for the NGO with direct focus on awareness for underprivileged students for a better chance at higher education.
                </li>
                <li>
                  Increased efficiency with focus on bug fixes and team coordination.
                </li>
                <li>Participated in various project cycles and offered valuable insight for software optimization.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">
                Front End Developer Intern – Goapptiv Pvt. Ltd.
              </h3>
              <p className="text-sm italic">
                Hyderabad, India | Oct 2022 - May 2024
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Built and implemented a platform to manage and track Oncology Patients, increasing efficiency and finally helping Cancer Patients.
                </li>
                <li>
                  Revamped organisation's Legacy software Frontend to latest React TS based code with 40% increase in performance.
                </li>
                <li>Collaborative Agile/Scrum team player and helped innovate and automate the development workflow.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">
                Prompt Engineer/ LLM Trainer (Full Stack) - Freelancer – Outlier AI
              </h3>
              <p className="text-sm italic">
                Remote | May 2025 - July 2025
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Worked on crafting and refining prompts, followed by human-in-the-loop program correction for superior responses.
                </li>
                <li>
                  Did prompt engineering and LLM performance optimization via reinforcement learning via Human-Generated Golden Response.
                </li>
                <li>Directly contributed to LLM training by grading Prompts, providing high-quality prompts, grading LLM-generated responses, and significantly enhancing model accuracy and output quality.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Projects
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Pahari Rasoi Ghar</h3>
              <ul className="list-disc list-inside ml-4">
                <li>A full stack food ordering application and a separate Admin Panel application, specifically designed for bachelors and students for cheaper meals from small-scale PG/Restaurants.</li>
                <li>Provides a food solution to both entities and helps the small-scale businesses grow.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Genesis V1 Trading Bot</h3>
              <ul className="list-disc list-inside ml-4">
                <li>A trading bot with a smart and an ML algorithm currently used to paper trade, which then compares the data to find the better algorithm, also uses the data to train weights using reinforcement learning to optimize the algorithm over time.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">News Summarize</h3>
              <ul className="list-disc list-inside ml-4">
                <li>A web Scraper that scrapes all the news headlines from the web, then uses a local or cloud LLM to summarize each news article and provide a quick digest for your day.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Fidget Around</h3>
              <ul className="list-disc list-inside ml-4">
                <li>A quick feast for your anxiety, it contains multiple 3D and interactive micro-features to fidget around with to help you relax and calm down.</li>
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
              <strong>Technical Skills:</strong> React.JS, Next.JS, Typescript, MERN, MongoDB, Git+Github, AWS, Vue.JS, Restful APIs, Redis, Kubernetes, Docker, Gitlab CI/CD, Jenkins, Shell, Bash
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Soft Skills
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1">
            <li>
              <strong>Soft Skills:</strong> Conversation, Critical thinker, Time-Management, Problem-Solving, Team-Work, Conflict Resolution
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Certifications
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Introduction to Agile Development and Scrum (IBM)</li>
            <li>Data-Driven Decision Making using AI (IIM)</li>
            <li>Introduction to DevOps (IBM)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">
            Additional Information
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Love reading books and playing video games to cool down my mind or when I am out of ideas or feeling lost.</li>
            <li>I love building various tools and solutions for my personal use in my spare time, always trying to build something or realize an idea.</li>
            <li>Languages: English, Hindi</li>
          </ul>
        </section>
      </div>
    </div>
  );
};