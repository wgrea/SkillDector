// src/components/data-sourcing.tsx

import React from "react";

const industryPartners = [
  { name: "Tech Alliance", logo: "/logos/tech-alliance.png", description: "Leading organization for emerging tech standards." },
  { name: "SkillNet", logo: "/logos/skillnet.png", description: "Global database for in-demand job skills." },
  { name: "InnovateX", logo: "/logos/innovatex.png", description: "AI-powered trend analysis for workforce development." },
];

const DataSourcing: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">🔍 Data Transparency & Sourcing</h2>
      <p className="text-gray-700">
        Our skill data is sourced from trusted industry reports, API integrations, and direct employer insights. 
        We ensure accuracy by validating trends across multiple sources and updating regularly.
      </p>

      <h3 className="text-lg font-semibold mt-6">🌐 Industry Partnerships</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {industryPartners.map((partner, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            <img src={partner.logo} alt={partner.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h4 className="font-medium">{partner.name}</h4>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSourcing;
