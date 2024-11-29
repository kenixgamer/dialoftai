const comparisonData = {
    human: [
        "9-5 Working Hours",
        "10-20 Calls/Hour",
        "Limited Languages",
        "$3-$5 per Call",
        "2-5 Minutes Response Time",
        "Variable Performance (Mood, Fatigue)",
        "Limited Personal Notes for Memory",
        "Requires Hiring/Training for Scalability",
        "15-25% Error Rate",
        "Basic Scripted Responses for Personalization",
        "60-70% Customer Satisfaction",
        "Manual Reporting for Data Analytics",
        "High Training Cost ($5000-$10000/Agent)",
        "Limited Technology Integration",
        "Inconsistent Emotional Intelligence",
    ],
    ai: [
        "24/7/365 Continuous Support",
        "500x More Calls Simultaneously",
        "Multilingual (50+ Languages)",
        "$0.10-$0.50 per Call",
        "Instant (0 Seconds) Response Time",
        "Perfect Consistent Performance",
        "Advanced Memory Across Interactions",
        "Instant Scale-Up for Scalability",
        "<2% Error Rate",
        "Advanced Contextual Understanding for Personalization",
        "90-95% Customer Satisfaction",
        "Real-Time Comprehensive Insights for Data Analytics",
        "Minimal Ongoing Training Cost",
        "Seamless Multi-Platform Technology Integration",
        "Programmed Consistent Empathy",
    ],
    aspects: [
        "Availability",
        "Call Capacity",
        "Language Support",
        "Cost per Call",
        "Response Time",
        "Consistent Performance",
        "Memory Retention",
        "Scalability",
        "Error Rate",
        "Personalization",
        "Customer Satisfaction",
        "Data Analytics",
        "Training Cost",
        "Technology Integration",
        "Emotional Intelligence",
    ],
};

const HumanVsAI = () => {
    return (
        <div  style={{ background: 'linear-gradient(to right, #181818, #000428, #004e92)' }} className="w-screen h-full flex items-center justify-center p-2 sm:p-6 min-h-screen">
            <table className="font-helvetica table-auto w-full max-w-6xl text-white rounded-lg overflow-scroll ">
                <thead>
                    <tr className="">
                        <th className="text-lg sm:text-4xl font-bold sm:px-4 text-start sm:py-2 gradient-text-alt-2">Aspect</th>
                        <th className="text-lg sm:text-4xl font-bold sm:px-4 text-start sm:py-2 gradient-text-alt-3">Human Tellicaller</th>
                        <th className="text-lg sm:text-4xl font-bold sm:px-4 text-start sm:py-2 gradient-text-alt-1">AI Tellicaller</th>
                    </tr>
                </thead>
                <tbody>
                    {comparisonData.aspects.map((aspect, index) => (
                        <tr key={index} className="bg-opacity-50 transition font-helvetica">
                            <td className="sm:px-4 sm:py-2 text-[10px] sm:text-base font-medium">
                                <ul className="list-disc list-outside sm:space-y-1">
                                    <li className="font-bold">{aspect}</li>
                                </ul>
                            </td>
                            <td className="sm:px-4 sm:py-2 text-[10px] sm:text-base">
                                <ul className="sm:space-y-1">
                                    <li>{comparisonData.human[index]}</li>
                                </ul>
                            </td>
                            <td className="sm:px-4 sm:py-2 text-[10px] sm:text-base">
                                <ul className="sm:space-y-1">
                                    <li>{comparisonData.ai[index]}</li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HumanVsAI;
