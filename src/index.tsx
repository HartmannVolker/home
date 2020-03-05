import { h, render } from "preact"
import "./style.css"

const App = () => (
  <div class="w-screen h-screen flex flex-col bg-blue-400">
    <div class="flex flex-col justify-center items-center flex-1">
      <h1 class="text-sans text-6xl text-center">Volker Schiewe</h1>
      <h3>Full-Stack Software Engineer</h3>
    </div>
    <div class="flex flex-row-reverse p-2 items-center">
      <a class="m-1">
        <img src="./img/github.svg" alt="github-logo"/>
      </a>
       <a class="m-2">
        <img src="./img/linkedin.svg" alt="linkedin-logo"/>
       </a>
    </div>
  </div>
);

render(App(), document.getElementById("root"));