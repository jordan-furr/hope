import '../styles/page.css'
import ContactSubscribe from '../components/contact-subscribe';

export default function ContactPage() {
    return (
        <div className='page evergreen'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h1>Get in Touch</h1>
                </div>
                <div className='mb6'>
                    <p>Please write to us at {' '}
                        <a href="mailto:info@upschool.org" target='_' className="subscribeLink">
                            info@upschool.org
                        </a>{' '}</p>
                </div>
                <div>
                    <p className='bold mb3 glacial'>Stay connected</p>
                     <ContactSubscribe />
                </div>
               
                
            </div>
        </div>
    );
}