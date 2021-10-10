import React from "react";

interface GreetingProps {
    message: string
}

export default function Greeting(props: GreetingProps) {
    console.log("Rendering greeting")

    return (
        <div>
            {props.message}
        </div>
    )
}