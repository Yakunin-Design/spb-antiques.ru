import styles from "./footer.module.css"

export default function Footer() {
    return <footer className={styles.footer}>
        <p className={styles.copyright}>
        © Designed by {" "} 
        <a href="https://yakunin.io">
            Yakunin Design Team
        </a>
        </p>        
    </footer>;
}