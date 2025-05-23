import Image from 'next/image';
import styles from "./hero.module.css";

export default async function Hero() {
    return (
        <div className='bg-orange'>
            <div className={styles.heroCont}>
                <Image
                    src="/02.JPG"
                    alt="Retreat Greenhouse"
                    fill
                    style={{ 
                        objectFit: 'cover',
                        objectPosition: '50% 42%'
                    }}
                />
            </div>
        </div>
    );
}