import React from "react";

export default function NavigationLink(props) {
    return (
        <a href={props.link}>
            <span>{props.text}</span>
        </a>
    );
}

