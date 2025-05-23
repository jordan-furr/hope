import Image from 'next/image';
import styles from "./header.module.css";

export default async function Header() {
    return (
        <div className={styles.headerCont}>
            <h1 className={styles.hopeTitle}>
                Hope Accelerator
            </h1>
            <div className={styles.menuCont}>
                <Image
                    src="/Hope-Accelerator-Retreats-Normandy-France-w.PNG"
                    alt="Menu"
                    width={54}
                    height={54}
                />
            </div>
        </div>
    );
}
