import Link from "next/link";
import Image from "next/image";

export default function RetreatPage() {


    return (
        <div className='page bg-pink'>
            <Image
                src="/cottage_invite.png"
                alt="Retreat Greenhouse"
                width={1920}
                height={1080}
                priority
                className="decayHero"
            />



            <div className='pageContent'>
                <div className='pageTitle'>
                    <h2 className="mb4">The Fecundity of Decay: A Pilgrimage Towards Selfhood</h2>
                </div>
                <div className='mb3'>
                    <p className='retreatDates'>Normandy Retreats: April 16-20 & September 24-28, 2026</p>
                    
                    <div className=" mb5 pt5 marcellus italic">
                        <p>Light, dark, light again...</p>
                        <p>Life, death, life again.</p>
                        <p>Sky, ground, sky.</p>
                        <p>Day, night, day again.</p>
                        <p>Rise, fall, rise.</p>
                    </div>
                    <p className="mb3">We are so excited for you to join us.</p>
                   
                    <div className="buttons mt3">
                        <a className="retreatButton" href="https://book.stripe.com/9B65kvajhbTq2x595i5c40a">April Retreat: 2,000 EUR</a>
                        <a className="retreatButton" href="https://book.stripe.com/fZu00b9fd2iQfjRgxK5c408">September Retreat: 2,000 EUR</a>
                        <a className="retreatButton" href="https://book.stripe.com/8x25kvcrp4qY5Jh2GU5c409">April & September: 4,000 EUR</a>
                    </div>
                </div>
            </div>
        </div>
    );
}