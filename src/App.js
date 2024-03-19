import Button from './Button';
import Container from "./cleanup";
import {useEffect, useState} from "react";

function App() {
    // const [counter  , setCounter] = useState(0);
    // const [keyword, setKeyword] = useState("");
    // const onClick = () => setCounter((prev) => prev+1);
    // const onChange = (event) => setKeyword(event.target.value);
    //
    // console.log('i run all the time');
    //
    // // 맨 처음에만 실행(지켜볼 대상이 없기 때문에)
    // useEffect(() => {
    //     console.log('i run only once');
    // }, []);
    //
    // // keyword가 변화할때마다 실행
    // useEffect(() => {
    //     console.log("i run when 'keyword' changes");
    //     // if (keyword !== "" && keyword.length > 5) {
    //     //     console.log('search for', keyword);
    //     // }
    // }, [keyword]);
    //
    // // counter 변화할때마다 실행
    // useEffect(() => {
    //     console.log("i run when 'counter' changes");
    // }, [counter]);
    //
    // // keyword, counter 변화할때마다 실행
    // useEffect(() => {
    //     console.log("i run when keyword & counter changes");
    // }, [keyword, counter]);


    return (
        <div>
            <Container />
            {/*<input value={keyword} onChange={onChange} type="text" placeholder="search here... "/>*/}
            {/*<h1>{counter}</h1>*/}
            {/*<button onClick={onClick}>click me</button>*/}
        </div>
    );
}

export default App;
