import styles from "./subscribe-form.module.css";

export default async function SubscribeForm() {
    return (
        <div className={styles.subscribeCont}>
            <div>
                <p>Email</p>
            </div>
            <div>
                <p>Subscribe</p>
            </div>
        </div>
    );
}