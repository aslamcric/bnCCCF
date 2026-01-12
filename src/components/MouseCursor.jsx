import { useEffect } from "react";

export default function MouseCursor() {
    useEffect(() => {
        const inner = document.querySelector(".cursor-inner");
        const outer = document.querySelector(".cursor-outer");

        if (!inner || !outer) return;

        // 🔥 make visible (jQuery er kaj)
        inner.style.visibility = "visible";
        outer.style.visibility = "visible";

        const moveCursor = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            inner.style.transform = `translate(${x}px, ${y}px)`;
            outer.style.transform = `translate(${x}px, ${y}px)`;
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            <div className="mouseCursor cursor-outer"></div>
            <div className="mouseCursor cursor-inner"></div>
        </>
    );
}