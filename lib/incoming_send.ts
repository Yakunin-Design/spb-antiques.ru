import axios from "axios";

export default function incoming_send(source?: string) {
    axios
        .post("http://localhost:8080/add_source", {
            project: "spb-antiques",
            source: source === "ya" ? "ya" : "other",
        })
        .then(response => console.log(response.data));
}
