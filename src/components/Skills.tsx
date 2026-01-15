import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    'Python',
    'SQL',
    'GIS',
    'Data Visualization',
    'ETL',
    'GeoPandas',
    'Rasterio',
    'DuckDB',
    'PowerBI',
    'Excel',
    'ArcGIS Pro',
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="font-sans text-3xl font-bold mb-16 text-center text-[var(--foreground)]">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-base font-sans text-gray-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
