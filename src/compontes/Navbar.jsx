
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Toggle Mobile Menu
    const handleNav = () => {
        setNav(!nav);
    };

    // Auto-hide Navbar on scroll down, show on scroll up
    // Auto-hide Navbar on scroll down, show on scroll up + Hide after 5 seconds of inactivity
    useEffect(() => {
        let timer;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (!nav) {
                // Always show when scrolling UP or just starting to scroll
                if (currentScrollY < lastScrollY || currentScrollY < 50) {
                    setVisible(true);
                } else {
                    // Hide when scrolling DOWN
                    setVisible(false);
                }
            }
            setLastScrollY(currentScrollY);

            // Clear existing timer
            clearTimeout(timer);

            // Set new timer to hide after 5 seconds (only if not hovering or busy)
            if (!nav && visible) {
                timer = setTimeout(() => {
                    setVisible(false);
                }, 5000);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial timer
        timer = setTimeout(() => {
            if (window.scrollY > 50) setVisible(false);
        }, 5000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, [lastScrollY, nav, visible]);

    const navLinks = [
        { id: 1, text: "Home", href: "#home" },
        { id: 2, text: "About", href: "#about" },
        { id: 3, text: "Skills", href: "#skills" },
        { id: 4, text: "Projects", href: "#projects" },
        { id: 5, text: "Experience", href: "#experience" },
        { id: 6, text: "Contact", href: "#contact" },
    ];

    return (
        <>
            <nav
                className={`fixed w-full z-[999] transition-transform duration-300 ease-in-out ${visible ? "translate-y-0" : "-translate-y-full"
                    } bg-transparent`}
            >
                <div className="flex justify-center items-center h-20 max-w-7xl mx-auto px-6 text-white relative">

                    {/* Logo / Brand */}


                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.id} className="relative group">
                                <a
                                    href={link.href}
                                    className="font-medium text-sm lg:text-base text-gray-300 hover:text-green-400 transition-colors py-2 block"
                                >
                                    {link.text}
                                </a>
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle Button */}
                    <div onClick={handleNav} className="block md:hidden cursor-pointer text-white hover:text-green-400 transition-colors z-[1001] absolute right-6">
                        {nav ? <CloseIcon className="!text-3xl" /> : <MenuIcon className="!text-3xl" />}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[1000] flex flex-col justify-center items-center transition-all duration-500 ease-in-out transform ${nav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    } md:hidden`}
            >
                {/* Background Decorative Blobs */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                {/* Close Button */}
                <div className="absolute top-6 right-6 cursor-pointer text-white hover:text-green-400 transition-colors z-50" onClick={() => setNav(false)}>
                    <CloseIcon className="!text-3xl" />
                </div>

                <ul className="w-full relative z-10 flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.id} className="text-center group">
                            <a
                                href={link.href}
                                onClick={() => setNav(false)} // Close menu on click
                                className="text-2xl font-bold text-gray-300 hover:text-green-400 transition-colors block"
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
