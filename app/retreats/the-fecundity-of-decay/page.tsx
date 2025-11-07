
'use client';
import Image from "next/image";
export default function RetreatPage() {

    return (
        <div className='page bg-pink'>
            <Image
                src="/greenhouse-hero.png"
                alt="Retreat Greenhouse"
                width={1920}
                height={1080}
                priority
                className="decayHero"
            />
            <div className="flex-row mobile-col">
                <div className="w-50 halfText">
                    <div className="webSpace"></div>
                    <h2>This January, we return to the ground of our being.</h2>
                    <p className="mb5">Join a global constellation of new friends ready to follow the rhythms of Nature.</p>
                    <p className="mb3"><b>*12 online themed compost circles</b> following Nature’s Regenerative wisdom</p>
                    <p className="mb5"><b>*Spring or Fall retreat in Normandy</b> (optional, limited spots)</p>
                     <div className="flex-col">
                        <a className="retreatButton" href="/retreats/the-fecundity-of-decay/checkout"><p>Sign up to join</p></a>
                        <a className="retreatButton" href="https://forms.gle/9AkEreCKr4BBH4Nv8" target="_"><p>Info Session: November 19</p></a>
                    </div>
                </div>
                <div className="w-50 mobile-full">
                    <Image
                        src="/dresser.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={80}
                        className="halfPhoto"
                    />
                </div>
            </div>
            <div className="bg-cream fullText text-center">
                <h2>We'll remember that we are nature–chaotic, beautiful, and evolving. In the garden, nothing is wasted.</h2>
                <p>We don’t scold the Earth in winter, her soil frozen and trees stripped bare. So why do we turn against ourselves when we feel down, dark, depleted? As a part of nature we too are meant to live in cycles, needing stillness, and to lie fallow. We are not here to be endlessly productive, relentlessly blooming. </p>
                <div className="photo-grid">
                    <Image
                        src="/front.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={70}
                        className="gridphoto"
                    />
                    <Image
                        src="/wheelbarrow.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={70}
                        className="gridphoto"
                    />
                    <Image
                        src="/tomato.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={70}
                        className="gridphoto"
                    />
                    <Image
                        src="/josie.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={70}
                        className="gridphoto"
                    />
                    <Image
                        src="/harvest.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={70}
                        className="gridphoto hideMobile"
                    />
                </div>
                <p className="mobile-smaller"><b>Wintering enables Spring. Dormancy precedes growth.</b></p>
                <p className="mobile-smaller"><b>Nothing is wrong with you. You are not broken.</b></p>
            </div>
            <div className="fullText">
                <h4>This is for you if...</h4>
                <div className="paragraphGap pl4"><p>*You’re craving a <b>deeper connection to the Earth, your body, your intuition</b></p>
                    <p>*You are looking for guidance in practical frameworks for <b>intentional living</b></p>
                    <p>*You are seeking <b>solidarity to release the pressure to always bloom</b></p>
                    <p>*You’re in a <b>life transition</b> and seeking clarity and soulful integration</p>
                    <p>*You’re ready to <b>meet yourself exactly where you are</b></p></div>
            </div>
            <div className="bg-cream fullText">
                <Image
                    src="/circle.png"
                    alt="Retreat"
                    width={1620}
                    height={2025}
                    quality={80}
                    className="web-hide mb3 w-90 margin-a"
                />
                <div className="flex-row space-between align-center pt4 late-mobile-col">
                    <div className="w-25 text-center late-mobile-half mb6">
                        <Image
                            src="/kirstenkallman.png"
                            alt="Retreat"
                            width={1620}
                            height={2025}
                            quality={80}
                        />
                        <a href="https://www.kirstenkallman.com/" target="_blank" className="underline"><p className="smaller">Kirsten Kallman</p></a>
                        
                    </div>
                    <div className="w-35 mb6 late-mobile-hide">
                        <Image
                            src="/circle.png"
                            alt="Retreat"
                            width={1620}
                            height={2025}
                            quality={80}
                        />
                    </div>
                    <div className="w-25 text-center late-mobile-half mb6">
                        <Image
                            src="/susannahfurr.png"
                            alt="Retreat"
                            width={1620}
                            height={2025}
                            quality={80}
                        />
                        <p className="smaller">Susannah Furr</p>
                    </div>
                </div>
                <p className="mb3"><b>Led by Kirsten Kallman </b>(Health and Human Design Coach) and <b>Susannah Harmon Furr</b> (author of <i>The Upside of Uncertainty</i> and biodynamic, biointensive gardener), we’ll embark on a <b>yearlong journey of regenerative wisdom in action.</b></p>
                <p>Our journey together will be guided by several frameworks: <b>Human Design, Gene Keys, The Upside of Uncertainty Tools,</b> and the wisdom of <b>Regenerative Design.</b></p>
            </div>
            <div className="flex-row mobile-col row-reverse">
                <div className="w-50 halfText">
                    <div className="webSpace"></div>
                    <h2 className="mb3">Yearlong Pilgrimage</h2>
                    <h5>Open to all, online program</h5>
                    <p className="mb5">Every month, a curated letter filled with insights and resources will land in your inbox to guide you to more fully embody the current seasonal themes of your ecosystem.</p>
                    <p className="mb3">The third Wednesday of every month (9 PST/12 EST/18 CET) we will gather online for 60 minute compost circles, starting with a presentation to further explore the themes of that month before separating into triad breakout sessions made up of two fellow pilgrims. </p>
                </div>
                <div className="w-50 mobile-full">
                    <Image
                        src="/head.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={80}
                        className="halfPhoto"
                    />
                </div>
            </div>
            <div className="flex-row mobile-col">
                <div className="w-50 mobile-full">
                    <Image
                        src="/strawberries.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={80}
                        className="halfPhoto"
                    />
                </div>
                <div className="w-50 halfText">
                    <div className="webSpace"></div>
                    <h2>January - December</h2>
                    <p className="mb6">We will hold space together, weaving a web of deeper sharing: fecundity and decay, beginnings and endings, all is welcome to be witnessed. Your light and your dark. You are not too much, not too late, not lost. You are soil and soul.</p>
                    <p className="mb3">Price: 480 Euro</p>
                    <div className="flex-col">
                        <a className="retreatButton" href="/retreats/the-fecundity-of-decay/checkout"><p>Sign up to join</p></a>
                        <a className="retreatButton" href="https://forms.gle/9AkEreCKr4BBH4Nv8" target="_"><p>Info Session: November 19</p></a>
                    </div>
                </div>
            </div>
            <Image
                src="/aizier_quote.png"
                alt="Retreat Greenhouse"
                width={1920}
                height={1080}
                className="retreatHero"
            />
            <div className="bg-cream fullText">
                <h2 className="mb2">In Person Retreats </h2>
                <h5 className="mb5">Women only this year, yearlong pilgrimage included</h5>
                <h5 className="mb2">April 16-20</h5>
                <h5>September 24-28</h5>
                <p>We will gather at the Hope Accelerator– a biodynamic garden and thatched cottage nestled in a tiny Normandy village along the banks of the Seine river–
                    where soul and soil can sync up again.</p>
            </div>
            <div className="flex-row mobile-col row-reverse">
                <div className="w-50 halfText">
                    <div className="webSpace"></div>
                    <h2>Rhythm of the Days</h2>
                    <p className="mb5">Through carefully woven days of connection, reflection, work in the soil, and the pleasure of beautiful nourishing food, we’ll explore what it means to live as part of nature, not apart from it. </p>
                    <p className="mb3">Following the seasonal cues, our days will be rooted in the dance between nourishment and exploration, solitude and sisterhood, learning and embodiment, rest and labor. </p>
                </div>
                <div className="w-50 mobile-full">
                    <Image
                        src="/window.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={80}
                        className="halfPhoto"
                    />
                </div>
            </div>
            <div className="flex-row mobile-col row-reverse">
                <div className="w-50 mobile-full">
                    <Image
                        src="/beds.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={80}
                        className="halfPhoto"
                    />
                </div>
                <div className="w-50 halfText bg-cream">
                    <div className="webSpace"></div>
                    <h2>Frameworks</h2>
                    <p className="mb5">In addition to hands-on workshops and experience with the magic of soil we’ll explore: </p>
                    <p className="mb3">*Human Design and the Gene Keys to deepen our understanding of who we are, how we’re designed to move through life, and what’s possible when we stop resisting our natural cycles and begin to trust them instead. </p>
                    <p>*How uncertainty is profoundly rich terrain for our wildest dreams and our possibilities are only ever as rich as our willingness to plant seeds on the darkest of nights.  </p>
                </div>
            </div>
            <div className="fullText">
                <h2>Each day, we’ll share one meal at beloved local establishments. These meals will celebrate the quiet luxury of real food prepared by earnest chefs.</h2>
                <p className="mb3">We’ll slow down and root into the ritual of preparing food together. After visiting Normandy’s farmers’ markets: Pont-Audemer and Honfleur.</p>
                <p>Returning to the kitchen we’ll cook with the season’s freshest ingredients or harvest directly from the kitchen garden. The act of cooking is always inviting us into conversation with the land and a reminder of our own inner seasons.</p>
                <div className="threePhoto">

                    <div >
                        <Image
                            src="/dining.png"
                            alt="Retreat"
                            width={1620}
                            height={2025}
                            quality={75}
                            className="gridphoto"
                        />
                    </div>
                    <div>
                        <Image
                            src="/pinktable.png"
                            alt="Retreat"
                            width={1620}
                            height={2025}
                            quality={75}
                            className="gridphoto"
                        />
                    </div>
                    <div >
                        <Image
                            src="/dinner-filter.png"
                            alt="Retreat"
                            width={1620}
                            height={2025}
                            quality={75}
                            className="gridphoto"
                        />
                    </div>

                </div>
            </div>
            <div className="bg-cream fullText">
                <h5>“We are the living links in a life force that moves and plays around and through us, binding the deepest soils with the farthest stars.” Alan Chadwick</h5>
                <p>Price : 2240 Euro</p>
                <p className="mb5">2000 retreat || 240 monthly compost circles (50% reduction)</p>
                <p className="mb2">INCLUDES</p>
                <ul className="mb5">
                    <li>4 nights of cozy comfort in Normandy cottage, private rooms
                        (discount available if shared occupancy)</li>
                    <li>1:1 online Human Design/Gene Keys session with Kirsten</li>
                    <li>1 daily seasonal, gastronomic meal, 1 daily communal meal</li>
                    <li>Transfer to~from Paris / Normandy</li>
                    <li>Field trips to two farmers markets and seaside village of Honfleur</li>
                    <li>Biointensive gardening tutorials and resources</li>
                    <li>Nature walks, e-bikes, hot tub</li>
                    <li>Snacks, drinks </li>
                </ul>
                <p className="mb5 infoHighlight">In your 1:1 online session with Kirsten, you’ll explore the living blueprint of who you are through your Human Design chart — a map revealing how your body, as part of Nature, creates your unique way of being. In cultivating this understanding, you will see that self-awareness is the soil from which self-acceptance grows, to then blossom into the self-love we all need to truly thrive. </p>
                <p className="mb5">Join us for this soulful and restorative experience.</p>
                <div className="flex-col">
                    <a className="retreatButton" href="/retreats/the-fecundity-of-decay/checkout"><p>Sign up to join</p></a>
                    <a className="retreatButton" href="https://forms.gle/9AkEreCKr4BBH4Nv8" target="_"><p>Info Session: November 19</p></a>
                </div>
            </div>
            <Image
                src="/cottage.jpg"
                alt="Retreat Greenhouse"
                width={1920}
                height={1080}
                className="decayHero"
            />
            <div className="flex-row mobile-col align-center bg-cream">
                <div className="w-50 halfText ">
                    <p className="bigQuote">No matter the current weather of your soul, all of your senses and your beating heart will experience a homecoming, balanced with deep rest, togetherness, and wonder.</p>
                </div>
                <div className="w-50 mobile-full">
                    <Image
                        src="/fire.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={80}
                        className="halfPhoto"
                    />
                </div>
            </div>
            <div className="fullText text-center">
                <h2>Regenerative systems don’t resist the decay, the drab, the done. </h2>
                <p className="mb6">Taking cues from the miracle of soil we’ll explore the life-death-life cycle that animates all of nature and our own body-soul journey. We'll remember that we are nature–chaotic, beautiful, and evolving. In the garden, nothing is wasted. Even blight becomes compost. There are no mistakes: our shadows hold wisdom often veiling our creative potential.</p>
                <Image
                    src="/angie.png"
                    alt="Retreat"
                    width={1620}
                    height={2025}
                    className="w-50 margin-a mb4 mobile-full"
                />
                <div className="flex-col align-center"> <a className="retreatButton" href="/retreats/the-fecundity-of-decay/checkout"><p>Join the pilgrimage</p></a></div>
            </div>
        </div>
    );
}