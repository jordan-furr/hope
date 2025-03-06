import Image from 'next/image';
import styles from "./hero.module.css";

export default async function Hero() {
    return (
        <div className='bg-orange'>
            <div className={styles.heroCont}>
                <Image
                    src="/Hope-Accelerator-Retreats-Normandy-France.jpeg"
                    alt="Retreat Greenhouse"
                    fill
                    style={{ objectFit: 'cover'}}
                />
            </div>
        </div>
    );
}