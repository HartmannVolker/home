import { h, render } from "preact"
import "./style.css"

const App = () => (
  <div class="container">
    <h1 class="text-sans text-4xl">Volker Schiewe</h1>
  </div>
);

render(App(), document.getElementById("root"));