import { useRef, useEffect } from "react";

const ScrollReveal = ({ thre=0.2, children }) => {
    const ref = useRef(null);

    useEffect(() => {

        const { innerWidth, innerHeight } = window;
        // let oberservMargin = "0px 0px -50px 0px"
        
        // if (innerWidth < 768) {
            //     oberservMargin = "0px 0px -40px 0px"
            // }
            

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                ref.current.classList.add("slide-in")
            }
        }, {rootMargin: `0px 0px -50px 0px`, threshold: thre});

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