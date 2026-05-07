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

    const links = [
        { href: '/compost', label: 'Compost Notes' },
        { href: '/inspiration', label: 'Inspiration' },
        { href: '/about', label: 'About Hope' },
        { href: '/retreats', label: 'Upcoming' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <div className={`menuOverlay ${animate && !isClosing ? 'menuOpen' : ''}`}>
            <nav className="menuCont">
                {links.map((link, i) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`menuItem ${animate && !isClosing ? 'menuItemVisible' : ''}`}
                        style={{ animationDelay: `${i * 0.08}s` }}
                        onClick={onClose}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}