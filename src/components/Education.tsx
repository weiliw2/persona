import React from 'react';

interface EducationItemProps {
  degree: string;
  university: string;
  duration: string;
  location: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  university,
  duration,
  location,
}) => (
  <div className="mb-8">
    <h3 className="font-sans text-xl font-semibold text-[var(--foreground)]">{degree}</h3>
    <p className="font-sans text-base text-gray-600 mt-1">{university} / {location}</p>
    <p className="font-sans text-sm text-gray-500 mt-1">{duration}</p>
  </div>
);

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Environmental Management",
      university: "Duke University",
      duration: "Aug 2024 – May 2026",
      location: "Durham, NC",
    },
    {
      degree: "Bachelor of Science: Geography and Data Science",
      university: "University of Washington",
      duration: "Sep 2020 – Jun 2024",
      location: "Seattle, WA",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-8 max-w-4xl mx-auto bg-[var(--background)] text-[var(--foreground)]">
      <h2 className="font-sans text-3xl font-bold mb-16 text-center">
        Education
      </h2>
      <div>
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
