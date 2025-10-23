
'use client';

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
                    <div className="buttons">
                        <button className="retreatButton" onClick={handlePDFClick}>View Retreat Booklet</button>
                        <a className="retreatButton" href="/retreats/fecundity-of-decay/checkout">Save Your Spot</a>
                    </div>

                    <div className="bold mb4 mt3">
                        <p>Light, dark, light again...</p>
                        <p>Life, death, life again.</p>
                        <p>Sky, ground, sky.</p>
                        <p>Day, night, day again.</p>
                        <p>Rise, fall, rise.</p>
                    </div>
                    <div className="paragraphGap">
                        <p>Nothing is wrong with you. You are not broken.</p>
                        <p>We don’t scold the Earth for being cold in winter, her soil frozen and trees stripped bare. We don’t expect a picnic on a winter day. So why do we turn against ourselves when we are still, barren, or quietly turning inward? As a part of nature we too, are meant to live in cycles. We are not here to be endlessly productive, relentlessly blooming. <b>Wintering enables Spring. Dormancy precedes growth.</b></p>
                        <p>This spring, we invite you to <b>Normandy,</b> to the gentle, fertile land where soil and soul can sync up again. Through carefully woven days of connection, reflection, and pleasure, we’ll explore what it means to live as part of nature, not apart from it. </p>
                        <p><b>This is not a retreat to escape your life, but to return to it more fully.</b></p>
                        <p className="retreatSubTitle mt3">The Rhythm of the Days</p>
                        <p>Our retreat is rooted in the <b>daily dance between nourishment and exploration,</b> solitude and sisterhood, learning and embodiment. Each day, we’ll share one consciously curated external meal at beloved local establishments like <b>Le Manoir de Rétival,</b> with its deeply sensory bistro experience, or a rustic lunch in the serene abbey village of <b>Saint-Wandrille,</b> perhaps with a stop at <b>Skáli</b> for modern Nordic flavors. These meals will celebrate seasonality, local produce, and the quiet luxury of true nourishment.</p>
                        <p>Additionally, we’ll slow down and root into the ritual of preparing food together, guided by <b>Health Coach Kirsten Kallman.</b> After visiting Normandy’s farmers’ markets such as <b>Pont-Audemer</b> on Thursday or <b>Honfleur</b> on Wednesday or Saturday, we’ll return to the kitchen to cook with the season’s freshest ingredients or harvest directly from the kitchen garden. The act of cooking becomes a conversation with the land and a meditation on our own inner seasons.</p>
                        <p className="retreatSubTitle mt3">Exploration of the Inner Seasons</p>
                        <p>Each of us has a <b>personal ecosystem,</b> with inner winters and springs, summers and autumns - sometimes all in the same week. Together, we’ll explore the <b>life-death-life</b> cycle that animates all of nature and our own spiritual journey.</p>
                        <p>Through <b>circle work, partner inquiry, and guided workshops</b>, we’ll use the frameworks of <b>Human Design and the Gene Keys</b> to deepen our understanding of who we are, how we’re designed to move through life, and what’s possible when we stop resisting our natural cycles and begin to trust them instead. We’ll explore how our shadows hold wisdom, often veiling our creative potential, and how unity consciousness isn’t a distant concept but a lived, embodied state we can touch.</p>
                        <p>We'll remember that <b>we are nature-</b> chaotic, beautiful, and evolving. In the garden, nothing is wasted. Even blight becomes compost. The dark isn’t a mistake but a doorway.</p>
                        <p className="retreatSubTitle mt3">Special Experiences & Guests</p>
                        <p>This retreat will include offerings to nourish body, spirit, and creative expression:</p>
                        <ul>
                            <li><b>Cooking + crepe-making workshop with Sara Zin</b>, author of <i>The Starving Artist’s Cookbook</i></li>
                            <li><b>Sound bath with George Lewis</b>, weaving sound and spirit into vibrational restoration</li>
                            <li><b>Poetry & story workshop with Brad Modlin,</b> exploring the truth-telling magic of the written and spoken word</li>
                            <li>Optional teachings from <b>Ezra Furr</b>, exploring shadow through a Jungian art lens</li>
                            <li>Gentle <b>yoga and movement</b>, woven through our days</li>
                            <li>Optional couples work with <b>Annemarie & Tom</b>, for those attending in partnership</li>
                        </ul>
                        <p className="pt4">For those wanting to extend the journey, <b>optional add-ons</b> include a pilgrimage to <b>Mont Saint-Michel</b>, the tides pulling like breath around this sacred mount, or a coastal excursion to <b>Saint-Malo</b>, the walled city by the sea.</p>
                        <p className="retreatSubTitle mt3">This Is For You If...</p>
                        <ul>
                            <li>You’re craving a <b>deeper connection to your body, your intuition, and the Earth</b></li>
                            <li>You’re in a <b>life transition</b> and seeking clarity and soulful integration</li>
                            <li>You want to <b>release the pressure</b> to always be in bloom and honor your inner seasons</li>
                            <li>You long for sacred connection, slow food, circle wisdom, and creative expression</li>
                            <li>You’re ready to <b>meet yourself exactly where you are</b>, without trying to “fix” anything</li>
                        </ul>
                        <p className="retreatSubTitle mt3">Final Words</p>
                        <p>When we resist our shadows, they linger. When we turn toward them even just ever so slightly, they start to dance. Your light and your dark are both welcome here. You are not too much, not too late, not lost.</p>
                        <p>You are soil and soul.</p>
                        <p>And this spring, we return to the ground of our being.</p>
                    </div>
                </div>
                <a className="retreatButton" href="/retreats/fecundity-of-decay/checkout">Register Now</a>
            </div>
        </div>
    );
}