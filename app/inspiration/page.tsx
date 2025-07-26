import Link from 'next/link';
import '../styles/page.css'

export default function InspirationPage() {
    return (
        <div className='page'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h1>Inspiration</h1>
                </div>
                <div className='mt3 margin-a'>
                    <p>Here you'll find voices that speak to nature's wisdom, the practice of regeneration, and the infinite game of becoming.</p>
                    <h3>Erik de Jong</h3>
                    <p className="mv3">
                        Those who garden become committed, to nature and to themselves.  gardening is an active dialogue with living material.  It is about locality and place, about where we are, and it can be done anywhere, regardless of conventions.  Interacting with plants offers beauty, comfort, homecoming, and grounding.  It may heal that which is broken.  Gardening provides us with empathy as a tool for maintaining healthy relationships.  After all the garden is a training ground for regeneration.
                    </p>
                    <h3>James Carse</h3>
                    <p className="mv3">
                        Gardening is not outcome-oriented. A successful harvest is not the end of a gardener's existence, but only a phase of it. As any gardener knows, the vitality of a garden does not end with a harvest. It simply takes another form. Gardens do not die in the winter but quietly prepare for another season.
                    </p>
                </div>
            </div>
        </div>
    );
}