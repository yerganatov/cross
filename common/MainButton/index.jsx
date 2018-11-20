import React from "react";
import "./MainButton.scss";

const MainButton = (props) =>{
    const {title, onClick} = props;
    return(
        <a onClick={onClick} className="MainButton  d-flex align-items-center justify-content-center">
            <p className="m-0">{title}</p>
        </a>
    )
}

export default  MainButton;