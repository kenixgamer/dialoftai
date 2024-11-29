const StatCard = ({ value, label, color }: { value: string; label: string; color: string }) => (
  <div className="flex items-center gap-3 sm:gap-6">
    <div>
      <div className={`text-xl font-helvetica text-center sm:text-2xl md:text-5xl font-bold ${color}`}>
        {value}
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-wider font-roboto text-center" style={{color: "#C4C4C4"}}>
        {label}
      </div>
    </div>
    {/* Gradient Divider */}
    {value !== "50%" && (
      <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent opacity-20"></div>
    )}
  </div>
);

const DialoftAI = () => {
    const stats = [
      { value: "500X", label: "MORE EFFICIENT", color : "gradient-text-alt-1" },
      { value: "Zero", label: "WAITING TIME", color : "gradient-text-alt-2" },
      { value: "120,000+", label: "COMPLETED CALLS AND COUNTING", color : "gradient-text-alt-3"  },
      { value: "50%", label: "ROI IN 30 DAYS", color : "gradient-text-alt-4"}
    ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className='flex flex-col sm:mb-20 mb-14 w-full relative z-10'>
        <h2 className="text-3xl my-10 font-helvetica md:text-4xl font-bold text-center">
          Dialoft AI In{' '}
          <span className="text-[#2B7FFF]">Numbers</span>
        </h2>
        
        <div className="flex items-center gap-2 sm:gap-12 justify-center">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1E0B34] to-transparent"></div>
    </div>
  );
};

export default DialoftAI;