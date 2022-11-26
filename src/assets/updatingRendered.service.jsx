import { updatingRenderedEl } from "../main";

export function tick() {
  const element = (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  updatingRenderedEl.render(element);
}

setInterval(tick, 1000);
