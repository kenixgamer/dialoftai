import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Blogs = () => {
  const [blogs] = useState([
    {
      imageUrl : "/1.png",
      title : "7 Industries Revolutionized by AI Phone Agents (And Why Yours Should Be Next)",
      description : "Customer support technology is changing faster than ever, and Dialoft AI is here to help businesses keep up. Our AI phone agent software makes it easier to connect with customers, offering faster, more personal, and more efficient service every time.",
      navigateLink : "/7_Industries_Revolutionized"
    },
    {
      imageUrl : "/2.png",
      title : "Revolutionizing Customer Support: The Dialoft AI Advantage",
      description : "Explore the future of customer service with AI-powered solutions that deliver fast, efficient, and personalized interactions. This blog reveals how Dialoft AI leverages machine learning and natural language processing to create seamless customer experiences, reduce support costs, and provide intelligent insights for businesses.",
      navigateLink : "/Revolutionizing_Customer_Support"
    },
    {
      imageUrl : "/3.png",
      title : "Your Guide to Adopting AI-Driven Call Centers with Dialoft AI",
      description : "Dive into the evolution of customer service from traditional call centers to advanced AI-powered systems. Learn how Dialoft AI enables businesses to provide 24/7, personalized customer care with lower overhead, improved efficiency, and a human-like touch that transforms customer interactions.",
      navigateLink : "/Your_Guide_to_Adopting_AI-Driven"
    },
    {
      imageUrl : "/4.png",
      title : "Top 10 Essential Features of AI-Based Telephony Solutions",
      description : "Uncover the game-changing features of AI phone systems that are revolutionizing customer service. This comprehensive guide explores how Dialoft AI's advanced telephony solutions offer natural voices, context awareness, seamless integrations, and continuous learning to deliver unprecedented customer support experiences.",
      navigateLink : "/Top_10_Essential_Features"
    },
  ])
  const navigate = useNavigate();
  return (

   <div className='flex flex-col items-center justify-center'>

     <div className="flex p-5 items-center flex-col justify-center max-w-7xl ">
      <h1 className="text-start block sm:block text-2xl md:text-3xl mb-8 font-bold w-full font-helvetica my-2">Blogs</h1>
     {/* <h1 className="text-start sm:hidden text-2xl font-bold w-full font-helvetica my-2 py-2">Blogs</h1> */}
   <div className="flex flex-col sm:flex-row">
   <img 
    loading="lazy"
    className="hidden sm:block max-w-lg md:min-w-[40%] w-full  rounded-lg min-w-[50%]"
     src={blogs[0].imageUrl}
      alt="" />
    <img 
     loading="lazy"
     style={{ objectFit: "cover", aspectRatio: "4/3" }}
    className="sm:hidden w-screen  max-h-80 rounded-md"
    src={blogs[0].imageUrl} 
    alt="" />
    <div className="flex  flex-col mt-2 items-center justify-center px-3 sm:px-6">
      <h1 className="text-start text-2xl md:text-3xl font-bold w-full font-helvetica">{blogs[0].title}</h1>
      <p className="mt-4 font-sans text-sm md:text-[14px] xl:text-[16px] leading-2">{blogs[0].description}</p>
      <div className="flex items-start justify-start mt-4 w-full">
      <button onClick={() => navigate(`${blogs[0].navigateLink}`)} className="border md:py-3 py-2 px-3 rounded-xl md:px-6 max-w-40">Read More</button>
      </div>
    </div>
   </div>
  </div>
  <div className="flex gap-3 p-5 w-screen sm:flex-row flex-col items-center justify-around max-w-7xl">
          {
            blogs.slice(1,blogs.length).map((blog) => (
              <div className="flex flex-col sm:max-w-sm">
              <img
               loading="lazy"
                 style={{ objectFit: "cover", aspectRatio: "4/3" }}
                className="w-screen max-h-80 rounded-md"
                src={blog.imageUrl} alt="" />
             <div className="p-3 flex flex-col items-start justify-center gap-4">
             <h1 className="font-bold text-2xl md:text-2xl xl:text-xl font-helvetica">{blog.title}</h1>
  
              <p className="text-sm sm:text-[16px] leading-2 max-h-10 overflow-hidden">{blog.description}</p>
              <button onClick={() => navigate(`${blog.navigateLink}`)} className=" font-helvetica border xl:py-3 py-2 px-3 rounded-xl xl:px-6 max-w-40">Read More</button>
             </div>
            </div>
            ))
          }
          
        </div>
   </div>
  )
}

export default Blogs