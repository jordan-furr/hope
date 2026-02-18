import Link from "next/link";

export default function RetreatPage() {


    return (
        <div className='page bg-graybrown'>

            <div className='pageContent checkout'>
                <div className='pageTitle'>
                    <h2 className="mb5">The Fecundity of Decay: A Pilgrimage Towards Selfhood</h2>
                </div>
                <div className='mb3'>
                    <p className='dates mb1'>More info coming soon...</p>
                    {/* <div className=" mb5 pt5 marcellus italic">
                        <p>Light, dark, light again...</p>
                        <p>Life, death, life again.</p>
                        <p>Sky, ground, sky.</p>
                        <p>Day, night, day again.</p>
                        <p>Rise, fall, rise.</p>
                    </div> */}
                    
                    {/* <div className="buttons dates pt5">
                        <a className="retreatButton" href="https://book.stripe.com/9B65kvajhbTq2x595i5c40a">Book April 16-20</a>
                        <a className="retreatButton" href="https://book.stripe.com/fZu00b9fd2iQfjRgxK5c408">Book September 24-28</a>
                    </div> */}

                    <p className="mb4 pt5 dates"><a href="/" className="underline">Subscribe</a> to our newsletter or <a href="mailto:info@upschool.org" className="underline">email us</a> with any questions.</p>

                </div>
            </div>
        </div>
    );
}