import axios from "axios";

export default function incoming_send(source?: string) {
    axios
        .post("https://stats.yakunin.io/add_source", {
            project: "spb-antiques",
            source: source === "ya" ? "ya" : "other",
        })
        .then(response => console.log(response.data));
}
