import React from "react";
import type { ResumeData, Contact } from "@resume/types";

export const ModernProfessional = ({ data }: { data: ResumeData }) => {
  return (
    <div
      className="resume-container w-[210mm] min-h-[297mm] mx-auto bg-white font-sans leading-relaxed text-slate-900 shadow-none print:shadow-none"
      style={{ padding: "1in" }}
    >
      {/* 1. NAME - TEXT_TYPE: NAME */}
      {data.blocks.map((block, idx) => {
        if (block.type === "header") {
          return (
            <div key={idx} className="mb-10 text-left">
              <h1 className="text-3xl font-bold uppercase tracking-tight mb-2">
                {block.data.fullName}
              </h1>
              {/* 2. CONTACT BLOCK - TEXT_TYPE: META_TEXT */}
              <div className="text-[12px] flex flex-wrap gap-x-5 gap-y-2 font-normal text-slate-700">
                {block.data.location && <span>{block.data.location}</span>}
                {block.data.contacts.map((contact: Contact, cIdx: number) => (
                  <span key={cIdx} className="flex items-center gap-2">
                    {cIdx > 0 && <span className="text-slate-400">•</span>}
                    {contact.value}
                  </span>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* 3. PROFESSIONAL SUMMARY - REQUIRED if experience > 5 years */}
      {data.blocks.map((block, idx) => {
        if (block.type === "summary") {
          return (
            <div key={idx} className="mb-8">
              <h2 className="text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-4 tracking-wider">
                Professional Summary
              </h2>
              <p className="text-[12px] leading-relaxed text-justify text-slate-700">
                {block.data as string}
              </p>
            </div>
          );
        }
        return null;
      })}

      {/* 4. EXPERIENCE - TEXT_TYPE: SECTION_HEADER */}
      {data.blocks.map((block, idx) => {
        if (block.type === "experience") {
          return (
            <div key={idx} className="mb-10">
              <h2 className="text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-6 tracking-wider">
                Experience
              </h2>
              <div className="space-y-6">
                {block.data.map((item, iIdx) => (
                  <div key={iIdx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-[13px] text-slate-900">
                        {item.jobTitle}
                      </h3>
                      <span className="text-[11px] font-bold uppercase text-slate-500">
                        {item.startDate} —{" "}
                        {item.isCurrent ? "Present" : item.endDate}
                      </span>
                    </div>
                    <div className="text-[12px] font-bold text-slate-700 mb-2">
                      {item.companyName}
                      {item.location && `, ${item.location}`}
                    </div>
                    <ul className="list-disc list-outside ml-5 text-[12px] text-slate-700 space-y-1.5">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="pl-1">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* 5. SKILLS - TEXT_TYPE: SECTION_HEADER */}
      {data.blocks.map((block, idx) => {
        if (block.type === "skills") {
          return (
            <div key={idx} className="mb-10">
              <h2 className="text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-5 tracking-wider">
                Skills
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {block.data.map((item, iIdx) => (
                  <div key={iIdx} className="text-[12px]">
                    <span className="font-bold text-slate-800 uppercase text-[11px] tracking-wide mr-2">
                      {item.category}:
                    </span>
                    <span className="text-slate-700">
                      {item.skills.join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* 6. EDUCATION */}
      {data.blocks.map((block, idx) => {
        if (block.type === "education") {
          return (
            <div key={idx} className="mb-10">
              <h2 className="text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-5 tracking-wider">
                Education
              </h2>
              <div className="space-y-4">
                {block.data.map((item, iIdx) => (
                  <div key={iIdx} className="flex justify-between text-[12px]">
                    <div>
                      <div className="font-bold text-slate-900 uppercase">
                        {item.degree}
                      </div>
                      <div className="text-slate-700 italic">
                        {item.institution}
                      </div>
                    </div>
                    <span className="font-bold text-slate-500">
                      {item.graduationYear}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* 7. CERTIFICATIONS (Optional) */}
      {data.blocks.map((block, idx) => {
        if (block.type === "certifications") {
          return (
            <div key={idx} className="mb-8">
              <h2 className="text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-4 tracking-wider">
                Certifications
              </h2>
              <ul className="list-disc list-outside ml-5 text-[12px] text-slate-700 space-y-1">
                {block.data.map((item, iIdx) => (
                  <li key={iIdx} className="pl-1">
                    <span className="font-bold">{item.name}</span> —{" "}
                    {item.issuer} ({item.year})
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return null;
      })}

      {/* Projects and Custom as extra V1 sections */}
      {data.blocks.map((block, idx) => {
        if (block.type === "projects") {
          return (
            <div key={idx} className="mb-8">
              <h2 className="text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-4 tracking-wider">
                Projects
              </h2>
              <div className="space-y-4">
                {block.data.map((item, iIdx) => (
                  <div key={iIdx}>
                    <h3 className="font-bold text-[13px] text-slate-900 mb-1">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-[11px] text-slate-600 mb-2">
                        {item.description}
                      </p>
                    )}
                    <ul className="list-disc list-outside ml-5 text-[12px] text-slate-700 space-y-1">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="pl-1">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        if (block.type === "custom") {
          return (
            <div key={idx} className="mb-8">
              <h2 className="text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-4 tracking-wider">
                {block.data.title}
              </h2>
              <div className="text-[12px] whitespace-pre-wrap text-slate-700 leading-relaxed">
                {block.data.content}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
