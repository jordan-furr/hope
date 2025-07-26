import Link from 'next/link';
import '../styles/page.css'

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
                    <h3>Register for upcoming retreats</h3>
                    <p className="mv3">
                        Currently no open retreats.{' '}
                        <Link href="/contact" className="subscribeLink">
                            Subscribe
                        </Link>{' '}
                        to be notified.
                    </p>
                </div>
            </div>
        </div>
    );
}