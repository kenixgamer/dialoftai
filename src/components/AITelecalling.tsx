import  {  useState } from 'react';

const industries = [
  {
    label: 'Healthcare and Medical Practices',
    image: '/aitellicalling1.avif',
    description: 'Provide appointment scheduling, answer basic health questions, and manage patient records. Dialoft AI can handle appointment reminders and cancellations, freeing up staff for other tasks. It can also access and update patient records securely.'
  },
  {
    label: 'Real Estate',
    image: '/aitellicalling2.avif',
    description: 'Generate leads, schedule appointments, and answer property-related inquiries. Dialoft AI can qualify leads based on pre-defined criteria using demographic analysis and validation. It can also integrate with CRM systems to provide automated follow-ups.'
  },
  {
    label: 'Financial Services',
    image: '/aitellicalling3.avif',
    description: 'Dialoft AI manages financial services by answering queries about loans, investments, and account management. It can assist with transaction tracking, loan applications, and credit card services. Additionally, it provides personalized financial advice, fraud alerts, and real-time support, ensuring customer confidence and satisfaction.'
  },
  {
    label: 'E-commerce & Retail',
    image: '/aitellicalling4.avif',
    description: 'Handle customer support, process orders, and manage inventory inquiries. Dialoft AI can assist with product recommendations, order tracking, and returns processing.'
  },
  {
    label: 'Education & Training',
    image: '/aitellicalling5.avif',
    description: 'Provide student support, schedule classes, and manage registrations. Dialoft AI can answer questions about course offerings and schedules, as well as handle registration and enrollment processes. It can also provide personalized academic support.'
  },
  {
    label: 'Hotel',
    image: '/aitellicalling6.avif',
    description: 'Dialoft AI enhances the hospitality experience by assisting guests with booking accommodation needs, handle check-in/check-out procedures, and provide recommendations based on their preferences. It can help with room service requests, address guest inquiries and provide local travel tips. Guides can handle early check-in submissions, ensuring a seamless and personalized stay.'
  },
  {
    label: 'SaaS',
    image: '/aitellicalling7.avif',
    description: 'Dialoft AI simplifies SaaS customer support by providing instant answers about subscription plans, pricing, and features. It can assist with onboarding, troubleshoot issues, and guide users through product tutorials. With proactive notifications and personalized recommendations, Dialoft AI enhances user experiences and improves customer retention.'
  },
  {
    label: 'Home Services',
    image: '/aitellicalling8.avif',
    description: 'Dialoft AI simplifies home service management by offering efficient solutions to schedule services, track technician progress, coordinate site visits, and handle billing and payments. It automates reminders and service follow-ups, and provides personalized recommendations based on service history. For service providers, it ensures seamless communication between customers and service providers, enhancing satisfaction and reliability.'
  },
  {
    label: 'Travels & Hospitality',
    image: '/aitellicalling9.jpeg',
    description: 'Dialoft AI elevates travel and hospitality services by offering personalized travel suggestions, booking accommodations, and planning itineraries. It can answer queries about destinations, transportation options, and hotel amenities. Additionally, it ensures a seamless experience by managing cancellations, rescheduling, and providing real-time updates.'
  },
  {
    label: 'Insurance Companies',
    image: '/aitellicalling10.avif',
    description: 'Handle policy inquiries, provide information, and guide customers through the process. Dialoft AI can collect initial claim information and route it to the appropriate department. It can also answer frequently asked questions about policy coverage and benefits.'
  }
];

interface IndustryLabelProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const IndustryLabel = ({ label, isActive, onClick }: IndustryLabelProps) => (
  <button
    className={`border font-roboto text-xs sm:text-sm h-auto w-auto p-2 sm:p-3 uppercase rounded-full whitespace-nowrap transition-all ${
      isActive ? 'border-teal-500 bg-teal-500/10' : 'border-gray-700 hover:border-purple-500/50'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const AiTelecallingComponent = ({descriptionRef} : any) => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  const handleLabelClick = (industry: typeof industries[0]) => {
    setSelectedIndustry(industry);
    // Scroll to the description section smoothly
    if (window.innerWidth <= 768) {
      descriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div
    style={{
      backgroundImage: "url('/background.avif')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: '8px', // Adjust if needed
      paddingBottom: '40px',
      // border : "2px solid red"
    }}
     className="bg-black text-white w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-8 md:mb-0 md:w-[50%] w-full flex flex-col items-center md:items-start justify-center">
            <h1 className="sm:text-5xl text-4xl font-bold font-helvetica">AI Telecalling</h1>
            <h2 className="text-teal-400 text-4xl sm:text-5xl font-helvetica">Across Industries</h2>
          </div>
          <div className="flex flex-wrap gap-2 max-w-full ml-10 md:max-w-[57%]">
            {industries.map((industry) => (
              <IndustryLabel
                key={industry.label}
                label={industry.label}
                isActive={selectedIndustry.label === industry.label}
                onClick={() => handleLabelClick(industry)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12  rounded-lg" ref={descriptionRef}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[40%]">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.label}
                className="w-full rounded-3xl object-cover sm:h-96 h-60"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-helvetica">{selectedIndustry.label}</h2>
              <p className="text-gray-300 text-sm sm:text-lg font-helvetica leading-relaxed">
                {selectedIndustry.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTelecallingComponent;