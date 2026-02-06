import Link from "next/link";

export default function RetreatPage() {


    return (
        <div className='page bg-graybrown'>

            <div className='pageContent checkout'>
                <div className='pageTitle'>
                    <h2 className="mb4">The Fecundity of Decay: A Pilgrimage Towards Selfhood</h2>
                </div>
                <div className='mb3'>
                    <p className='dates'>April 16-20, 2026</p>
                    <p className='dates'>September 20-24, 2026</p>
                    <p className='dates mb3'>Normandy, France</p>
                    <p className='dates'>Cost: 2000 Euro</p>
                    {/* <div className=" mb5 pt5 marcellus italic">
                        <p>Light, dark, light again...</p>
                        <p>Life, death, life again.</p>
                        <p>Sky, ground, sky.</p>
                        <p>Day, night, day again.</p>
                        <p>Rise, fall, rise.</p>
                    </div> */}
                    
                    <div className="buttons dates pt5">
                        <a className="retreatButton" href="https://book.stripe.com/9B65kvajhbTq2x595i5c40a">Book April 16-20</a>
                        <a className="retreatButton" href="https://book.stripe.com/fZu00b9fd2iQfjRgxK5c408">Book September 24-28</a>
                    </div>

                    <p className="mb4 pt5 dates">We are so excited for you to join us. Please <a href="mailto:info@upschool.org" className="underline">email us</a> with any questions.</p>

                </div>
            </div>
        </div>
    );
}