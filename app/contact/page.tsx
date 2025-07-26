import '../styles/page.css'
import SubscribeForm from '../components/subscribe-form';

export default function ContactPage() {
    return (
        <div className='page'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h1>Get in Touch</h1>
                </div>
                <div className='mt3'>
                    <p>Please email us at info@upschool.org</p>
                </div>
            </div>
        </div>
    );
}