import { useState, useEffect } from 'react'

export function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setShowButton(currentPosition > 300);
        setScrollPosition(currentPosition);
    };

    return (
        <button
            className={`fixed bottom-0 right-0 m-6 p-2 rounded-full ${showButton ? "opacity-100" : "opacity-0"
                } transition-opacity `}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[80px] w-[80px] rounded-full bg-[#febb02] text-white hover:bg-[#003580] duration-300 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                />
            </svg>
        </button>
    );
}