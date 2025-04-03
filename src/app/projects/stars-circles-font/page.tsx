import Link from "next/link";

export default function StarsCirclesFontPage() {
    return (
        <section>
            <div style={{ textAlign: "center" }}>
                <h1>dyanamic font</h1>
                <p> move your cursor around the canvas :) </p>
                <iframe style={{ border: 0 }}
                    title="stars and circles font"
                    src="/stars-circles-font/index.html"
                    width="800"
                    height="450"
                />
                <p>my first p5.js project!</p>
            </div>
 
            <div style={{ textAlign: "center", marginTop: 50 }}>
                <p><Link href="https://github.com/shailstorm/dynamic-font" target="_blank">code here!</Link></p>
            </div>

        </section>
        
    );
}