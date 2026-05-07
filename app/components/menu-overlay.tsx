import Link from 'next/link';
import { useEffect, useState } from 'react';

interface MenuOverlayProps {
    onClose: () => void;
    isClosing?: boolean;
}

export default function MenuOverlay({ onClose, isClosing = false }: MenuOverlayProps) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isClosing) {
            setAnimate(false);
        } else {
            requestAnimationFrame(() => setAnimate(true));
        }
    }, [isClosing]);

    return (
        <div className={`menuOverlay ${animate && !isClosing ? 'menuOpen' : ''}`}>
            <nav className="menuCont">
               
                <Link href="/compost" className="menuItem" onClick={onClose}>Compost Notes</Link>
                <Link href="/inspiration" className="menuItem" onClick={onClose}>Inspiration</Link>
                <Link href="/about" className="menuItem" onClick={onClose}>About Hope</Link>
                <Link href="/retreats" className="menuItem" onClick={onClose}>Upcoming</Link>
                <Link href="/contact" className="menuItem" onClick={onClose}>Contact</Link>
            </nav>
        </div>
    );
}