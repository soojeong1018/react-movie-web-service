import {useEffect, useState} from "react";

function Hello() {

    useEffect(() => {
        console.log('Hello created')
        return () => console.log('Hello destroyed')
    }, []);
    return <h1>Hello</h1>;
}

function Container() {
    const [showing, setShowing] = useState(false);
    const onClick = () => {
      setShowing((prev) => !prev);
    }

    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "Show" : "Hide"}</button>
        </div>
    )
}

export default Container;