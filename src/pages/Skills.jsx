import {
  Lightbulb,
  Users,
  Brain,
  Clock,
  Handshake,
  Terminal,
  Settings,
  Bird,
} from "lucide-react";
import IMAGES from "../assets/img";

const skillIcons = {
  C: IMAGES.cPng,
  "C++": IMAGES.cppPng,
  HTML5: IMAGES.html,
  CSS3: IMAGES.css3Png,
  YAML: IMAGES.yaml,
  Go: IMAGES.go,
  JavaScript: IMAGES.js,
  SQL: IMAGES.sql,
  Python: IMAGES.python,
  TypeScript: IMAGES.TypeScript,
  "Shell/Bash": Terminal,

  // Frontend
  React: IMAGES.react,
  Next: IMAGES.next,
  Vue: IMAGES.vue,
  Tailwind: IMAGES.tailwind,
  "Material-UI": IMAGES.mui,
  Redux: IMAGES.redux,
  Zustand: IMAGES.zustand,
  Vite: IMAGES.vite,
  "React Native": IMAGES.react,
  Spline: IMAGES.spline,

  // Backend
  "Node/Express": IMAGES.node,
  NestJS: IMAGES.nest,
  "RESTful APIs": IMAGES.apiPng,
  Websockets: IMAGES.ws,
  PythonBackend: IMAGES.python,
  JWT: IMAGES.jwt,

  // Databases
  MongoDB: IMAGES.mongo,
  Postgres: IMAGES.postgres,
  Redis: IMAGES.redis,
  MySQL: IMAGES.MySQL,
  Oracle: IMAGES.oracle,
  Firebase: IMAGES.firebasePng,

  // DevOps and Cloud
  Docker: IMAGES.dockerPng,
  Kubernetes: IMAGES.Kubernetes,
  Git: IMAGES.gitPng,
  GitHub: IMAGES.githubPng,
  AWS: IMAGES.awsPng,
  "Github Actions": IMAGES.ga,
  Jenkins: IMAGES.Jenkins,
  Netlify: IMAGES.Netlify,
  Vercel: IMAGES.vercel,
  "CI/CD": IMAGES.cicdPng,

  // Personal & Creative (all Lucide icons)
  "Critical Thinking": Brain,
  "Time-Management": Clock,
  "Problem-Solving": Lightbulb,
  "Team-Work": Users,
  "Conflict Resolution": Handshake,
  "Prompt-Engineering": Settings,
  Photography: Bird,
};

const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "C" },
      { name: "C++" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "YAML" },
      { name: "Go" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Python" },
      { name: "TypeScript" },
      { name: "Shell/Bash" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React" },
      { name: "Next" },
      { name: "Vue" },
      { name: "Tailwind" },
      { name: "Material-UI" },
      { name: "Redux" },
      { name: "Zustand" },
      { name: "Vite" },
      { name: "React Native" },
      { name: "Spline" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node/Express" },
      { name: "NestJS" },
      { name: "RESTful APIs" },
      { name: "Websockets" },
      { name: "Python" },
      { name: "JWT" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB" },
      { name: "Postgres" },
      { name: "Redis" },
      { name: "MySQL" },
      { name: "Oracle" },
      { name: "Firebase" },
    ],
  },
  {
    category: "DevOps and Cloud",
    items: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "AWS" },
      { name: "Github Actions" },
      { name: "Jenkins" },
      { name: "Netlify" },
      { name: "Vercel" },
      { name: "CI/CD" },
    ],
  },
  {
    category: "Personal & Creative",
    items: [
      { name: "Critical Thinking" },
      { name: "Time-Management" },
      { name: "Problem-Solving" },
      { name: "Team-Work" },
      { name: "Conflict Resolution" },
      { name: "Prompt-Engineering" },
      { name: "Photography" },
    ],
  },
];

const Skills = ({ currentTheme }) => {
  return (
    <div
      className={`min-h-screen p-6 md:p-12 font-sans ${
        currentTheme === "dark"
          ? "bg-[#242424] text-neutral-100"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto shadow-xl rounded-2xl overflow-hidden p-8 space-y-10 backdrop-blur-md ${
          currentTheme === "dark" ? "bg-neutral-800/60" : "bg-white/60"
        }`}
      >
        <h1 className={`text-4xl font-bold text-center mb-8`}>
          Skills & Technologies
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((categoryData, index) => {
            const isPersonalCreative =
              categoryData.category === "Personal & Creative";
            const itemsGridClass = isPersonalCreative
              ? "grid grid-cols-1 gap-4"
              : "grid grid-cols-2 gap-4";

            return (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  currentTheme === "dark"
                    ? "bg-neutral-700/40 border-neutral-600/50 hover:bg-neutral-600/50"
                    : "bg-white/40 border-gray-300/50 hover:bg-white/60"
                }`}
              >
                <h2
                  className={`text-2xl font-semibold mb-5 ${
                    currentTheme === "dark" ? "text-sky-400" : "text-sky-700"
                  }`}
                >
                  {categoryData.category}
                </h2>
                <div className={itemsGridClass}>
                  {" "}
                  {categoryData.items.map((skill, skillIndex) => {
                    const IconComponentOrPath = skillIcons[skill.name];
                    const isPng = typeof IconComponentOrPath === "string";

                    return (
                      <div key={skillIndex} className="flex items-center gap-3">
                        {IconComponentOrPath &&
                          (isPng ? (
                            <img
                              src={IconComponentOrPath}
                              alt={skill.name}
                              className="w-8 h-8 object-contain"
                            />
                          ) : (
                            <IconComponentOrPath
                              className={`w-6 h-6 ${
                                currentTheme === "dark"
                                  ? "text-sky-300"
                                  : "text-sky-600"
                              }`}
                            />
                          ))}
                        <span
                          className={`text-base font-medium ${
                            currentTheme === "dark"
                              ? "text-gray-100"
                              : "text-gray-800"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
