import { useRef, useState } from "react";
import AITelecalling from "../components/AITelecalling";
import BookDemoButton from "../components/BookDemoButton";
import Contact from "../components/Contact";
import CustomerReview from "../components/CustomerReview";
import Feature from "../components/Feature";
import Navigation from "../components/Navigation";
import Blogs from "./Blogs";
import TrustedBy from "../components/TrustedBy";
import DialoftAI from "./DialoftAI";
import { MdCancel } from "react-icons/md";
const Home = () => {
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const [showBookDemo, setShowBookDemo] = useState(false);
  return (
    <>
    <div onClick={() => setShowBookDemo(false)} className="min-h-screen bg-black text-white">
      <Navigation descriptionRef={descriptionRef} />
      <main className="relative">
      <div className="absolute flex items-center justify-center gap-10 top-0 left-0 overflow-hidden">
        <img
        loading="eager"
        className="w-[50%] relative scale-125 -left-40"
        src="/homepage.jpeg"
        alt=""
        />
        <img
        fetchPriority="high"
        loading="eager"
        className="w-[50%] relative scale-125  -right-40"
        src="/homepage.jpeg"
        alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-10 text-center">
        <h1 className="text-white sm:mt-20 font-helvetica text-4xl sm:text-[50px] leading-[1.27] tracking-[0px]">
        Transform Your Business With AI Phone Agents That{" "}
        <div className="word inline-block font-bold text-2xl sm:text-[50px]">
          {/*  <p className="text-xl lg:text-2xl mb-4 font-bold">AI Phone Agents:</p> */}
          <span style={{ color: "#8C01FA" }} className="block capitalize-first-word">
          Boost Business
          </span>
          <span style={{ color: "#8C01FA" }} className="capitalize-first-word block">
          handle support 24/7
          </span>
          <span style={{ color: "#8C01FA" }} className="capitalize-first-word block">
          convert prospects
          </span>
          <span style={{ color: "#8C01FA" }} className="capitalize-first-word block">
          book appointments
          </span>
          <span style={{ color: "#8C01FA" }} className="capitalize-first-word block">
          prequalify leads
          </span>
          <span style={{ color: "#8C01FA" }} className="capitalize-first-word block">
          cold call leads
          </span>
          <span style={{ color: "#8C01FA" }} className="capitalize-first-word block">
          drive sales
          </span>
          <span style={{ color: "#8C01FA" }} className="capitalize-first-word block">
          reduce costs
          </span>
          <span style={{ color: "#8C01FA" }} className="capitalize-first-word block">
          sound human
          </span>
        </div>
        </h1>
        <p className="sm:text-lg text-sm font-helvetica md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
        Experience the future of customer communication with AI agents that
        sound indistinguishable from humans, available 24/7 at a fraction of
        the cost.
        </p>
        <div className="flex flex-row justify-center gap-4">
        <button
          onClick={(event) => {
            event.stopPropagation();
            setShowBookDemo(!showBookDemo)
          }}
          className="bg-gray-800 flex gap-3 hover:bg-gray-700 text-white px-5 py-3 border max-w-60 rounded-full"
        >
        <span className="whitespace-nowra">See A Demo</span>
          <img src="/youtube.svg" className="w-6 h-6 inline-block" alt="Youtube Icon" />
        </button>
        <BookDemoButton />
        </div>
        <TrustedBy />
        <Feature />
      </div>
      <DialoftAI />
      <div ref={descriptionRef}></div>
      <AITelecalling />
      <CustomerReview />
      <Blogs />
      <Contact />
      </main>
      
    </div>
    {showBookDemo && (
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center" onClick={() => setShowBookDemo(false)}>
      <MdCancel onClick={() => {
        console.log(showBookDemo);
        setShowBookDemo(!showBookDemo) 
        return
        }} size={45} className="text-white absolute top-20 right-0 sm:right-5 sm:top-8 lg:right-16 xl:right-60 xl:top-20 cursor-pointer"/>
      <iframe
       width="80%"
       height="80%"
       className="max-w-[900px]"
       src="https://www.youtube.com/embed/IBqmbhUM5_4?si=oxQXydLvb4wLAbhE"
       title="YouTube video player"
       frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowFullScreen
       onClick={(e) => e.stopPropagation()}
       ></iframe>
      </div>
      )}
      </>
  );
};

export default Home;
