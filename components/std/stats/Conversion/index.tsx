"use client";
import axios from "axios";
import style from "./conversion.module.css";
type props = {
    children: React.ReactNode;
    type: string;
};

export default function Conversion(props: props) {
    function handle_conversion() {
        axios
            .post("http://localhost:8080/add_conversion", {
                project: "spb-antiques",
                type: props.type,
            })
            .then(response => console.log(response.data));
    }

    return (
        <div className={style.conversion} onClick={handle_conversion}>
            {props.children}
        </div>
    );
}
