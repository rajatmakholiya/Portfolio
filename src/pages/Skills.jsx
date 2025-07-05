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

import apiPng from "../assets/icons/api.png";
import awsPng from "../assets/icons/aws.png";
import cPng from "../assets/icons/c.png";
import cicdPng from "../assets/icons/cicd.png";
import cppPng from "../assets/icons/cpp.png";
import css3Png from "../assets/icons/css-3.png";
import dockerPng from "../assets/icons/docker.png";
import firebasePng from "../assets/icons/firebase.png";
import gitPng from "../assets/icons/git.png";
import html from "../assets/icons/html-5.png";
import yaml from "../assets/icons/yaml.png";
import githubPng from "../assets/icons/github.png";
import go from "../assets/icons/go-lang.png";
import js from "../assets/icons/js.png";
import sql from "../assets/icons/sql.png";
import python from "../assets/icons/python.png";
import TypeScript from "../assets/icons/typescript.png";
import react from "../assets/icons/react.png";
import vue from "../assets/icons/vue.png";
import mui from "../assets/icons/MUI.png";
import zustand from "../assets/icons/zustand.png";
import next from "../assets/icons/next.png";
import tailwind from "../assets/icons/Tailwind.png";
import redux from "../assets/icons/redux.png";
import vite from "../assets/icons/vite.png";
import spline from "../assets/icons/spline.png";
import node from "../assets/icons/node.png";
import nest from "../assets/icons/nest.png";
import jwt from "../assets/icons/jwt.png";
import ws from "../assets/icons/websocket.png";
import mongo from "../assets/icons/mongo.png";
import redis from "../assets/icons/redis.png";
import postgres from "../assets/icons/postgres.png";
import oracle from "../assets/icons/oracle.png";
import MySQL from "../assets/icons/mysql.png";
import Jenkins from "../assets/icons/jenkins.png";
import vercel from "../assets/icons/vercel.png";
import Kubernetes from "../assets/icons/kubernetes.png";
import ga from "../assets/icons/github actions.png";
import Netlify from "../assets/icons/netlify.png";

const skillIcons = {
  C: cPng,
  "C++": cppPng,
  HTML5: html,
  CSS3: css3Png,
  YAML: yaml,
  Go: go,
  JavaScript: js,
  SQL: sql,
  Python: python,
  TypeScript: TypeScript,
  "Shell/Bash": Terminal,

  // Frontend
  React: react,
  Next: next,
  Vue: vue,
  Tailwind: tailwind,
  "Material-UI": mui,
  Redux: redux,
  Zustand: zustand,
  Vite: vite,
  "React Native": react,
  Spline: spline,

  // Backend
  "Node/Express": node,
  NestJS: nest,
  "RESTful APIs": apiPng,
  Websockets: ws,
  PythonBackend: python,
  JWT: jwt,

  // Databases
  MongoDB: mongo,
  Postgres: postgres,
  Redis: redis,
  MySQL: MySQL,
  Oracle: oracle,
  Firebase: firebasePng,

  // DevOps and Cloud
  Docker: dockerPng,
  Kubernetes: Kubernetes,
  Git: gitPng,
  GitHub: githubPng,
  AWS: awsPng,
  "Github Actions": ga,
  Jenkins: Jenkins,
  Netlify: Netlify,
  Vercel: vercel,
  "CI/CD": cicdPng,

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
