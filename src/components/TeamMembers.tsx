const TeamMembers = () => {
    const teamMembers = [
        {
            name: 'Kavish Shah',
            role: 'Co-Founder of Dialoft AI',
            linkedIn: 'https://www.linkedin.com/in/kavish2004/',
            imageUrl : "/kavish.png"
        },
        {
            name: 'Tejas Dave',
            role: 'Co-Founder and Marketing Lead',
            linkedIn: 'https://www.linkedin.com/in/tejash-dave-social-media-helper/',
             imageUrl : "/Tejas.png"
        },
        {
            name: 'Harsh Parmar',
            role: 'Frontend Developer',
            linkedIn: 'https://www.linkedin.com/in/hp2490/',
             imageUrl : "/harsh2.jpeg"
        },
        {
            name: 'Ansh Vachheta',
            role: 'UI/UX Designer',
            linkedIn: 'https://www.linkedin.com/in/ansh-vachheta-3a3a10257/',
             imageUrl : "/Ansh.png"
        },
        {
            name: 'Cherish Jain',
            role: 'Social Media Strategist',
            linkedIn: 'https://www.linkedin.com/in/cherish-jain-8464b91ba/',
             imageUrl : "/Cherish.png"
        },
    ];

  return (
        <div className="team-members bg-image font-helvetica w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-white font-bold text-3xl text-center my-8">Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex p-4 flex-col items-center justify-center text-white">
                        <img className="w-full max-h-60 rounded-full bg-contain max-w-[250px]" src={member.imageUrl} alt="" />
                        <div className="flex flex-col items-center justify-center mt-4">
                            <h2 className="text-2xl">{member.name}</h2>
                            <p className="text-xl text-slate-400 whitespace-nowrap">{member.role}</p>
                            <a className="text-blue-900 mt-2" href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default TeamMembers