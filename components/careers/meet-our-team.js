export default function MeetOurTeam() {
  const teamMembers = [
    {
      name: "Alice Johnson",
      position: "Lead Analyst",
      description: "Expert in threat detection and incident response to safeguard your digital assets.",
      socials: ["linkedin", "github", "twitter"],
    },
    {
      name: "Eric Smith",
      position: "Security Engineer",
      description: "Experienced in developing robust infrastructure security solutions and ensuring compliance.",
      socials: ["linkedin", "github", "twitter"],
    },
    {
      name: "Catherine Lee",
      position: "UX Designer",
      description: "Creates intuitive interfaces that balance security requirements with elegant designs.",
      socials: ["linkedin", "github", "twitter"],
    },
    {
      name: "David Brown",
      position: "Integration Officer",
      description: "Specializes in seamlessly integrating security protocols into business operations.",
      socials: ["linkedin", "github", "twitter"],
    },
    {
      name: "Eva Green",
      position: "Analytics Specialist",
      description: "Transforms complex security metrics and threat intelligence into actionable insights.",
      socials: ["linkedin", "github", "twitter"],
    },
    {
      name: "Frank White",
      position: "Risk Assessor",
      description: "Analyzes potential security risks and develops proactive mitigation strategies.",
      socials: ["linkedin", "github", "twitter"],
    },
    {
      name: "Grace Black",
      position: "Network Specialist",
      description: "Ensures network infrastructure remains secure and optimized for maximum performance.",
      socials: ["linkedin", "github", "twitter"],
    },
    {
      name: "Henry Adams",
      position: "Research Specialist",
      description: "Continuously explores emerging security threats and develops innovative defense mechanisms.",
      socials: ["linkedin", "github", "twitter"],
    },
  ];

  const getSocialIcon = (platform) => {
    switch (platform) {
      case "twitter":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
          </svg>
        );
      case "github":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        );
      default:
        return "";
    }
  };

  return (
     
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[64px] py-[64px] sm:py-[80px] lg:py-[112px]">
  <div className="flex flex-col gap-[48px] sm:gap-[64px] lg:gap-[80px]">
    {/* Heading Section */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[120%] font-bold text-black mb-2">
        Our Team
      </h2>
      <p className="text-base sm:text-lg text-black">
        Meet the experts dedicated to your security.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col bg-white rounded-lg shadow-md p-4 sm:p-6"
        >
          {/* Image Placeholder */}
          <div className="w-full aspect-square mb-4 rounded-lg overflow-hidden relative bg-gradient-to-r from-gray-400 to-gray-500">
            <div className="absolute inset-0 backdrop-blur-[20px] bg-white/10 flex items-center justify-center">
              <span className="text-white text-base sm:text-lg font-semibold">
                Founder Name
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-medium text-base sm:text-lg">
              {member.name}
            </h3>
            <p className="mb-2 text-[#00C853] text-sm sm:text-base">
              {member.position}
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mb-3">
              {member.description}
            </p>
            <div className="flex space-x-3 mt-auto justify-center">
              {member.socials.map((social, idx) => (
                <span key={idx} className="text-black">
                  {getSocialIcon(social)}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


   

  );
}
