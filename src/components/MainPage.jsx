import Card from "./Card";
import "/src/index.css";

function MainPage() {
  const projects = [
    {
      image: "/foodapp.png",
      description: "Food App built with React and Vite",
      liveLink: "https://foodappbylinnea.netlify.app/",
      codeLink: "https://github.com/Lehmol/FoodApp",
    },
    {
      image: "/christmasquiz.png",
      description: "Christmas quiz built in vanilla Javascript",
      liveLink: "https://christmas-triviaa.netlify.app/",
      codeLink: "https://github.com/Lehmol/Christmas-quiz",
    },
    {
      image: "/weatherapp.png",
      description:
        "The first application i've ever built. Weather application built with vanilla Javascript.",
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
              About
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
          <p className="m-4 text-lg font-semibold">About me</p>
          <aside className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 max-w-5xl">
            <div className="bg-white shadow-md rounded-lg p-6 w-full">
              <p className="tracking-wide text-lg">
                I grew up in Falun, Dalarna and moved to Stockholm in 2016. Not
                knowing exactly what I wanted to do, I explored{" "}
                <b>science, math, and physics</b>—but it was <b>programming</b>{" "}
                that really got me hooked.<br></br> Today, I'm a{" "}
                <b>frontend developer</b> in the making, passionated about
                building intuitive and accessible user interfaces. I’ve learned
                the basic technologies like{" "}
                <b>HTML, CSS, JavaScript, React, and Node.js</b>, and I love
                combining logic with creativity. Along the way, I’ve been
                learning how important things like responsive design, clean
                code, and good user experience really are - and there's always
                more to learn. <br></br> What keeps me going is the excitement
                of turning <b>big ideas into real things</b> through code. I
                love that with the skills I’m building, I can take an idea in my
                head and actually bring it to life. Right now, I’m looking for
                opportunities—whether it’s an internship, junior role, or
                freelance project—to keep{" "}
                <b>learning, growing, and creating.</b>
              </p>
            </div>
          </aside>
          <div>
            <div>
              <p className="m-4 text-lg font-semibold">My skills</p>
              <ul className="w-full bg-white flex flex-wrap items-center justify-center gap-10 px-4 py-4">
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
                      src={`/${src}`}
                      alt="Skill icon"
                      className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
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
          <p className="m-4 text-xl font-semibold tracking-wide">Projects</p>
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
          <p className="m-4 text-l font-semibold tracking-wide">
            More projects are coming soon...
          </p>
        </section>
        <section
          id="contact"
          className="w-full flex flex-col items-center justify-center text-center px-4 py-10"
        >
          <p className="m-4 text-xl font-semibold tracking-wide">Contact</p>
          <div>
            <ul className="flex space-x-10 text-sm font-medium">
              <li>
                <a
                  className="hover:underline"
                  href="https://www.linkedin.com/in/linn%C3%A9a-lehmann-molander-554160328/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://github.com/Lehmol"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="mailto:linnealehmann7@gmail.com"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
          <a href="/lehmann-molander-cv.pdf" download>
            <button className="m-4 bg-green-400 rounded h-10 w-40 shadow hover:bg-green-500">
              CV (PDF)
            </button>
          </a>
          <a href="/lehmann-molander-pb.pdf" download>
            <button className="m-4 bg-green-400 rounded h-10 w-40 shadow hover:bg-green-500">
              Personal letter (PDF)
            </button>
          </a>
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
