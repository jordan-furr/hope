import Link from 'next/link';

export default function RetreatPage() {
    return (
        <div className='page'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h1>Retreats</h1>
                </div>
                <div className='mt3 margin-a'>
                    <p>Our retreats are designed as living workshops where participants engage with nature's regenerative wisdom. Whether nestled next to our biointensive garden in the landscapes of Normandy, the vibrant energy of Paris, or through our online gatherings, each retreat creates space for deep transformation through the cyclical rhythms that govern all living systems.</p>
                    <h3>Upcoming</h3>
                    <div className='retreat'>
                        <p className='retreatDates'>April 16-20 & September 24-28, 2026</p>
                        <p className='retreatTitle'>The Fecundity of Decay: A Yearlong Pilgrimage Towards Selfhood</p>
                        <p className='retreatSubTitle'>A 4-Night Spring Retreat Honoring Nature’s Rhythms and Your Own</p>
                         <p><Link href="/retreats/fecundity-of-decay" className="subscribeLink" target='_'>
                            Discover
                        </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}