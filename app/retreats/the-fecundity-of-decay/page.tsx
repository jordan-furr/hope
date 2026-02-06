
'use client';
import Image from "next/image";
export default function RetreatPage() {

    return (
        <div className='page fecundity bg-graybrown'>

            <div className="hero-container">
                <Image
                    src="/aizier_yard.jpg"
                    alt="The Fecundity of Decay"
                    width={1920}
                    height={1080}
                    priority
                    className="hero-image"
                />
                <div className="logoCont">
                    <Image
                        src="/fecundity-logo.png"
                        alt="Logo"
                        width={400}
                        height={400}
                        className="fe-logo"
                    />
                </div>
                <div className="scroll-indicator">Scroll</div>
            </div>

            <div className="flex-row mobile-col">
                {/* <div className="w-35 mobile-full pv6 pl6">
                    <Image
                        src="/bea.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={80}
                        className="halfPhoto"
                    />
                </div> */}
                <div className="w-100 halfText text-center">
                    <div className="webSpace "></div>
                    <h2 className="mb4">Pilgrimage = a devotional journey</h2>
                    <h2>Selfhood = knowing my place in the whole</h2>
                    <p className="mb6 w-70 margin-a mobile-full">Following Nature’s Regenerative wisdom, we will gather to remember, learn, and trust the truest cycle: <b>we are nature.</b></p>

                    <div className="margin-a mb5">
                        <a className="retreatButton" href="/retreats/the-fecundity-of-decay/checkout">Reserve my place</a>
                    </div>
                </div>
            </div>
            <div className="w-100 twigs">
                <h2 className="twigs_content mb4">Rot</h2>
                <h2 className="twigs_content mb4">Rest</h2>
                <h2 className="twigs_content mb0">Rise</h2>
            </div>
            <div className="bg-cream fullText text-center">
                <h2 className="margin-a mt5 mb4">In the garden, nothing is wasted</h2>
                <p className="mb2">Wintering enables Spring. Dormancy precedes growth.</p>
                {/* <p className="mb5">We don’t scold the Earth in winter, her soil frozen and trees stripped bare. So why do we turn against ourselves when we feel down, dark, depleted? As a part of nature we too are meant to live in cycles, needing stillness, and to lie fallow. We are not here to be endlessly productive, relentlessly blooming. </p>
                <p className="mobile-smaller"><b>Wintering enables Spring. Dormancy precedes growth.</b></p>
                <p className="mobile-smaller"><b>Nothing is wrong with you. You are not broken.</b></p> */}
                <div className="photo-grid">
                    <Image
                        src="/rot.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={70}
                        className="gridphoto"
                    />
                    <Image
                        src="/working.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={70}
                        className="gridphoto"
                    />
                    <Image
                        src="/beds.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={70}
                        className="gridphoto hideMobile"
                    />
                    <Image
                        src="/beds1.png"
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
                        className="gridphoto"
                    />
                </div>

            </div>
            <div className="fullText cream">
                <div className="pv3 ph6 mobile-p0">
                    <h4 className="mt5">This is for you if...</h4>

                    <ul className="circleList">
                        <li>
                            You’re craving a <strong>deeper connection to the Earth, your body, your intuition</strong>
                        </li>
                        <li>
                            You are looking for guidance in practical frameworks for <strong>intentional living</strong>
                        </li>
                        <li>
                            You are seeking <strong>solidarity to release the pressure to always bloom</strong>
                        </li>
                        <li>
                            You’re in a <strong>life transition</strong> and seeking clarity and soulful integration
                        </li>
                        <li>
                            You’re ready to <strong>meet yourself exactly where you are</strong>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="bg-cream fullText">
                <div className="pv3 ph6 guides mobile-p0">
                    <h2 className="mt5">Your Guides</h2>

                    <div className="flex-row space-between webPad align-center pt4 late-mobile-col ph6 mobile-p0">

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
                        <div className="w-33 mb6 late-mobile-hide">
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
                                src="/kirstenkallman.png"
                                alt="Retreat"
                                width={1620}
                                height={2025}
                                quality={80}
                            />
                            <a href="https://www.kirstenkallman.com/" target="_blank" className="underline"><p className="smaller">Kirsten Kallman</p></a>

                        </div>

                    </div>
                    <p className="mb3 pt3 ph6 mobile-p0">Led by author of <i>The Upside of Uncertainty</i> and biodynamic, biointensive gardener, Susannah Harmon Furr, and Health and Human Design Coach, Kirsten Kallman.</p>
                    <p className="ph6 mobile-p0">Our journey together will be guided by several frameworks: <b>Human Design, Gene Keys, The Upside of Uncertainty,</b> and the wisdom of <b>Regenerative Design.</b></p>

                </div>

            </div>
            {/*
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
            */}

            <Image
                src="/cottage.jpg"
                alt="Retreat Greenhouse"
                width={1920}
                height={1080}
                className="retreatHero"
            />
            <div className="fullText">
                <div className="pv3 ph6 mobile-p0">

                    <p className="mb4 ">Welcome to the Hope Accelerator– a biodynamic garden and thatched cottage nestled in a tiny Normandy village along the banks of the Seine.</p>
                    <p className="mb5 ">Dig deep to compost old patterns, stories, and fears that no longer serve you to discover your true nature.</p>

                    <h4>Includes</h4>
                    <ul className="mb4 includes">
                        <li>4 nights in Normandy cottage, private rooms (discount if shared)</li>
                        <li>1:1 online Human Design/Gene Keys session with Kirsten</li>
                        <li>1 daily seasonal, gastronomic meal, 1 daily communal meal, snacks, drinks</li>
                        <li>Field trips to two farmers markets and seaside village of Honfleur</li>
                        <li>Daily lessons navigating how to compost in your life: awareness, acceptance, agency, affection</li>
                        <li>Nature walks, e-bikes, Hot Tub, Pool</li>
                        <li>Transfer to & from Paris</li>
                    </ul>
                    <p className="mb6">Price : 2000 Euro</p>
                    <p className="mb6 infoHighlight">In your 1:1 online session with Kirsten, you’ll explore the living blueprint of who you are through your Human Design chart — a map revealing how your body, as part of Nature, creates your unique way of being.</p>
                    <p className="mb5">Join us for this soulful and restorative experience. <u>Women only this year.</u></p>

                    <div className="flex-col mb5">
                        <a className="retreatButton" href="/retreats/the-fecundity-of-decay/checkout">Reserve April or September</a>
                    </div>
                </div>

            </div>


            {/* <div className="fullText">
                <h2>Each day, we’ll share one meal at a beloved local establishment.</h2>
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
            </div> */}


            <div className="flex-row mobile-col bg-cream row-reverse">
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
                <div className="w-50 mobile-full hideMobile">
                    <Image
                        src="/hose.png"
                        alt="Retreat"
                        width={1620}
                        height={2025}
                        quality={80}
                        className="halfPhoto"
                    />
                </div>


            </div>
            <div className="w-100 halfText text-center bg-cream">
                <div className="webSpace "></div>
                <p className="bigQuote mb3">"The word fecundity, which sounds like drum talk when said aloud, means more than fertile, it means pregnable, the way soil is pregnable. Fecundity is the basal matter in which seeds are laid, prepared, warmed, incubated, saved...She is the muck that makes ideas happen.”  </p>
                <p className="smaller mb5">Clarissa Pinkola Estes, Women Who Run With Wolves</p>
            </div>




            <div className="flex-row mobile-col row-reverse align-center cream">
                <div className="w-50 halfText">
                    <h2>This is not a retreat to escape your life, but to return to it more fully.</h2>
                   <p>April 16-20 or</p>
                   <p className="mb6">September 24-28</p>
                    <div className="mb5">
                        <a className="retreatButton cream" href="/contact">Ask a question</a>
                    </div>
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

        </div>
    );
}