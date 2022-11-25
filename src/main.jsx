import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import { user } from "./user";
import { formatName } from "./assets/formatName.service";
import { getGreeting } from "./assets/getGreeting.service";

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
const element4 = <img src={user.avatarUrl}></img>;
const spescifyingAttr1 = ReactDOM.createRoot(
  document.getElementById("specifying-attr1")
);
const spescifyingAttr2 = ReactDOM.createRoot(
  document.getElementById("specifying-attr2")
);

spescifyingAttr1.render(element3);
spescifyingAttr2.render(element4);
