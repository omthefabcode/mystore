import * as React from "react";
import Header from "./Header";

// CSS import 
import * as style from "./Container.module.css"; 


const Container = (props) => {
    console.log(style);
    return (
        <div className={style.container}>
            <Header />
            {props.children}
        </div>
    );
}

export default Container;