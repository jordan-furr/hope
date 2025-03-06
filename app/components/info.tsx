import Image from 'next/image';
import styles from "./info.module.css";
import SubscribeForm from './subscribe-form';

export default async function Info() {
    return (
        <div className={styles.infoCont}>
            <div className={styles.textCont}>
                <p>Located in Normandy, France. Hope Accelerator retreats are immersive and run on an ethos: the regenerative power of Nature heals systems and us. Attend Fall 2025.</p>
                <SubscribeForm/>
            </div>
        </div>
    );
}