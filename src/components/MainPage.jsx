import React from "react";
import Card from "./Card";
import "/src/index.css";

function MainPage() {
  const projects = [
    {
      image: "./src/svgs/foodapp.png",
      description: "Food App built with React and Vite",
      liveLink: "https://foodappbylinnea.netlify.app/",
      codeLink: "https://github.com/Lehmol/FoodApp",
    },
    {
      image: "./src/svgs/christmasquiz.png",
      description: "Christmas Trivia built in vanilla Javascript",
      liveLink: "https://christmas-triviaa.netlify.app/",
      codeLink: "https://github.com/Lehmol/Christmas-quiz",
    },
    {
      image: "./src/svgs/weatherapp.png",
      description:
        "Weather application built with vanilla Javascript. The first application i've ever built.",
      liveLink: "https://weatherappbylinnea.netlify.app/",
      codeLink: "https://github.com/Lehmol/To-do-app",
    },
  ];

  return (
    <>
      <header className="w-full h-[50px] bg-white flex items-center justify-between px-4 shadow sticky top-0 z-50">
        <div className="font-semibold text-lg">Linnéa Lehmann Molander</div>
        <ul className="flex space-x-10 text-sm font-medium">
          <li>
            <a href="#about" className="hover:underline">
              About me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </header>
      <main className="flex flex-col items-center justify-center space-y-10 px-4 md:px-10">
        <section
          id="about"
          className="w-full flex flex-col items-center justify-center text-center px-4 py-10"
        >
          <p className="m-4">About me</p>
          <aside className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 max-w-5xl">
            <div className="bg-white shadow-md rounded-lg p-6 w-full">
              <p className="tracking-wide">
                I grew up in Falun, Dalarna and moved to Stockholm in 2016. Not
                knowing exactly what I wanted to do, I explored{" "}
                <b>science, math, and physics</b>—but it was <b>programming</b>{" "}
                that really got me hooked. Today, I'm a{" "}
                <b>frontend developer</b> in the making, passionated about
                building intuitive and accessible user interfaces. I’ve learned
                the basic technologies like{" "}
                <b>HTML, CSS, JavaScript, React, and Node.js</b>, and I love
                combining logic with creativity. I’ve built both school and
                personal projects where I’ve focused on responsive design, clean
                code, and user experience. I'm also a strong communicator who
                enjoys collaborating in teams and solving real-world problems
                through tech, especially when it comes to <b>elder care</b>. I’m
                now looking for opportunities to grow as a developer — whether
                through internships, junior roles, or freelance projects.
              </p>
            </div>
          </aside>
          <div>
            <div>
              <p className="m-4">My skills</p>
              <ul className="w-full h-[50px] bg-white flex items-center justify-between gap-4 px-4">
                {[
                  "html.png",
                  "css (2).png",
                  "javascript (2).png",
                  "react (2).png",
                  "git.png",
                  "node.png",
                  "python (2).png",
                  "figma (2).png",
                ].map((src, index) => (
                  <li key={index} className="w-20 h-20">
                    <img
                      src={`./src/svgs/${src}`}
                      alt="Skill icon"
                      className="w-full h-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="w-full flex flex-col items-center justify-center text-center px-4 py-10"
        >
          <p className="m-4" text-xl font-semibold tracking-wide>
            Projects
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                image={project.image}
                description={project.description}
                liveLink={project.liveLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="w-full flex flex-col items-center justify-center text-center px-4 py-10"
        >
          <p className="m-4">Contact Page</p>
          <div></div>
        </section>
      </main>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a href="#about" className="link link-hover">
            About me
          </a>
          <a href="#projects" className="link link-hover">
            Projects
          </a>
          <a href="#contact" className="link link-hover">
            Contact
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()}</p>
          <p>
            Portfolio designed by me with React, Vite, Tailwind and DaisyUI -
            Deployed by Netlify
          </p>
        </aside>
      </footer>
    </>
  );
}

export default MainPage;
