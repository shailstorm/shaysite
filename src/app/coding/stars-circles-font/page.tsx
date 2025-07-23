import Link from "next/link";

export default function StarsCirclesFontPage() {
    return (
        <section>
            <div style={{ textAlign: "center" }}>
                {/* <h1> dyanamic font </h1> */}
                <p> first p5.js thing~ </p>
                <iframe style={{ border: 0 }}
                    title="stars and circles"
                    src="/stars-circles-font/index.html"
                    width="600"
                    height="400"
                />
            </div>
 
            <div style={{ textAlign: "center", marginTop: 50 }}>
                <p><Link href="https://github.com/shailstorm/dynamic-font" target="_blank">code here!</Link></p>
            </div>

        </section>
        
    );
}