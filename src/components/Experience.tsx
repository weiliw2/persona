import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  duration,
  location,
  description,
}) => (
  <div className="mb-12">
    <h3 className="font-sans text-xl font-semibold text-[var(--foreground)]">{title}</h3>
    <p className="font-sans text-base text-gray-600 mt-1">{company} / {location}</p>
    <p className="font-sans text-sm text-gray-500 mt-1 mb-4">{duration}</p>
    <ul className="list-disc list-inside text-[var(--foreground)] space-y-2">
      {description.map((point, index) => (
        <li key={index} className="font-sans text-base leading-relaxed">
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Institute for Transportation & Development Policy (ITDP)",
      duration: "May–Aug 2025",
      location: "Washington, DC",
      description: [
        "Designed data infrastructure using Python/SQL pipelines to structure raw data on transport projects, producing econometrics-ready datasets for analyzing climate impact and efficacy of sustainable urban planning initiatives.",
        "Designed and deployed PowerBI/Excel dashboards for 8 global offices, automating data validation (QA) and transforming complex data into client-ready visuals to improve leadership visibility on project metrics and accelerate policy decision-making.",
        "Extended Monitoring and Evaluation analytical models (SCOPE calculators) by integrating economic, health, and accessibility metrics, supporting enhanced analysis of project trade-offs and CO2 emissions reduction potential; authored comprehensive documentation for reproducibility.",
      ],
    },
    {
      title: "Research Assistant",
      company: "Energy Data Analytics Lab",
      duration: "Aug 2024–Jun 2025",
      location: "Durham, NC",
      description: [
        "Developed Python/SQL geospatial ETL pipelines (GeoPandas, Rasterio, DuckDB) to convert GHSL building data into emissions estimation features for ClimateTRACE.",
        "Conducted validation and uncertainty analysis; produced memos and visual summaries supporting policy and quantitative assessments.",
      ],
    },
    {
      title: "GIS Analyst Intern",
      company: "Seattle City Light (City of Seattle)",
      duration: "Jun 2023–Jul 2024",
      location: "Seattle, WA",
      description: [
        "Delivered GIS analyses and data pipelines supporting distribution reliability; web maps/apps reduced data retrieval time by ~30% for operations teams.",
        "Consolidated 10 years of grid maintenance data in ArcGIS Pro, standardizing schemas and adding QA checks for reliability analysis.",
      ],
    },
    {
      title: "Research Assistant",
      company: "Urban Infrastructure Lab, University of Washington",
      duration: "May 2022–Feb 2023",
      location: "Seattle, WA",
      description: [
        "Evaluated solar PV+storage across 150+ buildings using ArcGIS Pro and Python; prepared scenario results for a 30-year solar plan (capacity, peak reduction, cost savings).",
      ],
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-8 max-w-4xl mx-auto bg-[var(--background)] text-[var(--foreground)]">
      <h2 className="font-sans text-3xl font-bold mb-16 text-center">
        Work Experience
      </h2>
      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
