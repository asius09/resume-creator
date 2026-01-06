import React from "react";
import type {
  ResumeData,
  Contact,
  ExperienceItem,
  SkillGroup,
  EducationItem,
  ProjectItem,
} from "@resume/types";

function formatContactLink(contact: Contact): string {
  switch (contact.type) {
    case "email":
      return `mailto:${contact.value}`;
    case "phone":
      return `tel:${contact.value.replace(/\s+/g, "")}`;
    case "linkedin":
    case "github":
    case "website":
      return contact.value.startsWith("http")
        ? contact.value
        : `https://${contact.value}`;
    default:
      return contact.value;
  }
}

export const ATSMinimalist = ({ data }: { data: ResumeData }) => {
  const headerBlock = data.blocks.find((b) => b.type === "header");
  const summaryBlock = data.blocks.find((b) => b.type === "summary");
  const experienceBlock = data.blocks.find((b) => b.type === "experience");
  const skillsBlock = data.blocks.find((b) => b.type === "skills");
  const educationBlock = data.blocks.find((b) => b.type === "education");
  const languagesBlock = data.blocks.find((b) => b.type === "languages");
  const personalBlock = data.blocks.find((b) => b.type === "personal");

  // Non-core but supported sections
  const projectsBlock = data.blocks.find((b) => b.type === "projects");
  const certsBlock = data.blocks.find((b) => b.type === "certifications");
  const customBlocks = data.blocks.filter((b) => b.type === "custom");

  return (
    <div
      className="resume-container w-[210mm] min-h-[297mm] mx-auto bg-white text-[#111] print:shadow-none"
      style={{
        padding: "20mm",
        fontFamily: "var(--font-inter), 'Helvetica', Arial, sans-serif",
      }}
    >
      {/* 1. Header (Identity) */}
      {headerBlock && headerBlock.type === "header" && (
        <div className="mb-8 text-center">
          <h1 className="text-[24px] font-bold uppercase tracking-tight mb-2">
            {headerBlock.data.fullName}
          </h1>
          <div className="text-[14px] leading-tight text-[#111] font-medium">
            {headerBlock.data.location && (
              <>
                <span>{headerBlock.data.location}</span>
                {(headerBlock.data.contacts as Contact[]).length > 0 && (
                  <span> | </span>
                )}
              </>
            )}
            {(headerBlock.data.contacts as Contact[]).map((c, i) => (
              <React.Fragment key={i}>
                <a
                  href={formatContactLink(c)}
                  className="hover:underline text-inherit no-underline"
                >
                  {c.value}
                </a>
                {i < (headerBlock.data.contacts as Contact[]).length - 1 && (
                  <span> | </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* 2. Professional Summary */}
      {summaryBlock && summaryBlock.type === "summary" && summaryBlock.data && (
        <div className="mb-8">
          <p className="text-[14px] leading-relaxed">
            {summaryBlock.data as string}
          </p>
        </div>
      )}

      {/* 3. Work Experience */}
      {experienceBlock && experienceBlock.type === "experience" && (
        <div className="mb-8">
          <h2 className="text-[15px] font-bold uppercase border-b border-[#ddd] mb-4 pb-1 tracking-widest">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {(experienceBlock.data as ExperienceItem[]).map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-1">
                  <div className="text-[14px] font-bold">
                    <span className="uppercase">{item.jobTitle}</span> —{" "}
                    {item.companyName}
                  </div>
                  <div className="text-[13px] font-bold text-[#444]">
                    {item.startDate} – {item.endDate || "Present"}
                  </div>
                </div>
                <ul className="list-disc list-outside ml-5 text-[14px] space-y-1.5 text-[#111]">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="pl-1 leading-normal">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Skills */}
      {skillsBlock && skillsBlock.type === "skills" && (
        <div className="mb-8">
          <h2 className="text-[15px] font-bold uppercase border-b border-[#ddd] mb-3 pb-1 tracking-widest">
            Skills & Competencies
          </h2>
          <div className="space-y-2">
            {(skillsBlock.data as SkillGroup[]).map((item, idx) => (
              <div key={idx} className="text-[14px] leading-normal">
                <span className="font-bold">{item.category}:</span>{" "}
                {item.skills.join(", ")}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Education */}
      {educationBlock && educationBlock.type === "education" && (
        <div className="mb-8">
          <h2 className="text-[15px] font-bold uppercase border-b border-[#ddd] mb-3 pb-1 tracking-widest">
            Education
          </h2>
          <div className="space-y-4">
            {(educationBlock.data as EducationItem[]).map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-baseline text-[14px]"
              >
                <div>
                  <span className="font-bold uppercase">{item.degree}</span> —{" "}
                  {item.institution}
                  {item.gpa && <span> (GPA: {item.gpa})</span>}
                </div>
                <div className="font-bold text-[#444]">
                  {item.graduationYear}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Languages (Additional Info) */}
      {languagesBlock && languagesBlock.type === "languages" && (
        <div className="mb-8">
          <h2 className="text-[15px] font-bold uppercase border-b border-[#ddd] mb-3 pb-1 tracking-widest">
            Languages
          </h2>
          <div className="text-[14px] flex flex-wrap gap-x-6">
            {(languagesBlock.data as any[]).map((item, idx) => (
              <div key={idx}>
                <span className="font-bold">{item.language}:</span>{" "}
                {item.proficiency}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. Personal Details */}
      {personalBlock && personalBlock.type === "personal" && (
        <div className="mb-8">
          <h2 className="text-[15px] font-bold uppercase border-b border-[#ddd] mb-3 pb-1 tracking-widest">
            Personal Details
          </h2>
          <div className="grid grid-cols-2 gap-y-1 text-[14px]">
            <div>
              <span className="font-bold">Date of Birth:</span>{" "}
              {personalBlock.data.dateOfBirth}
            </div>
            <div>
              <span className="font-bold">Gender:</span>{" "}
              {personalBlock.data.gender}
            </div>
            <div>
              <span className="font-bold">Father's Name:</span>{" "}
              {personalBlock.data.fatherName}
            </div>
            <div>
              <span className="font-bold">Marital Status:</span>{" "}
              {personalBlock.data.maritalStatus}
            </div>
            <div>
              <span className="font-bold">Nationality:</span>{" "}
              {personalBlock.data.nationality}
            </div>
          </div>
        </div>
      )}

      {/* Optional: Projects */}
      {projectsBlock && projectsBlock.type === "projects" && (
        <div className="mb-8">
          <h2 className="text-[15px] font-bold uppercase border-b border-[#ddd] mb-4 pb-1 tracking-widest">
            Key Projects
          </h2>
          <div className="space-y-5">
            {(projectsBlock.data as ProjectItem[]).map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-1">
                  <div className="text-[14px] font-bold uppercase">
                    {item.link ? (
                      <a
                        href={item.link}
                        className="hover:underline text-inherit no-underline"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </div>
                  {item.dates && (
                    <div className="text-[13px] font-bold text-[#444]">
                      {item.dates}
                    </div>
                  )}
                </div>
                {item.description && (
                  <p className="text-[14px] mb-2 italic text-[#334155] leading-normal">
                    {item.description}
                  </p>
                )}
                <ul className="list-disc list-outside ml-5 text-[14px] space-y-1.5 text-[#111]">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="pl-1 leading-normal">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optional: Certifications */}
      {certsBlock && certsBlock.type === "certifications" && (
        <div className="mb-8">
          <h2 className="text-[15px] font-bold uppercase border-b border-[#ddd] mb-3 pb-1 tracking-widest">
            Certifications
          </h2>
          <div className="text-[14px] leading-normal space-y-1">
            {(certsBlock.data as any[]).map((item, idx) => (
              <div key={idx}>
                <span className="font-bold">{item.name}</span> — {item.issuer} (
                {item.year})
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optional: Custom */}
      {customBlocks.map((block, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-[15px] font-bold uppercase border-b border-[#ddd] mb-2 pb-1 tracking-widest">
            {(block.data as any).title}
          </h2>
          <div className="text-[14px] whitespace-pre-wrap leading-normal">
            {(block.data as any).content}
          </div>
        </div>
      ))}
    </div>
  );
};
