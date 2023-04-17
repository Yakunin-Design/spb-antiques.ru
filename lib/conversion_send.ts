import axios from "axios";

export default function conversion_send(type: string) {
    axios
        .post("https://stats.yakunin.io/add_source", {
            project: "spb-antiques",
            type,
        })
        .then(response => console.log(response.data));
}
