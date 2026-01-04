import React from "react";
import type { ResumeData, Contact } from "@resume/types";

export const ATSMinimalist = ({ data }: { data: ResumeData }) => {
  return (
    <div
      className="resume-container w-[210mm] min-h-[297mm] mx-auto bg-white font-sans leading-tight text-black shadow-none print:shadow-none"
      style={{ padding: "1in" }}
    >
      {/* 1. NAME - TEXT_TYPE: NAME */}
      {data.blocks.map((block, idx) => {
        if (block.type === "header") {
          return (
            <div key={idx} className="mb-4">
              <h1 className="text-2xl font-bold uppercase tracking-tight mb-2 text-left">
                {block.data.fullName}
              </h1>
              {/* 2. CONTACT LINE - TEXT_TYPE: META_TEXT */}
              <div className="text-[11px] font-normal flex flex-wrap gap-x-3 gap-y-1 text-left">
                {block.data.location && (
                  <span className="text-slate-700">{block.data.location}</span>
                )}
                {block.data.location && (
                  <span className="text-slate-300">|</span>
                )}
                {block.data.contacts.map((contact: Contact, cIdx: number) => (
                  <React.Fragment key={cIdx}>
                    <span className="text-slate-700">{contact.value}</span>
                    {cIdx < block.data.contacts.length - 1 && (
                      <span className="text-slate-300">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}

      <div className="space-y-8">
        {data.blocks.map((block, idx) => {
          if (block.type === "header") return null;

          return (
            <div key={idx}>
              {/* 3. PROFESSIONAL SUMMARY (Optional) */}
              {block.type === "summary" && block.data && (
                <div className="mb-6">
                  <p className="text-[11px] leading-relaxed text-slate-700 italic border-l-2 border-slate-100 pl-4 py-1">
                    {block.data as string}
                  </p>
                </div>
              )}

              {/* 4. SKILLS - TEXT_TYPE: SECTION_HEADER */}
              {block.type === "skills" && (
                <div className="mb-6">
                  <h2 className="text-[12px] font-bold uppercase mb-2 border-b border-zinc-100 pb-0.5">
                    Skills
                  </h2>
                  <div className="space-y-1">
                    {block.data.map((item, iIdx) => (
                      <div key={iIdx} className="text-[11px] text-left">
                        <span className="font-bold">{item.category}:</span>{" "}
                        {item.skills.join(", ")}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. EXPERIENCE - TEXT_TYPE: SECTION_HEADER */}
              {block.type === "experience" && (
                <div className="mb-6">
                  <h2 className="text-[12px] font-bold uppercase mb-4 border-b-2 border-slate-100 pb-1 tracking-[0.05em]">
                    Experience
                  </h2>
                  <div className="space-y-6">
                    {block.data.map((item, iIdx) => (
                      <div key={iIdx}>
                        <div className="flex justify-between items-baseline mb-0.5">
                          <span className="text-[11px] font-bold uppercase tracking-tight text-slate-900">
                            {item.jobTitle}
                          </span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                            {item.startDate} — {item.endDate || "Present"}
                          </span>
                        </div>
                        <div className="text-[10px] font-bold text-slate-600 italic mb-2">
                          {item.companyName}
                        </div>
                        <ul className="list-disc list-outside ml-4 text-[11px] space-y-1">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="pl-1 text-left">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. PROJECTS (Optional) */}
              {block.type === "projects" && (
                <div className="mb-6">
                  <h2 className="text-[12px] font-bold uppercase mb-4 border-b-2 border-slate-100 pb-1 tracking-[0.05em] text-slate-800">
                    Projects
                  </h2>
                  <div className="space-y-4">
                    {block.data.map((item, iIdx) => (
                      <div key={iIdx}>
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="font-bold text-[11px] uppercase">
                            {item.name}
                          </h3>
                          {item.link && (
                            <span className="text-[10px] text-slate-500">
                              {item.link}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-[10px] text-slate-600 mb-2 italic">
                            {item.description}
                          </p>
                        )}
                        <ul className="list-disc list-outside ml-4 text-[11px] space-y-1">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="pl-1 text-left">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. EDUCATION */}
              {block.type === "education" && (
                <div className="mb-6">
                  <h2 className="text-[12px] font-bold uppercase mb-4 border-b-2 border-slate-100 pb-1 tracking-[0.05em] text-slate-800">
                    Education
                  </h2>
                  <div className="space-y-2">
                    {block.data.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="flex justify-between items-start text-[11px]"
                      >
                        <div>
                          <span className="font-bold uppercase">
                            {item.degree}
                          </span>{" "}
                          | {item.institution}
                          {item.gpa && (
                            <span className="italic"> (GPA: {item.gpa})</span>
                          )}
                        </div>
                        <span className="font-bold">{item.graduationYear}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications (Optional in V1 Spec) */}
              {block.type === "certifications" && (
                <div className="mb-6">
                  <h2 className="text-[12px] font-bold uppercase mb-2 border-b border-zinc-100 pb-0.5">
                    Certifications
                  </h2>
                  <div className="text-[11px]">
                    {block.data.map((item, iIdx) => (
                      <span key={iIdx}>
                        <span className="font-bold">{item.name}</span> (
                        {item.issuer}, {item.year})
                        {iIdx < block.data.length - 1 && (
                          <span className="mx-2">|</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Block */}
              {block.type === "custom" && (
                <div className="mb-6 border-l-2 border-zinc-100 pl-4 py-1">
                  <h2 className="text-[12px] font-bold uppercase mb-2">
                    {block.data.title}
                  </h2>
                  <div className="text-[11px] whitespace-pre-wrap text-left leading-relaxed">
                    {block.data.content}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
