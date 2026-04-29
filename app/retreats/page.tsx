import Link from 'next/link';

export default function RetreatPage() {
    return (
        <div className='page evergreen'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h1>Retreats in Normandy</h1>
                </div>
                <div className='margin-a'>
                    <p className='mb6'>Our retreats are designed as living workshops where participants engage with nature's regenerative wisdom. Whether nestled next to our biointensive garden in the landscapes of Normandy, the vibrant energy of Paris, or through our online gatherings, each retreat creates space for deep transformation through the cyclical rhythms that govern all living systems.</p>
                    <p className='bold mb3'>Upcoming Retreats</p>

                    <p className='mb3'>We don’t have any retreats scheduled at the moment. Join our mailing list or check back soon.</p>
                    <Link href="/" className="subscribeLink"><p>Subscribe</p></Link>
                    {/* <Link href="/retreats/fecundity-of-decay">
                            <p className='retreatDates'>Online Circle: Jan - Dec 2026</p>
                            <p className='retreatDates'>In Person: April 16-20 & September 24-28</p>
                            <p className='retreatTitle'>The Fecundity of Decay: A Yearlong Pilgrimage Towards Selfhood</p>
                            <p className='retreatSubTitle italic'>Honoring Nature’s Rhythms and Your Own</p>
                            <p><Link href="/retreats/fecundity-of-decay" className="subscribeLink">
                                Discover
                            </Link>
                            </p>
                        </Link> */}


                </div>
            </div>
        </div>
    );
}