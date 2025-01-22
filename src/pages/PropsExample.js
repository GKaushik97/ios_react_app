import { useEffect, useState } from "react";
export default function PropsExample(props) {
    const [name, setName] = useState("Kaushik");
    useEffect(() => {
        setTimeout(() => {
            setName("Kohli");
        }, 10000);
    });
    return (
        <div>
            <h3>My name is {name }</h3>
            <h3>This was a new car name {props.brand }</h3>
        </div>
    )
}