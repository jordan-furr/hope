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
                    <h2 className="mb3">The Fecundity of Decay: A Yearlong Pilgrimage Towards Selfhood</h2>
                </div>
                <div className='mb3'>
                    <p className=''>Online Compost Circle: Jan - Dec 2026</p>
                    <p className='retreatDates'>Normandy Retreats: April 16-20 & September 24-28</p>
                    
                    <div className=" mb5 pt5 marcellus italic">
                        <p>Light, dark, light again...</p>
                        <p>Life, death, life again.</p>
                        <p>Sky, ground, sky.</p>
                        <p>Day, night, day again.</p>
                        <p>Rise, fall, rise.</p>
                    </div>
                    <p className="mb3">We are so excited for you to join us. All retreats include joining the Compost Circle. Reserve your spot:</p>
                   
                    <div className="buttons mt3">
                        <a className="retreatButton" href="https://book.stripe.com/eVq3cn0IH5v2fjRchu5c407">Compost Circle: 480 EUR</a>
                        <a className="retreatButton" href="https://book.stripe.com/28E8wHbnl9Li4Fdchu5c406">April Retreat: 2,240 EUR</a>
                        <a className="retreatButton" href="https://book.stripe.com/8x26oz1ML4qY9Zx2GU5c404">September Retreat: 2,240 EUR</a>
                        <a className="retreatButton" href="https://book.stripe.com/5kQ7sDdvte1y3B9ftG5c405">April & September: 4,240 EUR</a>
                    </div>

                    <p className="mb4 pt5">Attend our <a href="https://forms.gle/9AkEreCKr4BBH4Nv8" className="underline" target="_">live presentation on November 19th</a> to learn more and ask questions.</p>
                   
                </div>
            </div>
        </div>
    );
}