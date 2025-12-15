import { Check, X } from "lucide-react";

export default function ComparisonTable() {
    const features = [
        {
            name: "Number of Scans",
            lite: "3 monthly scans",
            scanner: "Unlimited scans",
            agency: "Unlimited scans",
        },
        {
            name: "Authenticated Scans",
            lite: "Full coverage",
            scanner: "Full coverage",
            agency: "Full coverage",
        },
        {
            name: "Integrations",
            lite: "1 Integration",
            scanner: "Unlimited",
            agency: "Unlimited",
        },
        {
            name: "Pool of targets",
            lite: false,
            scanner: false,
            agency: "Flexibly change URLs",
        },
        {
            name: "Vetted Scans",
            lite: false,
            scanner: "Compliance view",
            agency: "4 Expert Vetted Scans",
        },
        {
            name: "Account Manager",
            lite: false,
            scanner: false,
            agency: true,
        },
    ];

    const renderValue = (value) => {
        if (value === true) return <Check className="w-5 h-5 text-green-600 mx-auto" />;
        if (value === false) return <X className="w-5 h-5 text-red-400 mx-auto" />;
        return <span className="text-gray-700 text-sm font-medium">{value}</span>;
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Compare Plans & Find the Right One</h2>
                </div>

                <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
                    <table className="w-full min-w-[800px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="py-6 px-6 text-left text-gray-900 font-bold w-1/4">Features</th>
                                <th className="py-6 px-6 text-center text-gray-900 font-bold w-1/4">Scanner Lite</th>
                                <th className="py-6 px-6 text-center text-green-600 font-bold w-1/4 bg-green-50/50">Scanner</th>
                                <th className="py-6 px-6 text-center text-gray-900 font-bold w-1/4">Scanner Agency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 text-gray-700 font-medium">{feature.name}</td>
                                    <td className="py-5 px-6 text-center">{renderValue(feature.lite)}</td>
                                    <td className="py-5 px-6 text-center bg-green-50/30">{renderValue(feature.scanner)}</td>
                                    <td className="py-5 px-6 text-center">{renderValue(feature.agency)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
