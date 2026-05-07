import Image from 'next/image';
import Link from 'next/link';

export default async function Hero() {
    return (
        <div>
            <div className="heroCont">
                <Image
                    src="/greenhouse-hero-a.png"
                    alt="Retreat Greenhouse"
                    fill
                    className="heroImg"
                />
            </div>
            {/* <div className="heroButtonCont">
                    <Link href="/compost" className="heroButton">
                        Compost Notes
                    </Link>
                </div> */}
        </div>
    );
}