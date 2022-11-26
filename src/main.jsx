import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import { user } from "./user";
import { formatName } from "./assets/formatName.service";
import { getGreeting } from "./assets/getGreeting.service";
import { tick } from "./assets/updatingRendered.service";
import { Welcome } from "./assets/renderingComponent.service";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello, World!!!</h1>);

// getting started
const name = "Galih Arizza";
const element = <h1>This is JSX, hello {name}</h1>;
const gettingStarted = ReactDOM.createRoot(
  document.getElementById("getting-started")
);
gettingStarted.render(element);

// embedding expressions in JSX
const element2 = <h1>Hello, {formatName(user)}</h1>;
const embeddingExpresion = ReactDOM.createRoot(
  document.getElementById("embedding-expression")
);
embeddingExpresion.render(element2);

// JSX is an Expression
const jsxIsExpression = ReactDOM.createRoot(
  document.getElementById("jsx-is-expression")
);

jsxIsExpression.render(getGreeting("Gilang"));

// Specifying Attr
const element3 = <a href="https://www.reactjs.org">link</a>;
const element4 = <img src={user.avatarUrl} />;
const spescifyingAttr1 = ReactDOM.createRoot(
  document.getElementById("specifying-attr1")
);
const spescifyingAttr2 = ReactDOM.createRoot(
  document.getElementById("specifying-attr2")
);

spescifyingAttr1.render(element3);
spescifyingAttr2.render(element4);

// spescifying children
const element5 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here</h2>
  </div>
);

console.log(element5);

// prevent injection attack
// const title = response.potentiallyMaliciousInput;
// const element6 = <h1>{title}</h1>;

// jrx object
const element7 = <h1 className="greeting">Hello, World!!</h1>;
// bisa ditulis dengan react seperti ini
const element8 = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, World!"
);
// atau bisa di detailkan seperti ini untuk mengecek bug-free code
const element9 = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, World!",
  },
};
console.log(element7);
console.log(element8);
console.log(element9);

// updating rendered element
export const updatingRenderedEl = ReactDOM.createRoot(
  document.getElementById("updating-rendered-el")
);

// rendering component
const renderingComponent = ReactDOM.createRoot(
  document.getElementById("rendering-component")
);
const element10 = <Welcome name="Galih" />;

renderingComponent.render(element10);
