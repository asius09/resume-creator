"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/cn";
import {
  ATSMinimalist,
  ModernProfessional,
  InternationalFormat,
} from "@resume/ui";
import type { ResumeData } from "@resume/types";

interface ResumePreviewProps {
  data: ResumeData;
  activeLayout: "minimalist" | "professional" | "international";
}

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, activeLayout }, ref) => {
    return (
      <div className={cn(
        "w-full relative flex justify-center bg-zinc-100/50 py-12 lg:py-20 min-h-screen overflow-x-hidden transition-colors duration-500",
        "custom-scrollbar"
      )}>
        {/* Page Markers - Only visible on larger screens */}
        <div className="absolute left-4 lg:left-8 top-[100px] h-full pointer-events-none hidden md:flex flex-col gap-0 select-none">
          {[1, 2, 3, 4, 5].map((page) => (
            <div 
              key={page} 
              style={{ height: '297mm' }} 
              className="relative border-l border-zinc-200 ml-4 lg:ml-12"
            >
              <div className="absolute -left-3 top-0 w-6 h-px bg-zinc-300" />
              <span className="absolute -left-16 top-4 text-[9px] font-black uppercase text-zinc-400 rotate-90 origin-right tracking-[0.2em] opacity-50">
                PAGE {page}
              </span>
            </div>
          ))}
        </div>

        <div
          id="resume-preview"
          className={cn(
            "transform-gpu origin-top transition-all duration-700 h-fit",
            "scale-[0.55] sm:scale-[0.8] lg:scale-[0.9] xl:scale-[1]",
            "shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_20px_50px_-10px_rgba(0,0,0,0.1),0_10px_30px_-15px_rgba(0,0,0,0.05)]",
            "hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_30px_70px_-10px_rgba(0,0,0,0.15),0_15px_40px_-15px_rgba(0,0,0,0.1)]",
          )}
        >
          <div className="relative group/resume">
            {activeLayout === "minimalist" && <ATSMinimalist data={data} ref={ref} />}
            {activeLayout === "professional" && <ModernProfessional data={data} ref={ref} />}
            {activeLayout === "international" && <InternationalFormat data={data} ref={ref} />}
            
            {/* Seamless Page Break Overlay (Web-only) */}
            <div className="absolute inset-0 pointer-events-none no-print">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(to bottom, transparent 296.8mm, #e5e7eb 296.8mm, #e5e7eb 297mm, transparent 297mm)`,
                  backgroundSize: '100% 297mm',
                  backgroundRepeat: 'repeat-y'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ResumePreview.displayName = "ResumePreview";

