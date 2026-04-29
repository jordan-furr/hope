import '../styles/page.css'

export default function AboutPage() {
    return (
        <div className='page evergreen'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h1>About Hope</h1>
                </div>
                <div className='margin-a'>
                    <p className='mb3'>The Hope Accelerator emerged from a simple recognition: that nature's biodynamic systems hold profound insights for healing ourselves and our world.</p>
                    <p className='mb6'>We are a retreat center rooted in place—primarily in Normandy, France—where we explore how the regenerative principles that restore ecosystems can restore human potential.</p>
                    <p className='bold mb3'>Who We Are</p>
                    <p className='mb5'>
                       Founded by Susannah Harmon Furr, the Hope Acclerator is the grounding soil of {' '}
                        <a href="https://upschool.org/" target='_' className="subscribeLink">
                            UP School&apos;s
                        </a>{' '} vision to uplift the world.
                    </p>
                </div>
            </div>
        </div>
    );
}