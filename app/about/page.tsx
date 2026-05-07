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
                    <p className='bold mb3 glacial'>Who We Are</p>
                    <p className='mb5'>
                        Founded by Susannah Harmon Furr, the Hope Acclerator is the grounding soil of {' '}
                        <a href="https://upschool.org/" target='_' className="subscribeLink">
                            UP School&apos;s
                        </a>{' '} vision to uplift the world.
                    </p>
                    <p className='mb5'>Susannah is an author, designer, and gardener who believes in the power of active hope and the magic of regenerative ecosystems. As a teacher and workshop facilitator for living in uncertainty, Susannah help individuals find more comfort and confidence in the unknown: to find a broader sense of possibility, a more authentic “infinite game” approach to life, and to trust in the aplomb of their unique talents and innate curiosity.</p>
                    <p className='mb5'>A hope accelerator can be any person, place, or thing that distills this reminder: that we are all inherently capable of great change and important work. Our Hope Accelerator in Normandy is a place created to celebrate and share active hope in the earth and in each other. Body, heart, and spirit are invited to step forward and be nourished, giving our overactive, efficiency-oriented minds a rest. Learning in this integrated whole self way brings a sense of homecoming, empowerment, and joy.</p>
                </div>
            </div>
        </div>
    );
}