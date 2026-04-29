import '../styles/page.css'
import SubscribeForm from '../components/subscribe-form';

export default function ContactPage() {
    return (
        <div className='page evergreen'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h1>Get in Touch</h1>
                </div>
                <div>
                    <p>Please write to us at {' '}
                        <a href="mailto:info@upschool.org" target='_' className="subscribeLink">
                            info@upschool.org
                        </a>{' '}</p>
                    
                </div>
            </div>
        </div>
    );
}