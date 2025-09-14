import { useRef, useEffect } from "react";

const ScrollReveal = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                ref.current.classList.add("slide-in")
            }
        }, {rootMargin: "0px 0px -50px 0px", threshold: 0.2});

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    });

    return (
        <div ref={ref} className="scroll-reveal">
            {children}
        </div>
    )
}

export default ScrollReveal;