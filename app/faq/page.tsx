import Link from 'next/link';
import '../styles/page.css'

export default function FaqPage() {
    return (
        <div className='page evergreen'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h1>FAQ</h1>
                </div>
                <div className='margin-a'>
                    <p>
                        {' '}
                        <Link href="/contact" className="subscribeLink">
                            Contact us
                        </Link>{' '}
                        if you have a question that isn't answered below.

                    </p>
                    <div className='mv5'>
                        <p className="mt3 mb1 bold">
                            Is accomadation provided for Normandy retreats?
                        </p>
                        <p>It varies for each retreat, but generally yes.</p>
                        <p className="mt3 mb1 bold">
                            Do I need any background or knowledge to attend?
                        </p>
                        <p>Not at all. Workshops will be accessible to everyone. Like the biodiversity required in soil, we will all benefit from diverse participants.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}