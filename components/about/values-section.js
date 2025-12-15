import { Shield, Lock, Eye, Zap, Users, Award } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      title: "Integrity",
      icon: Shield,
      description:
        "We uphold the highest standards of honesty and transparency in all our operations, ensuring trust is never compromised.",
    },
    {
      title: "Vigilance",
      icon: Eye,
      description:
        "Our team remains ever-watchful, constantly monitoring threats to provide proactive protection for your digital assets.",
    },
    {
      title: "Innovation",
      icon: Zap,
      description:
        "We leverage cutting-edge technology and creative strategies to stay ahead of evolving cyber threats.",
    },
    {
      title: "Confidentiality",
      icon: Lock,
      description:
        "Protecting your sensitive data is our priority. We ensure strict confidentiality in every engagement.",
    },
    {
      title: "Collaboration",
      icon: Users,
      description:
        "We work closely with our clients, acting as an extension of their team to build robust security postures.",
    },
    {
      title: "Excellence",
      icon: Award,
      description:
        "We are committed to delivering superior quality in our services, exceeding industry standards and client expectations.",
    },
  ];

  return (
    <section id="values" className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that drive our mission to secure the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
