// @ts-ignore
import {h, render} from "preact"
import "./style.css"
import "./animation.css"

const App = () => (
  <div className="w-screen h-screen flex flex-col">
    <div className="flex flex-col justify-center items-center flex-1">
      <h1 className="text-sans text-6xl text-center">Volker Schiewe</h1>
      <div id="sub-title-wrapper">
        <h3 id="sub-title-text">Full Stack Software Developer</h3>
      </div>
    </div>
    <div className="flex flex-row-reverse p-2 items-center">
      <a className="m-1" href={"https://github.com/VolkerSchiewe"}>
        <img src="./img/github.svg" alt="github-logo"/>
      </a>
      <a className="m-2" href={"https://www.linkedin.com/in/volker-schiewe/"}>
        <img class="w-10 h-10" src="./img/linkedin.svg" alt="linkedin-logo"/>
      </a>
      <a className="m-1" href="mailto:volker@schiewe.dev">
        <svg fill="none" viewBox="2 2 20 20" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </a>
    </div>
  </div>
);

render(App(), document.getElementById("root"));