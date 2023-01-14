import { useState, useEffect } from "react";

export default function change_color() {
    const [dark, set_dark] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", function (e) {
            if (window.pageYOffset >= window.innerHeight) {
                dark != true && set_dark(true);
            } else {
                dark != false && set_dark(false);
            }
        });
    });

    return {
        dark
    }
}