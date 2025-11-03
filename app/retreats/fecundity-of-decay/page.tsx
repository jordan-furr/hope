
'use client';
import Image from "next/image";
export default function RetreatPage() {

    return (
        <div className='page'>
            <Image
                src="/aizier_front.jpg"
                alt="Retreat Greenhouse"
                width={1920}
                height={1080}
                priority
                className="decayHero"
            />
            <div>
                <div className='pageContent'>
                    <p className='retreatTitle'>The Fecundity of Decay: A Yearlong Pilgrimage Towards Selfhood</p>
                    <p className='retreatSubTitle mb2'>A celebration of the soul, soil, and seasons</p>
                    <div className="infoBox mb4">
                        <div className="dates">
                            <p>Online Circle: Monthly, January-December 2026</p>
                            <p>In Person Retreats: April 16-20 and September 24-28</p>
                        </div>
                    </div>
                    <div className="flex-row space-between">
                        <div className="w-50">
                            <Image
                                src="/window.png"
                                alt=""
                                width={1620}
                                height={2025}
                                quality={80}
                                className="instaPhoto mb4"
                            />
                        </div>
                        <div className="w-45">
                            <div className="mb5 bigger">
                                <p className="mb3 pt5 sectionTitle">Beginning January 2026, join a <b>global constellation of new friends</b> ready to follow the rhythms of Nature.</p>
                                <p className="mb2"><b>*12 themed compost circles:</b> Online monthly letters and community workshops following Nature’s Regenerative wisdom: Rot. Rest. Rise.</p>
                                <p className="mb2"><b>*In person retreats in Normandy</b> (optional, limted spots)</p>
                                <p className="mb3">*Your guides: <b>Susannah Harmon Furr and Kirsten Kallman</b></p>
                            </div>
                            <div className="buttons">
                                <a className="retreatButton" href="https://forms.gle/9AkEreCKr4BBH4Nv8" target="_">Live Info Session: November 19</a>
                                <a className="retreatButton" href="/retreats/fecundity-of-decay/checkout">Save Your Spot</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-100 white-strip">

                    <div className="pageContent">
                        <div className="flex-row space-between">
                            <div className="paragraphGap w-50">
                                <p className="sectionTitle mt3">Exploration of the Inner Seasons</p>
                                <div className="italic mb4">
                                    <p>Time is supposed to run out; Sun is supposed to go down.</p>
                                    <p>Like your mood, like your power, like your battery.</p>
                                    <p>Rise, fall, rise.</p>
                                    <p>Life, death, life again.</p>
                                    <p>Sky, ground, sky.</p>
                                    <p>Day, night, day again.</p>
                                    <p>Rise, fall, rise.</p>
                                    <p>Angie McMahon</p>
                                </div>
                                <p>While the earth’s seasons follow a reliable pattern of growth and decay, each of us has a personal ecosystem, with inner winters and springs, summers and autumns - sometimes happening all in the same week. Our careers, relationships, physical and mental states, and even our inner experience of simply being ourselves, follow this natural cycle of rise, fall, rise.  But too often we expect perpetual springs and summers with brief blips of “wintering,” only to crack the whip towards more breakneck progress, searching for more growth, more success, more fitness, more beauty.</p>
                                <p><b>More more more is just not natural or even possible. </b></p>
                            </div>
                            <div className="w-45">
                                <Image
                                    src="/head.png"
                                    alt=""
                                    width={1620}
                                    height={2025}
                                    quality={80}
                                    className="instaPhoto mb7"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100">
                    <div className="pageContent paragraphGap">
                        <p className="sectionTitle">We'll remember that we are nature–chaotic, beautiful, and evolving. In the garden, nothing is wasted.</p>
                        <p className="">We don’t scold the Earth in winter, her soil frozen and trees stripped bare. So why do we turn against ourselves when we feel down, dark, depleted? As a part of nature we too are meant to live in cycles, needing stillness, and to lie fallow. We are not here to be endlessly productive, relentlessly blooming. <b>Wintering enables Spring. Dormancy precedes growth.</b></p>
                        <p><b>Nothing is wrong with you. You are not broken.</b></p>
                        <p className="mb4">Regenerative systems don’t resist the decay, the drab, the done. Taking cues from the miracle of soil we’ll explore the life-death-life cycle that animates all of nature and our own body-soul journey. We'll remember that we are nature–chaotic, beautiful, and evolving. In the garden, nothing is wasted. Even blight becomes compost. There are no mistakes: our shadows hold wisdom often veiling our creative potential.</p>
                        <div className="flex-row space-between threePhoto">
                            <div className="">
                                <Image
                                    src="/greenhouse.png"
                                    alt=""
                                    width={1620}
                                    height={2025}
                                    quality={80}
                                    className="instaPhoto mb4"
                                />
                            </div>
                            <div className="">
                                <Image
                                    src="/dinner.png"
                                    alt=""
                                    width={1620}
                                    height={2025}
                                    quality={80}
                                    className="instaPhoto mb4"
                                />
                            </div>
                            <div className="">
                                <Image
                                    src="/tomato.png"
                                    alt=""
                                    width={1620}
                                    height={2025}
                                    quality={80}
                                    className="instaPhoto mb4"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-100 white-strip">

                    <div className="pageContent">
                        <div className="flex-row space-between align-center">
                             <div className="w-25">
                                <Image
                                    src="/decay.png"
                                    alt=""
                                    width={1620}
                                    height={2025}
                                    quality={80}
                                    className="mb4"
                                />
                            </div>
                            <div className="w-66">
                                <p className="sectionTitle mt3 mb4">This if for you if...</p>
                                <div className="paragraphGap bigger pl4">
                                    <p>*You’re craving a deeper connection to the Earth, your body, your intuition </p>
                                    <p>*You are looking for guidance in practical frameworks for intentional living</p>
                                    <p>*You are seeking solidarity to release the pressure to always bloom</p>
                                    <p>*You’re in a life transition and seeking clarity and soulful integration</p>
                                    <p className="mb3">*You’re ready to meet yourself exactly where you are</p>
                                     <a className="retreatButton mb7" href="https://forms.gle/9AkEreCKr4BBH4Nv8" target="_">Join us Live Info Session: November 19</a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>


                <div className="pageContent">

                </div>




                <div className="paragraphGap">
                    <p className="retreatSubTitle mt3">Exploration of the Inner Seasons</p>
                    <div className="italic mb4">
                        <p>Time is supposed to run out; Sun is supposed to go down.</p>
                        <p>Like your mood, like your power, like your battery.</p>
                        <p>Rise, fall, rise.</p>
                        <p>Life, death, life again.</p>
                        <p>Sky, ground, sky.</p>
                        <p>Day, night, day again.</p>
                        <p>Rise, fall, rise.</p>
                        <p>Angie McMahon</p>
                    </div>
                    <p>While the earth’s seasons follow a reliable pattern of growth and decay, each of us has a personal ecosystem, with inner winters and springs, summers and autumns - sometimes happening all in the same week. Our careers, relationships, physical and mental states, and even our inner experience of simply being ourselves, follow this natural cycle of rise, fall, rise.  But too often we expect perpetual springs and summers with brief blips of “wintering,” only to crack the whip towards more breakneck progress, searching for more growth, more success, more fitness, more beauty, more more.</p>
                    <p>But it's just not natural or even possible.</p>
                    <p>We don’t scold the Earth in winter, her soil frozen and trees stripped bare. We don’t expect a picnic on a winter day. So why do we turn against ourselves when we feel down, dark, depleted. As a part of nature we too are meant to live in cycles, needing stillness, and to lie fallow. We are not here to be endlessly productive, relentlessly blooming. <b>Wintering enables Spring. Dormancy precedes growth.</b></p>

                    <p><b>Nothing is wrong with you. You are not broken.</b></p>
                    <p>The secret of regenerative systems is they don’t resist surrender to the decay, the drab, the done, the mistake-ridden flops. Taking cues from the miracle of soil we’ll explore the life-death-life cycle that animates all of nature and our own spiritual journey. We'll remember that we are nature–chaotic, beautiful, and evolving. In the garden, nothing is wasted. Even blight becomes compost. The dark isn’t a mistake but a doorway. Our shadows hold wisdom, often veiling our creative potential, and how unity consciousness isn’t a distant concept but a lived, embodied state we can touch.</p>

                    <div>
                        <p className="retreatOffering">Yearlong Pilgrimage</p>
                        <p className="italic">Open to everyone</p>
                    </div>

                    <p>This January, we return to the ground of our being. Every month you will receive two gorgeous letters to your inbox–one from Kirsten and one from Susannah–filled with insights, tools, and resources for deeper application and to regenerate the soil of your own personal ecosystem, reminding you that your personal pilgrimage may be in a season different from the one happening outside. </p>
                    <p>The last Wednesday of every month we will gather online for 60 minutes, starting with a 20-30 minute presentation to further explore the themes of that month before separating into the ethereal magic of triad circles made up of two fellow pilgrims and you. You will have 30 minutes to hold space together, weaving a web of deeper sharing: fecundity and decay, beginnings and endings, it all deserves to be welcome and witnessed. </p>
                    <p>Surrendering and witnessing in community enriches the cycle. When we resist our shadows, they linger. When we turn toward them– even just ever so slightly–they start to dance. Your light and your dark are both welcome here. You are not too much, not too late, not lost. You are soil and soul. </p>
                    <p>Presentations will be recorded and additional workshops may be offered, taking cues from what is needed as we walk this year together. </p>
                    <p className="mt4">Cost: $360</p>
                    <a className="retreatButton mb4" href="/retreats/fecundity-of-decay/checkout">Reserve Now</a>

                    <div>
                        <p className="retreatOffering">In Person Retreats</p>
                        <p className="italic">Women only this year</p>
                    </div>

                    <p>This spring and fall, we invite you to Normandy, to the gentle, fertile land where soil and soul can sync up again. Through carefully woven days of connection, reflection, and pleasure, we’ll explore what it means to live as part of nature, not apart from it.</p>
                    <p>No matter the current weather of your soul, all of your senses and your beating heart will feel the fecundity of homecoming to your self, balanced with deep rest, togetherness, and wonder. This is not a retreat to escape your life, but to return to it more fully.</p>
                    <p className="retreatSubTitle mt3">The Rhythm of the Days</p>
                    <p>Our retreat is rooted in the daily dance between nourishment and exploration, solitude and sisterhood, learning and embodiment, rest and labor. We will gather at the Hope Accelerator, a biodynamic garden and thatched cottage nestled in a tiny Normandy village along the banks of the Seine river. In addition to hands-on workshops and experience with the magic of soil, we’ll use the frameworks of Human Design and the Gene Keys to deepen our understanding of who we are, how we’re designed to move through life, and what’s possible when we stop resisting our natural cycles and begin to trust them instead. We’ll explore how uncertainty is profoundly rich terrain for our wildest dreams and our possibilities are only ever as rich as our willingness to plant seeds on the darkest of nights.</p>
                    <p>Each day, we’ll share one consciously curated meal at beloved local establishments like Le Manoir de Rétival, with its deeply sensory bistro experience, or a rustic lunch in the serene abbey village of Saint-Wandrille. These meals will celebrate seasonality, local produce, and the quiet luxury of true nourishment.</p>
                    <p>Additionally, we’ll slow down and root into the ritual of preparing food together, simple meals you will want to make when back home. After visiting Normandy’s farmers’ markets (Pont-Audemer Friday, Honfleur on Saturday) we’ll return to the kitchen to cook with the season’s freshest ingredients or harvest directly from the kitchen garden. The act of cooking is always inviting us into conversation with the land and a reminder of our own inner seasons.</p>

                    <p className="retreatSubTitle mt3">This Is For You If...</p>
                    <ul>
                        <li>You’re craving a <b>deeper connection to your body, your intuition, and the Earth</b></li>
                        <li>You’re in a <b>life transition</b> and seeking clarity and soulful integration</li>
                        <li>You want to <b>release the pressure</b> to always be in bloom and honor your inner seasons</li>
                        <li>You long for sacred connection, slow food, circle wisdom, and creative expression</li>
                        <li>You’re ready to <b>meet yourself exactly where you are</b>, without trying to “fix” anything</li>
                    </ul>

                    <p className="mt4">Cost: $2160</p>
                    <p><b>Retreat reservation includes housing, transportation from Paris, meals, and experiences as well as access to the online Compost Circle.</b></p>
                    <a className="retreatButton mb4" href="/retreats/fecundity-of-decay/checkout">Reserve Now</a>





                    <p className="retreatSubTitle mt3">Final Words</p>
                    <p>When we resist our shadows, they linger. When we turn toward them even just ever so slightly, they start to dance. Your light and your dark are both welcome here. You are not too much, not too late, not lost.</p>
                    <p>You are soil and soul.</p>
                    <p>And this year, we return to the ground of our being.</p>




                </div>


            </div>
        </div>
    );
}