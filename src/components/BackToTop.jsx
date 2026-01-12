import { useEffect, useState } from "react";

export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        show && (
            <button id="back-top" className="back-top show" onClick={scrollTop}>
                ↑
            </button>
        )
    );
}