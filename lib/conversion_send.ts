import axios from "axios";

export default function conversion_send(type: string) {
    axios
        .post("http://localhost:8080/add_conversion", {
            project: "spb-antiques",
            type: type,
        })
        .then(response => console.log(response.data));
}
