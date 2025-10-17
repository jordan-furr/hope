import '../styles/page.css'

export default function AboutPage() {
    return (
        <div className='page'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    Our Story
                </div>
                <div className='mt3 margin-a'>
                    <p>Hope Accelerator emerged from a simple recognition: that nature's biodynamic systems hold profound insights for healing ourselves and our world. We are a retreat center rooted in place—primarily in Normandy, France—where we explore how the regenerative principles that restore ecosystems can restore human potential.</p>
                    <h3>Who We Are</h3>
                    <p className="mv3">Founder: Susannah Harmon Furr</p>
                    <p className='mv3'>
                       The Hope Acclerator is one of several life exploration projects run by Susannah and Nathan Robert Furr at {' '}
                        <a href="https://upschool.org/" target='_' className="subscribeLink">
                            UP School.
                        </a>{' '}
                    </p>
                </div>
            </div>
        </div>
    );
}