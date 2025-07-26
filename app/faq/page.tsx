import Link from 'next/link';
import '../styles/page.css'

export default function FaqPage() {
    return (
        <div className='page'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h1>FAQ</h1>
                </div>
                <div className='mt3 margin-a'>
                    <p>
                        Potential questions about our retreats, philosophy, and the journey of regenerative transformation. {' '}
                        <Link href="/contact" className="subscribeLink">
                            Contact us
                        </Link>{' '}
                        if you have a question about isn't answered below.

                    </p>
                    <h3>Questions</h3>
                    <p className="mt3 mb1 bold">
                        Is accomadation provided for Normandy retreats? 
                    </p>
                    <p>It varies for each retreat, but generally yes.</p>
                    <p className="mt3 mb1 bold">
                        Do I need any background or knowledge to attend? 
                    </p>
                    <p>Nope. Workshops will be accessible to everyone. Like the biodiversity required in soil, we will all benefit from diverse participants.</p>
                </div>
            </div>
        </div>
    );
}