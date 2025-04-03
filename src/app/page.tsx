// LANDING PAGE "/"
import Image from "next/image";
import Link from "next/link";
import Nav from "./nav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-8 sm:p-20 font-sans">
      <Nav></Nav>

      {/* ABOUT ME */}
      <main className="flex-1 flex flex-col items-center sm:items-start gap-4">
        <h1> about shaylee </h1>

        <span>
          {/* <Image alt="shay in a tree" 
                src="/me/shay_in_a_tree.jpeg"
                style={{ maxWidth: "100%", height: "auto" }}
                width={300}
                height={300}></Image>
          
          <Image alt="shay on a rock" 
                src="/me/shay_on_a_rock.jpeg"
                style={{ maxWidth: "100%", height: "auto" }}
                width={285.5}
                height={285.5}></Image> */}

          {/* <Image alt="shay with parasites" 
                src="/me/shay_with_parasites.jpeg"
                style={{ maxWidth: "100%", height: "auto" }}
                width={285.5}
                height={285.5}></Image> */}
        </span>
         
        <p>
          [under construction as of 03/10/2025] 

          <br></br>
          <br></br>

          hi! i'm shaylee. i graduated from wellesley college, a small liberal arts college just outside of boston, massachusetts.
           
          <br></br>
          <br></br>

          there's lots of other things i could say about myself. instead, i'll refer you to the books i'm reading and things i've made, which can mostly be found in the links above. 

          <br></br>
          <br></br>

          i always welcome emails and messages--methods of contact are below!
        </p>
      </main>

      {/* FOOTER */}
      <footer className="flex justify-center mt-8">
        <p>
          {"my email is sx102[at]wellesley[dot]edu"}
          <br></br>
          {"find me on x: "} <Link href="https://x.com/nullspacing" target="_blank">nullspacing</Link>

        </p>
      </footer>
    </div>
  );
}