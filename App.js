import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [
                React.createElement("h1", { id: "heading1" }, "Hello world in the venu component"),
                React.createElement("h2", { id: "heading2" }, "Hello world in the First heading")
            ]
        ),
        React.createElement("div", { id: "child" },
            [
                React.createElement("h3", { id: "heading3" }, "Hello world in the First heading"),
                React.createElement("h4", { id: "heading4" }, "Hello world in the First heading")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);