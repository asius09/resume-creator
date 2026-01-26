"use client";

import NextImage from "next/image";
import {
  Download,
  Trash2,
  ChevronDown,
  Cloud,
  Files,
  ArrowRight,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import type { ResumeData } from "@resume/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface HeaderProps {
  resumeName: string;
  onResumeNameChange: (name: string) => void;
  activeLayout: string;
  onLayoutChange: (
    layout: "minimalist" | "professional" | "international",
  ) => void;
  onExportPDF: () => void;
  resumes: Record<string, ResumeData>;
  activeId: string | null;
  onSelectVersion: (id: string) => void;
  onCreateNewVersion: () => void;
  onDeleteVersion: (id: string) => void;
  isSaving?: boolean;
}

export function Header({
  resumeName,
  onResumeNameChange,
  activeLayout,
  onLayoutChange,
  onExportPDF,
  resumes,
  activeId,
  onSelectVersion,
  onCreateNewVersion,
  onDeleteVersion,
  isSaving,
}: HeaderProps) {
  return (
    <header
      className={cn(
        "no-print",
        "sticky",
        "top-0",
        "z-50",
        "bg-white/80",
        "backdrop-blur-xl",
        "border-b",
        "border-zinc-100",
        "px-6",
        "py-4",
        "flex",
        "items-center",
        "justify-between",
        "gap-4",
      )}
    >
      <div className={cn("flex", "items-center", "gap-4", "min-w-0")}>
        <div className={cn("relative", "group")}>
          <div
            className={cn(
              "absolute",
              "-inset-1",
              "bg-linear-to-r",
              "from-zinc-200",
              "to-zinc-100",
              "rounded-lg",
              "blur",
              "opacity-25",
              "group-hover:opacity-100",
              "transition",
              "duration-1000",
              "group-hover:duration-200",
            )}
          ></div>
          <NextImage
            src="/logo.svg"
            alt="Resume: Zero Logo"
            width={32}
            height={32}
            className={cn(
              "relative",
              "rounded-lg",
              "border",
              "border-zinc-200",
              "shadow-sm",
            )}
          />
        </div>
        <div
          className={cn(
            "h-6",
            "w-px",
            "bg-zinc-200",
            "mx-1",
            "hidden",
            "sm:block",
          )}
        />
        <div className={cn("flex", "flex-col")}>
          <div className={cn("flex", "items-center", "gap-2")}>
            <h1
              className={cn(
                "text-sm",
                "font-bold",
                "tracking-tighter",
                "text-zinc-900",
                "leading-none",
              )}
            >
              RESUME:ZERO
            </h1>
            <span className={cn("text-zinc-200", "font-light")}>/</span>
            <input
              className={cn(
                "text-sm",
                "font-medium",
                "text-zinc-600",
                "bg-transparent",
                "border-none",
                "p-0",
                "focus:ring-0",
                "focus:text-zinc-900",
                "transition-colors",
                "truncate",
              )}
              maxLength={20}
              style={{ width: `${Math.max((resumeName || "").length, 4) + 1}ch` }}
              value={resumeName || ""}
              onChange={(e) => onResumeNameChange(e.target.value)}
              placeholder="Untitled"
            />
          </div>
        </div>

        <div
          className={cn(
            "h-6",
            "w-px",
            "bg-zinc-200",
            "mx-1",
            "hidden",
            "md:block",
          )}
        />

        <div className={cn("hidden", "md:flex", "items-center", "gap-3")}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-2 px-3 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 transition-all group"
              >
                <Files size={14} className="group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Versions
                </span>
                <ChevronDown size={12} className="opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 p-1">
              <DropdownMenuLabel className="text-[10px] uppercase tracking-widest text-zinc-400 px-3 py-2">
                Resumes
              </DropdownMenuLabel>
              <div className="max-h-[300px] overflow-y-auto">
                {Object.values(resumes).map((r) => (
                  <DropdownMenuItem
                    key={r.id}
                    className={cn(
                      "flex items-center justify-between group cursor-pointer rounded-md px-3 py-2.5",
                      activeId === r.id ? "bg-zinc-100" : "hover:bg-zinc-50"
                    )}
                    onClick={() => onSelectVersion(r.id)}
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className={cn(
                        "text-xs font-semibold truncate",
                        activeId === r.id ? "text-zinc-900" : "text-zinc-600"
                      )}>
                        {r.metadata.name || "Untitled"}
                      </span>
                      <span className="text-[9px] text-zinc-400 font-medium">
                        Modified {new Date(r.metadata.lastModified).toLocaleDateString()}
                      </span>
                    </div>
                    {activeId === r.id ? (
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                    ) : (
                      <ArrowRight size={12} className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="gap-2 cursor-pointer py-2.5 rounded-md text-zinc-600 hover:text-zinc-900"
                onClick={onCreateNewVersion}
              >
                <Plus size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Create Duplicate</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="gap-2 cursor-pointer py-2.5 rounded-md text-red-500 hover:text-red-600 hover:bg-red-50"
                onClick={() => activeId && onDeleteVersion(activeId)}
              >
                <Trash2 size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Delete Current</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auto-save Status */}
          <div className="flex items-center gap-2 text-zinc-400">
            <div className="h-4 w-px bg-zinc-100 mx-1" />
            {isSaving ? (
              <div className="flex items-center gap-1.5 animate-pulse">
                <Cloud size={14} className="text-zinc-400" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                  Saving...
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Cloud size={14} className="text-zinc-300" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-300">
                  Saved
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={cn("flex", "items-center", "gap-6", "flex-shrink-0")}>
        <Tabs
          value={activeLayout}
          onValueChange={(v) =>
            onLayoutChange(
              v as "minimalist" | "professional" | "international",
            )
          }
          className="hidden md:block"
        >
          <TabsList className="bg-zinc-50 border border-zinc-200 rounded-full h-9 px-1">
            {(["minimalist", "professional", "international"] as const).map(
              (t) => (
                <TabsTrigger
                  key={t}
                  value={t}
                  className="rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm transition-all"
                >
                  {t}
                </TabsTrigger>
              ),
            )}
          </TabsList>
        </Tabs>

        <div className={cn("flex", "items-center", "gap-2")}>
          <Button
            size="sm"
            onClick={onExportPDF}
            className={cn("gap-2", "rounded-full font-medium")}
          >
            <Download size={14} />
            <span className={cn("md:block", "hidden")}>Export PDF</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
