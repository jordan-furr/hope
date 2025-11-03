'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuOverlay from './menu-overlay';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';
    const menuRef = useRef<HTMLDivElement>(null);
    const menuToggleRef = useRef<HTMLDivElement>(null);

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setMenuOpen(false);
            setIsClosing(false);
        }, 150);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuOpen &&
                !isClosing &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                menuToggleRef.current &&
                !menuToggleRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        }

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen, isClosing]);

    const toggleMenu = () => {
        if (menuOpen) {
            closeMenu();
        } else {
            setMenuOpen(true);
        }
    };

    return (
        <>
                <Link href="/">
                    <h1 className="text-white hopeTitle">
                        Hope Accelerator
                    </h1>
                </Link>
            <div
                className="menuToggleIcon"
                onClick={toggleMenu}
                ref={menuToggleRef}
            >
                <Image
                    src="/Hope-Accelerator-Retreats-Normandy-France-w.PNG"
                    alt="Menu"
                    width={42}
                    height={42}
                    sizes="(max-width: 928px) 44px, 56px"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>

            {menuOpen && (
                <div ref={menuRef}>
                    <MenuOverlay onClose={closeMenu} isClosing={isClosing} />
                </div>
            )}
        </>
    );
}
