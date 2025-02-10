const TrustedBy = () => {
  const logos = [
    { src: "/deepgram.png", alt: "Deepgram", invert: false },
    { src: "/Zapier.avif", alt: "Zapier", invert: true },
    { src: "/Twilio.avif", alt: "Twilio", invert: true },
    { src: "/openai.png", alt: "Open AI", invert: false },
  ];

  return (
    <>
      <h1 style={{ color: "#618ADC" }} className="text-lg mt-10">Integration With</h1>
      <div className="flex items-center justify-around flex-wrap gap-2 sm:gap-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center ${logo.alt === "Deepgram" && "w-32 sm:w-40"} `}
          >
            <img
              className={`max-w-full max-h-full object-contain ${logo.invert ? 'invert' : ''}`}
              src={logo.src}
              alt={logo.alt}
            />
          </div>
        ))}
        <div className="w-40 h-40">
          <img
            src="/IIElevenLabs.avif"
            className="w-full h-full invert object-contain"
            alt=""
          />
        </div>
        <div className="w-24 sm:w-32 h-12">
          <img
            src="/highLevel2.avif"
            className="w-full h-full invert object-contain"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default TrustedBy;
