
export default function RetreatPage() {


    const handlePDFClick = () => {
        window.open('/Fecundity-flyer.pdf', '_blank')
    }

    return (
        <div className='page'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <p className='retreatTitle'>The Fecundity of Decay: A Yearlong Pilgrimage Towards Selfhood</p>
                </div>
                <div className='mv3'>
                    <p className='retreatDates'>April 16-20 & September 24-28, 2026</p>
                    <p className='retreatSubTitle'>A 4-Night Spring Retreat Honoring Nature’s Rhythms and Your Own</p>
                    <div className="bold mb4 mt3">
                        <p>Light, dark, light again...</p>
                        <p>Life, death, life again.</p>
                        <p>Sky, ground, sky.</p>
                        <p>Day, night, day again.</p>
                        <p>Rise, fall, rise.</p>
                    </div>
                    <p className="mb4">We are so excited for you to join us. Reserve your spot:</p>

                    <div className="buttons">
                        <a className="retreatButton" href="https://buy.stripe.com/test_00w5kv9fde1y3B90yM5c400">April & September Retreats, Online Circle: $4</a>
                        <a className="retreatButton" href="https://buy.stripe.com/test_00wdR18b99Li2x5epC5c402">April Retreat, Online Circle: $2</a>
                        <a className="retreatButton" href="https://buy.stripe.com/test_4gM3cn2QP6z62x54P25c401">September Retreat, Online Circle: $2</a>
                        <a className="retreatButton" href="https://buy.stripe.com/test_3cIfZ9bnl9Li1t1dly5c403">Online Circle: $1</a>
                    </div>
                </div>
            </div>
        </div>
    );
}