const FeatureCard = ({ imageUrl, title, description }: { 
  imageUrl: string, 
  title: string, 
  description: string[] 
}) => (
  <div className="p-6 rounded-lg border border-gray-800 bg-black/40 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
    <div className="mb-4">      
      <img src={imageUrl} 
      loading="lazy"
 className="w-12 h-12"
  style={{
    filter: 'invert(21%) sepia(95%) saturate(5434%) hue-rotate(275deg) brightness(97%) contrast(123%)'
  }}
      alt={title} />
    </div>
    <h3 className="text-lg font-helvetica font-semibold mb-2 text-start">{title}</h3>
   <ul className='pl-6'>
   {
        description.map((description,descriptionIndex) => (
            <li key={descriptionIndex} className="text-gray-400 font-helvetica text-sm text-start list-disc">{description}</li>
        ))
    }
   </ul>
  </div>
);




const Feature = () => {
  const features = [
    {
        imageUrl: "/24_7.avif",
        title: "24/7 Availability",
        description: [
            "Ensure Your Customer Can Reach You Anytime Never Miss A Call",
            "Handle Inquiries, Booking And Support Around The Clock"
        ]
    },
    {
        imageUrl: "/cost_savings.avif",
        title: "Cost Saving",
        description: [
            "Reduce Overhead Of Hiring, Training, And Managing Human Agents",
            "Provide Premium Customer Service At A Fraction Of The Cost"
        ]
    },
    {
        imageUrl: "/features4.avif",
        title: "Efficiency",
        description: [
            "Automate Simple Tasks Like Lead Qualification, Scheduling, And Follow-Up",
            "Boost Productivity And Free Up Your Team To Focus On Higher Value Work"
        ]
    },
    {
        imageUrl: "/featues3.avif",
        title: "Actionable Capabilities",
        description: [
            "Manage Customer Accounts, Schedule Appointments, And Transfer Calls",
            "Deliver A Consistent, Omni-Channel Experience Across Multiple Channels"
        ]
    },
    {
        imageUrl: "/features5.avif",
        title: "Scalability",
        description: [
            "Easily Handle High Call Volumes Without Adding More Agents",
            "Seamlessly Scale Your Telecalling Capacity As Your Business Grows"
        ]
    },
    {
        imageUrl: "/advance-analytics.avif",
        title: "Advance Analytics and Insights",
        description: [
            "Track Calls, Review Recordings, And View AI-Generated Summaries On A Comprehensive Dashboard",
            "Analyze Conversation Trends, Customer Sentiment, And Call Team Style"
        ]
    }
];
  

  return (
    <div className="w-full bg-black text-white bg-image mt-0">
      {/* Features Section */}
      <div className="max-w-7xl mx-auto   mt-10 sm:mt-24 ">
        <h2 className="text-3xl font-helvetica md:text-4xl font-bold text-center mb-12">
          Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              imageUrl={feature.imageUrl}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>      
      </div>
    </div>
  );
};

export default Feature;