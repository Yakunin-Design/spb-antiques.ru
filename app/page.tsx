import { Inter } from "@next/font/google";
import Container from "@/components/std/Container";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <Container wrapper>
            <h1>Hi mom</h1>
        </Container>
    );
}
