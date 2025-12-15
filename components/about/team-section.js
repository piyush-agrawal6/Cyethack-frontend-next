import { Linkedin, Twitter, Github } from "lucide-react";

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
  ]

  const getSocialIcon = (platform) => {
    switch (platform) {
      case "twitter":
        return <Twitter className="w-5 h-5" />
      case "linkedin":
        return <Linkedin className="w-5 h-5" />
      case "github":
        return <Github className="w-5 h-5" />
      default:
        return null
    }
  }

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The experts dedicated to securing your digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
              {/* Image Placeholder with Gradient */}
              <div className="w-full aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-4xl font-bold opacity-20">{member.name.charAt(0)}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="font-bold text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium text-sm mb-4 uppercase tracking-wide">{member.position}</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{member.description}</p>

                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                  {member.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-gray-400 hover:text-green-600 transition-colors transform hover:scale-110"
                    >
                      {getSocialIcon(social)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
