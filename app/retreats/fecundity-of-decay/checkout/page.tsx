import Link from "next/link";

export default function RetreatPage() {


    return (
        <div className='page'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <p className='retreatTitle'>The Fecundity of Decay: A Yearlong Pilgrimage Towards Selfhood</p>
                </div>
                <div className='mv3'>
                    <p className='retreatDates'>Online Circle: Jan - Dec 2026</p>
                    <p className='retreatDates'>In Person: April 16-20 & September 24-28</p>
                    <p className='retreatSubTitle italic'>Honoring Nature’s Rhythms and Your Own</p>

                    <div className="bold mb4 mt2">
                        <p>Light, dark, light again...</p>
                        <p>Life, death, life again.</p>
                        <p>Sky, ground, sky.</p>
                        <p>Day, night, day again.</p>
                        <p>Rise, fall, rise.</p>
                    </div>
                    <p className="mb4">We are so excited for you to join us. Reserve your spot:</p>
                    <Link href="https://forms.gle/9AkEreCKr4BBH4Nv8" className="subscribeLink" target="_">
                        Live Info Presentation: November 19</Link>
                    <div className="buttons mt3">
                        <a className="retreatButton" href="https://book.stripe.com/00w5kv9fde1y3B90yM5c400">Online Circle: $360</a>
                        <a className="retreatButton" href="https://book.stripe.com/00wdR18b99Li2x5epC5c402">April Retreat, Online Circle: $2,160</a>
                        <a className="retreatButton" href="https://book.stripe.com/4gM3cn2QP6z62x54P25c401">September Retreat, Online Circle: $2,160</a>
                        <a className="retreatButton" href="https://book.stripe.com/3cIfZ9bnl9Li1t1dly5c403">April & September Retreats, Online Circle: $3,960</a>
                    </div>
                </div>
            </div>
        </div>
    );
}