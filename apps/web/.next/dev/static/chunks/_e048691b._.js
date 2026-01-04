(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/ui/layouts/ATSMinimalist.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATSMinimalist",
    ()=>ATSMinimalist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const ATSMinimalist = ({ data })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "resume-container w-[210mm] min-h-[297mm] mx-auto bg-white font-sans leading-tight text-black shadow-none print:shadow-none",
        style: {
            padding: "1in"
        },
        children: [
            data.blocks.map((block, idx)=>{
                if (block.type === "header") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold uppercase tracking-tight mb-2 text-left",
                                children: block.data.fullName
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                lineNumber: 15,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-normal flex flex-wrap gap-x-3 gap-y-1 text-left",
                                children: [
                                    block.data.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-700",
                                        children: block.data.location
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 21,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    block.data.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-300",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 24,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    block.data.contacts.map((contact, cIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-700",
                                                    children: contact.value
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                cIdx < block.data.contacts.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300",
                                                    children: "|"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, cIdx, true, {
                                            fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                            lineNumber: 27,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return null;
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: data.blocks.map((block, idx)=>{
                    if (block.type === "header") return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            block.type === "summary" && block.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] leading-relaxed text-slate-700 italic border-l-2 border-slate-100 pl-4 py-1",
                                    children: block.data
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                    lineNumber: 50,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "skills" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[12px] font-bold uppercase mb-2 border-b border-zinc-100 pb-0.5",
                                        children: "Skills"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: [
                                                            item.category,
                                                            ":"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    item.skills.join(", ")
                                                ]
                                            }, iIdx, true, {
                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                lineNumber: 64,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "experience" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[12px] font-bold uppercase mb-4 border-b-2 border-slate-100 pb-1 tracking-[0.05em]",
                                        children: "Experience"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-baseline mb-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] font-bold uppercase tracking-tight text-slate-900",
                                                                children: item.jobTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-black text-slate-400 uppercase tracking-wider",
                                                                children: [
                                                                    item.startDate,
                                                                    " — ",
                                                                    item.endDate || "Present"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-bold text-slate-600 italic mb-2",
                                                        children: item.companyName
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-outside ml-4 text-[11px] space-y-1",
                                                        children: item.bullets.map((bullet, bIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "pl-1 text-left",
                                                                children: bullet
                                                            }, bIdx, false, {
                                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, iIdx, true, {
                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                lineNumber: 81,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                lineNumber: 75,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[12px] font-bold uppercase mb-4 border-b-2 border-slate-100 pb-1 tracking-[0.05em] text-slate-800",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 109,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-baseline mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-[11px] uppercase",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            item.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-500",
                                                                children: item.link
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-slate-600 mb-2 italic",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-outside ml-4 text-[11px] space-y-1",
                                                        children: item.bullets.map((bullet, bIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "pl-1 text-left",
                                                                children: bullet
                                                            }, bIdx, false, {
                                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, iIdx, true, {
                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                lineNumber: 114,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                lineNumber: 108,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "education" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[12px] font-bold uppercase mb-4 border-b-2 border-slate-100 pb-1 tracking-[0.05em] text-slate-800",
                                        children: "Education"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold uppercase",
                                                                children: item.degree
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            "| ",
                                                            item.institution,
                                                            item.gpa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "italic",
                                                                children: [
                                                                    " (GPA: ",
                                                                    item.gpa,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: item.graduationYear
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, iIdx, true, {
                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                lineNumber: 151,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 149,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                lineNumber: 145,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "certifications" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[12px] font-bold uppercase mb-2 border-b border-zinc-100 pb-0.5",
                                        children: "Certifications"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 174,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px]",
                                        children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " (",
                                                    item.issuer,
                                                    ", ",
                                                    item.year,
                                                    ")",
                                                    iIdx < block.data.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mx-2",
                                                        children: "|"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, iIdx, true, {
                                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                                lineNumber: 179,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 177,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                lineNumber: 173,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 border-l-2 border-zinc-100 pl-4 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[12px] font-bold uppercase mb-2",
                                        children: block.data.title
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 194,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] whitespace-pre-wrap text-left leading-relaxed",
                                        children: block.data.content
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                        lineNumber: 197,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                                lineNumber: 193,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/layouts/ATSMinimalist.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ATSMinimalist;
var _c;
__turbopack_context__.k.register(_c, "ATSMinimalist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/layouts/ModernProfessional.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModernProfessional",
    ()=>ModernProfessional
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ModernProfessional = ({ data })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "resume-container w-[210mm] min-h-[297mm] mx-auto bg-white font-sans leading-relaxed text-slate-900 shadow-none print:shadow-none",
        style: {
            padding: "1in"
        },
        children: [
            data.blocks.map((block, idx)=>{
                if (block.type === "header") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10 text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold uppercase tracking-tight mb-2",
                                children: block.data.fullName
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 15,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] flex flex-wrap gap-x-5 gap-y-2 font-normal text-slate-700",
                                children: [
                                    block.data.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: block.data.location
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                        lineNumber: 20,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    block.data.contacts.map((contact, cIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                cIdx > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 34
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                contact.value
                                            ]
                                        }, cIdx, true, {
                                            fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                            lineNumber: 22,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return null;
            }),
            data.blocks.map((block, idx)=>{
                if (block.type === "summary") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-4 tracking-wider",
                                children: "Professional Summary"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] leading-relaxed text-justify text-slate-700",
                                children: block.data
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return null;
            }),
            data.blocks.map((block, idx)=>{
                if (block.type === "experience") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-6 tracking-wider",
                                children: "Experience"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-baseline mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-[13px] text-slate-900",
                                                        children: item.jobTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-bold uppercase text-slate-500",
                                                        children: [
                                                            item.startDate,
                                                            " —",
                                                            " ",
                                                            item.isCurrent ? "Present" : item.endDate
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                lineNumber: 62,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[12px] font-bold text-slate-700 mb-2",
                                                children: [
                                                    item.companyName,
                                                    item.location && `, ${item.location}`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                lineNumber: 71,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-outside ml-5 text-[12px] text-slate-700 space-y-1.5",
                                                children: item.bullets.map((bullet, bIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "pl-1",
                                                        children: bullet
                                                    }, bIdx, false, {
                                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                lineNumber: 75,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, iIdx, true, {
                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return null;
            }),
            data.blocks.map((block, idx)=>{
                if (block.type === "skills") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-5 tracking-wider",
                                children: "Skills"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-2",
                                children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[12px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-800 uppercase text-[11px] tracking-wide mr-2",
                                                children: [
                                                    item.category,
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-700",
                                                children: item.skills.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                lineNumber: 105,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, iIdx, true, {
                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return null;
            }),
            data.blocks.map((block, idx)=>{
                if (block.type === "education") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-5 tracking-wider",
                                children: "Education"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-[12px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-slate-900 uppercase",
                                                        children: item.degree
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-700 italic",
                                                        children: item.institution
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-500",
                                                children: item.graduationYear
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                lineNumber: 136,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, iIdx, true, {
                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                        lineNumber: 127,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return null;
            }),
            data.blocks.map((block, idx)=>{
                if (block.type === "certifications") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-4 tracking-wider",
                                children: "Certifications"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc list-outside ml-5 text-[12px] text-slate-700 space-y-1",
                                children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "pl-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " —",
                                            " ",
                                            item.issuer,
                                            " (",
                                            item.year,
                                            ")"
                                        ]
                                    }, iIdx, true, {
                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                        lineNumber: 158,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                        lineNumber: 152,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return null;
            }),
            data.blocks.map((block, idx)=>{
                if (block.type === "projects") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-4 tracking-wider",
                                children: "Projects"
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-[13px] text-slate-900 mb-1",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                lineNumber: 181,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-600 mb-2",
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                lineNumber: 185,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-outside ml-5 text-[12px] text-slate-700 space-y-1",
                                                children: item.bullets.map((bullet, bIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "pl-1",
                                                        children: bullet
                                                    }, bIdx, false, {
                                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                                lineNumber: 189,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, iIdx, true, {
                                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                        lineNumber: 180,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                        lineNumber: 174,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (block.type === "custom") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[14px] font-bold uppercase border-b-2 border-slate-900 pb-1 mb-4 tracking-wider",
                                children: block.data.title
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] whitespace-pre-wrap text-slate-700 leading-relaxed",
                                children: block.data.content
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
                        lineNumber: 204,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return null;
            })
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/layouts/ModernProfessional.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ModernProfessional;
var _c;
__turbopack_context__.k.register(_c, "ModernProfessional");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/layouts/InternationalFormat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternationalFormat",
    ()=>InternationalFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const InternationalFormat = ({ data })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "resume-container w-[210mm] min-h-[297mm] mx-auto bg-white font-serif leading-relaxed text-black shadow-none print:shadow-none",
        style: {
            padding: "1in"
        },
        children: [
            data.blocks.map((block, idx)=>{
                if (block.type === "header") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10 text-left border-b-2 border-slate-900 pb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-normal mb-2 tracking-widest uppercase",
                                children: block.data.fullName
                            }, void 0, false, {
                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                lineNumber: 18,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] flex flex-col gap-1 font-medium text-slate-800",
                                children: [
                                    block.data.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: block.data.location
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 23,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    block.data.contacts.map((contact, cIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold opacity-60",
                                                    children: [
                                                        contact.label || contact.type,
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                contact.value
                                            ]
                                        }, cIdx, true, {
                                            fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                            lineNumber: 25,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return null;
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: data.blocks.map((block, idx)=>{
                    if (block.type === "header") return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            block.type === "summary" && block.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[16px] font-bold border-b-2 border-slate-900 pb-1 mb-4 uppercase tracking-wider",
                                        children: "Professional Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 48,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] text-justify leading-relaxed text-slate-900 italic",
                                        children: block.data
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 51,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                lineNumber: 47,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "skills" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[16px] font-bold border-b-2 border-slate-900 pb-1 mb-4 uppercase tracking-wider",
                                        children: "Core Skills"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 60,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[13px] grid grid-cols-[160px_1fr] gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-black uppercase text-[11px] tracking-wide pt-0.5",
                                                        children: item.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-900 font-medium leading-relaxed",
                                                        children: item.skills.join(", ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, iIdx, true, {
                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                lineNumber: 65,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 63,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                lineNumber: 59,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "experience" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[16px] font-bold border-b-2 border-slate-900 pb-1 mb-5 uppercase tracking-wider",
                                        children: "Professional Experience"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 84,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-8",
                                        children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between font-bold text-[14px] mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "uppercase",
                                                                children: item.jobTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[12px] font-bold text-slate-600 uppercase",
                                                                children: [
                                                                    item.startDate.toUpperCase(),
                                                                    " —",
                                                                    " ",
                                                                    item.isCurrent ? "PRESENT" : item.endDate?.toUpperCase() || "PRESENT"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center text-[13px] mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold italic text-slate-800",
                                                                children: item.companyName
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            item.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500 font-medium italic",
                                                                children: item.location
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-outside ml-6 text-[13px] text-slate-900 space-y-2",
                                                        children: item.bullets.map((bullet, bIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "pl-1 leading-relaxed",
                                                                children: bullet
                                                            }, bIdx, false, {
                                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, iIdx, true, {
                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                lineNumber: 89,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 87,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "education" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[16px] font-bold border-b-2 border-slate-900 pb-1 mb-5 uppercase tracking-wider",
                                        children: "Education"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start text-[14px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold uppercase tracking-tight",
                                                                children: item.institution
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-slate-800 italic text-[13px] mt-1",
                                                                children: item.degree
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            item.gpa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] font-bold text-slate-500 mt-1",
                                                                children: [
                                                                    "Grade: ",
                                                                    item.gpa
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[12px] text-slate-700",
                                                        children: item.graduationYear
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, iIdx, true, {
                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                lineNumber: 130,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 128,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                lineNumber: 124,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "certifications" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[16px] font-bold border-b border-zinc-300 pb-1 mb-4 uppercase tracking-wider",
                                        children: "Certifications & Training"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-[13px]",
                                        children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-l border-zinc-200 pl-4 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold uppercase mb-1",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-600 text-[11px] uppercase tracking-wide",
                                                        children: [
                                                            item.issuer,
                                                            " • ",
                                                            item.year
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, iIdx, true, {
                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                lineNumber: 164,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                lineNumber: 158,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[16px] font-bold border-b border-zinc-300 pb-1 mb-4 uppercase tracking-wider",
                                        children: "Key Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 182,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between font-bold text-[14px] mb-1 uppercase",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            item.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal text-[11px] text-slate-500 normal-case",
                                                                children: item.link
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[12px] mb-2 font-bold italic text-slate-700",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-outside ml-6 text-[13px] text-slate-900 space-y-2",
                                                        children: item.bullets.map((bullet, bIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "pl-1",
                                                                children: bullet
                                                            }, bIdx, false, {
                                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, iIdx, true, {
                                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                                lineNumber: 187,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 185,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                lineNumber: 181,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.type === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[16px] font-bold border-b border-zinc-300 pb-1 mb-3 uppercase tracking-wider",
                                        children: block.data.title
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 216,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] whitespace-pre-wrap leading-relaxed italic text-slate-800",
                                        children: block.data.content
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                        lineNumber: 219,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                                lineNumber: 215,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/layouts/InternationalFormat.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = InternationalFormat;
var _c;
__turbopack_context__.k.register(_c, "InternationalFormat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$layouts$2f$ATSMinimalist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/layouts/ATSMinimalist.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$layouts$2f$ModernProfessional$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/layouts/ModernProfessional.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$layouts$2f$InternationalFormat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/layouts/InternationalFormat.tsx [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/cleaner/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_VERBS",
    ()=>ACTION_VERBS,
    "FLUFF_WORDS",
    ()=>FLUFF_WORDS,
    "WEAK_PHRASES_MAP",
    ()=>WEAK_PHRASES_MAP
]);
const ACTION_VERBS = {
    leadership: [
        'Led',
        'Managed',
        'Supervised',
        'Directed',
        'Orchestrated',
        'Spearheaded',
        'Coordinated',
        'Mentored',
        'Guided',
        'Chaired'
    ],
    achievement: [
        'Built',
        'Created',
        'Designed',
        'Launched',
        'Developed',
        'Implemented',
        'Established',
        'Pioneered',
        'Engineered',
        'Architected'
    ],
    efficiency: [
        'Improved',
        'Optimized',
        'Streamlined',
        'Accelerated',
        'Enhanced',
        'Revamped',
        'Transformed',
        'Maximized',
        'Minimized',
        'Reduced'
    ],
    analytical: [
        'Analyzed',
        'Evaluated',
        'Researched',
        'Investigated',
        'Diagnosed',
        'Identified',
        'Measured',
        'Verified',
        'Tested',
        'Audited'
    ],
    communication: [
        'Collaborated',
        'Negotiated',
        'Presented',
        'Advocated',
        'Authored',
        'Persuaded',
        'Published',
        'Consulted',
        'Liaised',
        'Represented'
    ]
};
const FLUFF_WORDS = [
    'Passionate',
    'Hardworking',
    'Dynamic',
    'Self-motivated',
    'Team player',
    'Result-oriented',
    'Detail-oriented',
    'Quick learner',
    'Strategic thinker',
    'Responsible for',
    'Worked on',
    'Helped with',
    'Involved in',
    'Assisted in',
    'Participated in',
    'Duties included',
    'Strong communication skills'
];
const WEAK_PHRASES_MAP = {
    'worked on': 'developed',
    'helped with': 'collaborated on',
    'responsible for': 'led',
    'involved in': 'executed',
    'assisted in': 'implemented',
    'participated in': 'contributed to',
    'duties included': 'managed'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/cleaner/engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeBullet",
    ()=>analyzeBullet,
    "cleanText",
    ()=>cleanText,
    "normalizeBullet",
    ()=>normalizeBullet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/cleaner/constants.ts [app-client] (ecmascript)");
;
function cleanText(text) {
    let cleaned = text.trim();
    // Remove fluff words (case-insensitive)
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLUFF_WORDS"].forEach((word)=>{
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        cleaned = cleaned.replace(regex, '');
    });
    // Replace weak phrases
    Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEAK_PHRASES_MAP"]).forEach(([weak, strong])=>{
        const regex = new RegExp(`\\b${weak}\\b`, 'gi');
        cleaned = cleaned.replace(regex, strong);
    });
    // Basic whitespace cleanup
    cleaned = cleaned.replace(/\s{2,}/g, ' ').trim();
    return cleaned;
}
function normalizeBullet(bullet) {
    let cleaned = cleanText(bullet);
    // Capitalize first letter
    if (cleaned.length > 0) {
        cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    }
    // Ensure it ends with a period if it's long enough
    if (cleaned.length > 10 && !cleaned.endsWith('.')) {
        cleaned += '.';
    }
    return cleaned;
}
function analyzeBullet(bullet) {
    const hints = [];
    const lowerBullet = bullet.toLowerCase();
    // Check for impact (numbers)
    if (!/\d+%|\d+\s?x|\$|million|billion|thousand/i.test(bullet)) {
        hints.push({
            type: 'suggestion',
            message: 'Consider adding quantifiable results (e.g., %, $, numbers).'
        });
    }
    // Check for length
    if (bullet.split(' ').length > 25) {
        hints.push({
            type: 'warning',
            message: 'This bullet is quite long. Try to keep it concise (under 20 words).'
        });
    }
    // Check for weak start
    const weakStarts = [
        'responsible for',
        'worked on',
        'helped',
        'assisted',
        'managed'
    ];
    if (weakStarts.some((weak)=>lowerBullet.startsWith(weak))) {
        hints.push({
            type: 'suggestion',
            message: 'Start with a stronger action verb (e.g., Orchestrated, Spearheaded, Optimized).'
        });
    }
    return hints;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/cleaner/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/cleaner/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/cleaner/constants.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResumeCleanerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-triangle.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$layouts$2f$ATSMinimalist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/layouts/ATSMinimalist.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$layouts$2f$ModernProfessional$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/layouts/ModernProfessional.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$layouts$2f$InternationalFormat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/layouts/InternationalFormat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/cleaner/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/cleaner/engine.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const INITIAL_DATA = {
    id: crypto.randomUUID(),
    version: 1,
    metadata: {
        theme: "minimalist",
        region: "US",
        lastModified: new Date().toISOString()
    },
    blocks: [
        {
            type: "header",
            data: {
                fullName: "New Candidate",
                location: "City, Country",
                contacts: [
                    {
                        type: "email",
                        value: "email@example.com"
                    },
                    {
                        type: "phone",
                        value: "+1 000 000 0000"
                    },
                    {
                        type: "linkedin",
                        value: "linkedin.com/in/username"
                    }
                ]
            }
        },
        {
            type: "summary",
            data: "Optional Professional Summary. Role + years of experience + key value proposition. (2-3 lines)"
        },
        {
            type: "experience",
            data: [
                {
                    jobTitle: "Your Role",
                    companyName: "Company Name",
                    startDate: "Jan 20XX",
                    endDate: "Present",
                    isCurrent: true,
                    bullets: [
                        "Start with an action verb (e.g. Led, Optimized, Built)",
                        "Quantify impact with numbers where possible",
                        "Focus on outcomes, not just responsibilities"
                    ]
                }
            ]
        },
        {
            type: "skills",
            data: [
                {
                    category: "Technical Skills",
                    skills: [
                        "Example Skill 1",
                        "Example Skill 2"
                    ]
                }
            ]
        },
        {
            type: "education",
            data: [
                {
                    degree: "Degree / Qualification",
                    institution: "University / Institution",
                    graduationYear: "20XX"
                }
            ]
        }
    ]
};
const STORAGE_KEY = "resume_creator_v1_data";
function ResumeCleanerPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_DATA);
    const [isCopied, setIsCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeLayout, setActiveLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("minimalist");
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load from LocalStorage once on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResumeCleanerPage.useEffect": ()=>{
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (parsed.id) {
                        setData(parsed);
                    }
                } catch (e) {
                    /* eslint-disable */ console.error(...oo_tx(`4172609021_119_8_119_54_11`, "Failed to parse saved data", e));
                }
            }
            setIsMounted(true);
        }
    }["ResumeCleanerPage.useEffect"], []);
    // Save to LocalStorage whenever data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResumeCleanerPage.useEffect": ()=>{
            if (isMounted) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            }
        }
    }["ResumeCleanerPage.useEffect"], [
        data,
        isMounted
    ]);
    const handleCopy = async ()=>{
        const el = document.getElementById("resume-preview");
        if (el) {
            const text = el.innerText;
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(()=>setIsCopied(false), 2000);
        }
    };
    const handleExportPDF = ()=>{
        const headerBlock = data.blocks.find((b)=>b.type === "header");
        const fullName = headerBlock?.type === "header" ? headerBlock.data.fullName : "Resume";
        const originalTitle = document.title;
        document.title = `${fullName} - Resume`;
        window.print();
        setTimeout(()=>{
            document.title = originalTitle;
        }, 100);
    };
    const updateBlock = (index, newData)=>{
        const newBlocks = [
            ...data.blocks
        ];
        newBlocks[index] = {
            ...newBlocks[index],
            data: newData
        };
        setData((prev)=>({
                ...prev,
                metadata: {
                    ...prev.metadata,
                    lastModified: new Date().toISOString()
                },
                blocks: newBlocks
            }));
    };
    const addBlock = (type)=>{
        let newBlock;
        switch(type){
            case "projects":
                newBlock = {
                    type: "projects",
                    data: [
                        {
                            name: "New Project",
                            description: "Project summary",
                            bullets: [
                                "Key achievement"
                            ]
                        }
                    ]
                };
                break;
            case "certifications":
                newBlock = {
                    type: "certifications",
                    data: [
                        {
                            name: "Certificate",
                            issuer: "Issuer",
                            year: "20XX"
                        }
                    ]
                };
                break;
            case "custom":
                newBlock = {
                    type: "custom",
                    data: {
                        title: "New Section",
                        content: ""
                    }
                };
                break;
            default:
                return;
        }
        setData((prev)=>({
                ...prev,
                metadata: {
                    ...prev.metadata,
                    lastModified: new Date().toISOString()
                },
                blocks: [
                    ...prev.blocks,
                    newBlock
                ]
            }));
    };
    const removeBlock = (index)=>{
        const block = data.blocks[index];
        const mandatory = [
            "header",
            "summary",
            "experience",
            "skills",
            "education"
        ];
        if (mandatory.includes(block.type)) {
            alert(`The ${block.type} section is required for a professional resume.`);
            return;
        }
        const newBlocks = data.blocks.filter((_, i)=>i !== index);
        setData((prev)=>({
                ...prev,
                blocks: newBlocks
            }));
    };
    const autoClean = ()=>{
        const cleanedBlocks = data.blocks.map((block)=>{
            if (block.type === "experience") {
                const items = block.data.map((item)=>({
                        ...item,
                        bullets: item.bullets.map((b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeBullet"])(b))
                    }));
                return {
                    ...block,
                    data: items
                };
            }
            if (block.type === "projects") {
                const items = block.data.map((item)=>({
                        ...item,
                        bullets: item.bullets.map((b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeBullet"])(b))
                    }));
                return {
                    ...block,
                    data: items
                };
            }
            if (block.type === "summary") {
                return {
                    ...block,
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanText"])(block.data)
                };
            }
            return block;
        });
        setData((prev)=>({
                ...prev,
                metadata: {
                    ...prev.metadata,
                    lastModified: new Date().toISOString()
                },
                blocks: cleanedBlocks
            }));
    };
    const [previewMode, setPreviewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("styled");
    const handleCopySection = async (index)=>{
        const block = data.blocks[index];
        let text = "";
        if (block.type === "header") {
            text = `${block.data.fullName}\n${block.data.location}\n${block.data.contacts.map((c)=>c.value).join(" | ")}`;
        } else if (block.type === "summary") {
            text = block.data;
        } else if (block.type === "experience") {
            text = block.data.map((item)=>`${item.jobTitle} | ${item.companyName}\n${item.startDate} - ${item.endDate || "Present"}\n${item.bullets.map((b)=>`• ${b}`).join("\n")}`).join("\n\n");
        } else if (block.type === "projects") {
            text = block.data.map((item)=>`${item.name} | ${item.description}\n${item.dates}\n${item.bullets.map((b)=>`• ${b}`).join("\n")}`).join("\n\n");
        } else if (block.type === "skills") {
            text = block.data.map((s)=>`${s.category}: ${s.skills.join(", ")}`).join("\n");
        } else if (block.type === "education") {
            text = block.data.map((e)=>`${e.degree} | ${e.institution} (${e.graduationYear})`).join("\n");
        }
        await navigator.clipboard.writeText(text);
        alert("Section copied to clipboard!");
    };
    const renderPlainText = ()=>{
        return data.blocks.map((block)=>{
            if (block.type === "header") {
                return `${block.data.fullName.toUpperCase()}\n${block.data.location} | ${block.data.contacts.map((c)=>c.value).join(" | ")}\n\n`;
            }
            if (block.type === "summary") {
                return `SUMMARY\n${block.data}\n\n`;
            }
            if (block.type === "experience") {
                return `EXPERIENCE\n${block.data.map((item)=>`${item.jobTitle.toUpperCase()}\n${item.companyName} | ${item.startDate} - ${item.endDate}\n${item.bullets.map((b)=>`- ${b}`).join("\n")}`).join("\n\n")}\n\n`;
            }
            if (block.type === "projects") {
                return `PROJECTS\n${block.data.map((item)=>`${item.name.toUpperCase()}\n${item.description}\n${item.bullets.map((b)=>`- ${b}`).join("\n")}`).join("\n\n")}\n\n`;
            }
            if (block.type === "skills") {
                return `SKILLS\n${block.data.map((s)=>`${s.category}: ${s.skills.join(", ")}`).join("\n")}\n\n`;
            }
            if (block.type === "education") {
                return `EDUCATION\n${block.data.map((e)=>`${e.degree} | ${e.institution} (${e.graduationYear})`).join("\n")}\n\n`;
            }
            return "";
        }).join("");
    };
    if (!isMounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("min-h-screen", "bg-slate-50", "text-slate-900", "font-sans", "selection:bg-blue-100", "selection:text-blue-900"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("no-print", "sticky", "top-0", "z-50", "bg-white/80", "backdrop-blur-xl", "border-b", "border-zinc-200", "px-6", "py-4", "flex", "items-center", "justify-between"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "gap-4"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-10", "h-10", "bg-slate-900", "rounded-xl", "flex", "items-center", "justify-center", "text-white", "font-black", "shadow-lg", "shadow-slate-200"),
                                children: "R"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/page.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-base", "font-bold", "tracking-tight", "text-slate-900"),
                                        children: "Resume Creator"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-[10px]", "text-slate-500", "font-bold", "uppercase", "tracking-[0.2em]"),
                                        children: "Beginner First • Version 1.0.0"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/page.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/page.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "gap-3"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("hidden", "md:flex", "bg-slate-100", "p-1", "rounded-xl", "border", "border-slate-200"),
                                children: [
                                    "minimalist",
                                    "professional",
                                    "international"
                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setActiveLayout(t);
                                            setData((prev)=>({
                                                    ...prev,
                                                    metadata: {
                                                        ...prev.metadata,
                                                        theme: t
                                                    }
                                                }));
                                        },
                                        className: `px-4 py-1.5 text-[11px] font-bold rounded-lg transition-all capitalize cursor-pointer ${activeLayout === t ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`,
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/apps/web/app/page.tsx",
                                        lineNumber: 427,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/page.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-px", "h-6", "bg-slate-200", "mx-1")
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/page.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: autoClean,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("group", "relative", "flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-slate-900", "text-white", "rounded-full", "text-xs", "font-bold", "hover:bg-slate-800", "active:scale-95", "transition-all", "shadow-md", "shadow-slate-100", "cursor-pointer"),
                                children: "Clean All"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/page.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExportPDF,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "gap-2", "px-5", "py-2.5", "border", "border-zinc-200", "bg-white", "text-slate-900", "rounded-full", "text-xs", "font-bold", "hover:bg-slate-50", "active:scale-95", "transition-all", "shadow-sm", "cursor-pointer"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, this),
                                    "Export PDF"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/page.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/page.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/page.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("max-w-[1600px]", "mx-auto", "grid", "grid-cols-1", "lg:grid-cols-2", "gap-0", "min-h-[calc(100vh-80px)]"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("no-print", "p-8", "lg:p-12", "bg-[#F8F9FA]/50", "border-r", "border-zinc-200", "overflow-y-auto", "max-h-[calc(100vh-80px)]", "custom-scrollbar"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("max-w-[700px]", "mx-auto", "space-y-10", "pb-20"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-end", "justify-between", "border-b", "border-zinc-200", "pb-4", "mb-2"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-3xl", "font-black", "tracking-tight", "text-slate-900", "mb-1"),
                                                    children: "Editor"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-sm", "text-slate-500", "font-medium"),
                                                    children: "Structure is set. Focus on your story."
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/page.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "gap-2"),
                                            children: [
                                                "projects",
                                                "certifications",
                                                "custom"
                                            ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>addBlock(type),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-[11px]", "font-bold", "text-slate-700", "bg-white", "border", "border-zinc-200", "px-3", "py-1.5", "rounded-lg", "hover:border-slate-400", "flex", "items-center", "gap-1.5", "transition-all", "active:scale-95"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                            lineNumber: 583,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        type.charAt(0).toUpperCase() + type.slice(1)
                                                    ]
                                                }, type, true, {
                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/page.tsx",
                                            lineNumber: 559,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/page.tsx",
                                    lineNumber: 532,
                                    columnNumber: 13
                                }, this),
                                data.blocks.map((block, bIdx)=>{
                                    const mandatory = [
                                        "header",
                                        "summary",
                                        "experience",
                                        "skills",
                                        "education"
                                    ];
                                    const isMandatory = mandatory.includes(block.type);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("bg-white", "rounded-[24px]", "border", "border-zinc-200", "shadow-sm", "p-8", "group", "relative", "hover:border-slate-300", "transition-all"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "justify-between", "mb-6"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "gap-2", "text-slate-400"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-[10px]", "font-black", "uppercase", "tracking-[0.2em]"),
                                                                children: block.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                lineNumber: 633,
                                                                columnNumber: 23
                                                            }, this),
                                                            isMandatory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("bg-slate-100", "text-slate-500", "text-[9px]", "px-2", "py-0.5", "rounded-full", "font-bold"),
                                                                children: "REQUIRED"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                lineNumber: 644,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 625,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "gap-2"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleCopySection(bIdx),
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("opacity-0", "group-hover:opacity-100", "p-2", "text-slate-400", "hover:text-slate-900", "hover:bg-slate-100", "rounded-full", "transition-all", "cursor-pointer"),
                                                                title: "Copy Section Text",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 675,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                lineNumber: 660,
                                                                columnNumber: 23
                                                            }, this),
                                                            !isMandatory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>removeBlock(bIdx),
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("opacity-0", "group-hover:opacity-100", "p-2", "text-slate-400", "hover:text-red-500", "hover:bg-red-50", "rounded-full", "transition-all", "cursor-pointer"),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 692,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                lineNumber: 678,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 617,
                                                columnNumber: 19
                                            }, this),
                                            block.type === "header" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "text-3xl", "font-black", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200", "text-slate-900"),
                                                        value: block.data.fullName,
                                                        onChange: (e)=>updateBlock(bIdx, {
                                                                ...block.data,
                                                                fullName: e.target.value
                                                            }),
                                                        placeholder: "Full Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("grid", "grid-cols-1", "md:grid-cols-2", "gap-6"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "gap-3", "text-slate-500", "focus-within:text-slate-900", "transition-colors"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 738,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex-1", "text-sm", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200"),
                                                                        value: block.data.contacts.find((c)=>c.type === "email")?.value || "",
                                                                        onChange: (e)=>{
                                                                            const newContacts = [
                                                                                ...block.data.contacts
                                                                            ];
                                                                            const idx = newContacts.findIndex((c)=>c.type === "email");
                                                                            if (idx > -1) newContacts[idx].value = e.target.value;
                                                                            else newContacts.push({
                                                                                type: "email",
                                                                                value: e.target.value
                                                                            });
                                                                            updateBlock(bIdx, {
                                                                                ...block.data,
                                                                                contacts: newContacts
                                                                            });
                                                                        },
                                                                        placeholder: "Email Address"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 739,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                lineNumber: 728,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "gap-3", "text-slate-500", "focus-within:text-slate-900", "transition-colors"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 783,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex-1", "text-sm", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200"),
                                                                        value: block.data.contacts.find((c)=>c.type === "phone")?.value || "",
                                                                        onChange: (e)=>{
                                                                            const newContacts = [
                                                                                ...block.data.contacts
                                                                            ];
                                                                            const idx = newContacts.findIndex((c)=>c.type === "phone");
                                                                            if (idx > -1) newContacts[idx].value = e.target.value;
                                                                            else newContacts.push({
                                                                                type: "phone",
                                                                                value: e.target.value
                                                                            });
                                                                            updateBlock(bIdx, {
                                                                                ...block.data,
                                                                                contacts: newContacts
                                                                            });
                                                                        },
                                                                        placeholder: "Phone Number"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 784,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                lineNumber: 773,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "gap-3", "text-slate-500", "focus-within:text-slate-900", "transition-colors"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 828,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex-1", "text-sm", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200"),
                                                                        value: block.data.location || "",
                                                                        onChange: (e)=>updateBlock(bIdx, {
                                                                                ...block.data,
                                                                                location: e.target.value
                                                                            }),
                                                                        placeholder: "City, Country"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 829,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                lineNumber: 818,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "gap-3", "text-slate-500", "focus-within:text-slate-900", "transition-colors"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 858,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex-1", "text-sm", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200"),
                                                                        value: block.data.contacts.find((c)=>[
                                                                                "linkedin",
                                                                                "github",
                                                                                "website",
                                                                                "other"
                                                                            ].includes(c.type))?.value || "",
                                                                        onChange: (e)=>{
                                                                            const newContacts = [
                                                                                ...block.data.contacts
                                                                            ];
                                                                            const idx = newContacts.findIndex((c)=>[
                                                                                    "linkedin",
                                                                                    "github",
                                                                                    "website",
                                                                                    "other"
                                                                                ].includes(c.type));
                                                                            if (idx > -1) newContacts[idx].value = e.target.value;
                                                                            else newContacts.push({
                                                                                type: "linkedin",
                                                                                value: e.target.value
                                                                            });
                                                                            updateBlock(bIdx, {
                                                                                ...block.data,
                                                                                contacts: newContacts
                                                                            });
                                                                        },
                                                                        placeholder: "LinkedIn / GitHub URL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 859,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                lineNumber: 848,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 720,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 699,
                                                columnNumber: 21
                                            }, this),
                                            block.type === "summary" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "h-24", "text-sm", "leading-relaxed", "border-none", "p-0", "focus:ring-0", "resize-none", "placeholder-slate-200", "text-slate-700"),
                                                        value: block.data,
                                                        onChange: (e)=>updateBlock(bIdx, e.target.value),
                                                        placeholder: "Craft your high-level pitch..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 909,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "gap-2", "p-3", "bg-blue-50/50", "rounded-xl", "text-[11px]", "text-blue-600", "font-bold", "border", "border-blue-100"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                lineNumber: 941,
                                                                columnNumber: 25
                                                            }, this),
                                                            " Note: Briefly touch on your role and biggest value proposition."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 926,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 908,
                                                columnNumber: 21
                                            }, this),
                                            block.type === "experience" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-8",
                                                children: [
                                                    block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("space-y-6", "relative", "group/item"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("grid", "grid-cols-1", "md:grid-cols-2", "gap-4"),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-lg", "font-bold", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200", "text-slate-900"),
                                                                            value: item.jobTitle,
                                                                            onChange: (e)=>{
                                                                                const newData = [
                                                                                    ...block.data
                                                                                ];
                                                                                newData[iIdx] = {
                                                                                    ...item,
                                                                                    jobTitle: e.target.value
                                                                                };
                                                                                updateBlock(bIdx, newData);
                                                                            },
                                                                            placeholder: "Title"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                                            lineNumber: 966,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "md:text-right",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-sm", "font-bold", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200", "text-slate-500"),
                                                                                    value: item.startDate,
                                                                                    onChange: (e)=>{
                                                                                        const newData = [
                                                                                            ...block.data
                                                                                        ];
                                                                                        newData[iIdx] = {
                                                                                            ...item,
                                                                                            startDate: e.target.value
                                                                                        };
                                                                                        updateBlock(bIdx, newData);
                                                                                    },
                                                                                    placeholder: "Start Date"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                                    lineNumber: 988,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("mx-2", "text-slate-300"),
                                                                                    children: "—"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                                    lineNumber: 1009,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-sm", "font-bold", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200", "text-slate-500"),
                                                                                    value: item.endDate || "",
                                                                                    onChange: (e)=>{
                                                                                        const newData = [
                                                                                            ...block.data
                                                                                        ];
                                                                                        newData[iIdx] = {
                                                                                            ...item,
                                                                                            endDate: e.target.value,
                                                                                            isCurrent: e.target.value.toLowerCase() === "present"
                                                                                        };
                                                                                        updateBlock(bIdx, newData);
                                                                                    },
                                                                                    placeholder: "End Date"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                                    lineNumber: 1012,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                                            lineNumber: 987,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 958,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-slate-400", "border-none", "p-0", "focus:ring-0"),
                                                                    value: item.companyName,
                                                                    onChange: (e)=>{
                                                                        const newData = [
                                                                            ...block.data
                                                                        ];
                                                                        newData[iIdx] = {
                                                                            ...item,
                                                                            companyName: e.target.value
                                                                        };
                                                                        updateBlock(bIdx, newData);
                                                                    },
                                                                    placeholder: "Company"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1038,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-4",
                                                                    children: [
                                                                        item.bullets.map((bullet, bulIdx)=>{
                                                                            const hints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeBullet"])(bullet);
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "gap-3", "items-start", "group/bullet"),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("mt-2.5", "w-1.5", "h-1.5", "bg-blue-500", "rounded-full", "shrink-0", "shadow-sm")
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                                lineNumber: 1075,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex-1", "text-sm", "border-none", "p-0", "focus:ring-0", "resize-none", "min-h-6", "bg-transparent", "text-slate-700"),
                                                                                                value: bullet,
                                                                                                onChange: (e)=>{
                                                                                                    const newData = [
                                                                                                        ...block.data
                                                                                                    ];
                                                                                                    newData[iIdx].bullets[bulIdx] = e.target.value;
                                                                                                    updateBlock(bIdx, newData);
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                                lineNumber: 1086,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>{
                                                                                                    const newData = [
                                                                                                        ...block.data
                                                                                                    ];
                                                                                                    newData[iIdx].bullets = item.bullets.filter((_, k)=>k !== bulIdx);
                                                                                                    updateBlock(bIdx, newData);
                                                                                                },
                                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("opacity-0", "group-hover/bullet:opacity-100", "p-1", "text-slate-300", "hover:text-red-500", "transition-all"),
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                                    size: 12
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                                                    lineNumber: 1124,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                                lineNumber: 1106,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                                        lineNumber: 1067,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    hints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("pl-[26px]", "flex", "flex-wrap", "gap-2"),
                                                                                        children: hints.map((hint, hIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: `text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1.5 ${hint.type === "warning" ? "text-amber-600 bg-amber-50 border border-amber-100" : "text-indigo-600 bg-indigo-50 border border-indigo-100"}`,
                                                                                                children: [
                                                                                                    hint.type === "warning" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                                                        size: 10
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                                                        lineNumber: 1146,
                                                                                                        columnNumber: 45
                                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                                                        size: 10
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                                                        lineNumber: 1148,
                                                                                                        columnNumber: 45
                                                                                                    }, this),
                                                                                                    hint.message
                                                                                                ]
                                                                                            }, hIdx, true, {
                                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                                lineNumber: 1137,
                                                                                                columnNumber: 41
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                                        lineNumber: 1128,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, bulIdx, true, {
                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                lineNumber: 1066,
                                                                                columnNumber: 33
                                                                            }, this);
                                                                        }),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                const newData = [
                                                                                    ...block.data
                                                                                ];
                                                                                newData[iIdx].bullets.push("");
                                                                                updateBlock(bIdx, newData);
                                                                            },
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("ml-[26px]", "text-[10px]", "font-black", "uppercase", "tracking-widest", "text-blue-600", "hover:text-blue-800", "transition-colors", "flex", "items-center", "gap-1.5"),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                    size: 10
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                                    lineNumber: 1178,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                " Add Bullet"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                                            lineNumber: 1158,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1062,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        const newData = block.data.filter((_, i)=>i !== iIdx);
                                                                        updateBlock(bIdx, newData);
                                                                    },
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("absolute", "-right-4", "top-0", "opacity-0", "group-hover/item:opacity-100", "p-2", "text-slate-300", "hover:text-red-400", "transition-all"),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 1201,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1182,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, iIdx, true, {
                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                            lineNumber: 950,
                                                            columnNumber: 25
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            const newItem = {
                                                                jobTitle: "New Role",
                                                                companyName: "Company",
                                                                startDate: "Date",
                                                                bullets: [],
                                                                isCurrent: false
                                                            };
                                                            updateBlock(bIdx, [
                                                                ...block.data,
                                                                newItem
                                                            ]);
                                                        },
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "py-4", "border-2", "border-dashed", "border-slate-100", "rounded-2xl", "text-[11px]", "font-black", "uppercase", "tracking-widest", "text-slate-400", "hover:text-slate-600", "hover:border-slate-200", "hover:bg-slate-50", "transition-all"),
                                                        children: "+ New Experience Item"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 1205,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 948,
                                                columnNumber: 21
                                            }, this),
                                            block.type === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-8",
                                                children: [
                                                    block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("space-y-6", "relative", "group/item"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("grid", "grid-cols-1", "md:grid-cols-2", "gap-4"),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-lg", "font-bold", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200", "text-slate-900"),
                                                                            value: item.name,
                                                                            onChange: (e)=>{
                                                                                const newData = [
                                                                                    ...block.data
                                                                                ];
                                                                                newData[iIdx] = {
                                                                                    ...item,
                                                                                    name: e.target.value
                                                                                };
                                                                                updateBlock(bIdx, newData);
                                                                            },
                                                                            placeholder: "Project Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                                            lineNumber: 1258,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "md:text-right",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-sm", "font-bold", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200", "text-slate-500"),
                                                                                value: item.dates || "",
                                                                                onChange: (e)=>{
                                                                                    const newData = [
                                                                                        ...block.data
                                                                                    ];
                                                                                    newData[iIdx] = {
                                                                                        ...item,
                                                                                        dates: e.target.value
                                                                                    };
                                                                                    updateBlock(bIdx, newData);
                                                                                },
                                                                                placeholder: "Dates"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                lineNumber: 1280,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                                            lineNumber: 1279,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1250,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-slate-400", "border-none", "p-0", "focus:ring-0"),
                                                                    value: item.description || "",
                                                                    onChange: (e)=>{
                                                                        const newData = [
                                                                            ...block.data
                                                                        ];
                                                                        newData[iIdx] = {
                                                                            ...item,
                                                                            description: e.target.value
                                                                        };
                                                                        updateBlock(bIdx, newData);
                                                                    },
                                                                    placeholder: "Project Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1303,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-4",
                                                                    children: [
                                                                        item.bullets.map((bullet, bulIdx)=>{
                                                                            const hints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$cleaner$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeBullet"])(bullet);
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "gap-3", "items-start", "group/bullet"),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("mt-2.5", "w-1.5", "h-1.5", "bg-blue-500", "rounded-full", "shrink-0", "shadow-sm")
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                                lineNumber: 1340,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex-1", "text-sm", "border-none", "p-0", "focus:ring-0", "resize-none", "min-h-6", "bg-transparent", "text-slate-700"),
                                                                                                value: bullet,
                                                                                                onChange: (e)=>{
                                                                                                    const newData = [
                                                                                                        ...block.data
                                                                                                    ];
                                                                                                    newData[iIdx].bullets[bulIdx] = e.target.value;
                                                                                                    updateBlock(bIdx, newData);
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                                lineNumber: 1351,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>{
                                                                                                    const newData = [
                                                                                                        ...block.data
                                                                                                    ];
                                                                                                    newData[iIdx].bullets = item.bullets.filter((_, k)=>k !== bulIdx);
                                                                                                    updateBlock(bIdx, newData);
                                                                                                },
                                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("opacity-0", "group-hover/bullet:opacity-100", "p-1", "text-slate-300", "hover:text-red-500", "transition-all"),
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                                    size: 12
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                                                    lineNumber: 1389,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                                lineNumber: 1371,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                                        lineNumber: 1332,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    hints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("pl-[26px]", "flex", "flex-wrap", "gap-2"),
                                                                                        children: hints.map((hint, hIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: `text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1.5 ${hint.type === "warning" ? "text-amber-600 bg-amber-50 border border-amber-100" : "text-indigo-600 bg-indigo-50 border border-indigo-100"}`,
                                                                                                children: [
                                                                                                    hint.type === "warning" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                                                        size: 10
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                                                        lineNumber: 1411,
                                                                                                        columnNumber: 45
                                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                                                        size: 10
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                                                        lineNumber: 1413,
                                                                                                        columnNumber: 45
                                                                                                    }, this),
                                                                                                    hint.message
                                                                                                ]
                                                                                            }, hIdx, true, {
                                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                                lineNumber: 1402,
                                                                                                columnNumber: 41
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                                        lineNumber: 1393,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, bulIdx, true, {
                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                lineNumber: 1331,
                                                                                columnNumber: 33
                                                                            }, this);
                                                                        }),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                const newData = [
                                                                                    ...block.data
                                                                                ];
                                                                                newData[iIdx].bullets.push("");
                                                                                updateBlock(bIdx, newData);
                                                                            },
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("ml-[26px]", "text-[10px]", "font-black", "uppercase", "tracking-widest", "text-blue-600", "hover:text-blue-800", "transition-colors", "flex", "items-center", "gap-1.5"),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                    size: 10
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                                    lineNumber: 1443,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                " Add Bullet"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                                            lineNumber: 1423,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1327,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        const newData = block.data.filter((_, i)=>i !== iIdx);
                                                                        updateBlock(bIdx, newData);
                                                                    },
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("absolute", "-right-4", "top-0", "opacity-0", "group-hover/item:opacity-100", "p-2", "text-slate-300", "hover:text-red-400", "transition-all"),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 1466,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1447,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, iIdx, true, {
                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                            lineNumber: 1242,
                                                            columnNumber: 25
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            const newItem = {
                                                                name: "New Project",
                                                                description: "Summary",
                                                                bullets: []
                                                            };
                                                            updateBlock(bIdx, [
                                                                ...block.data,
                                                                newItem
                                                            ]);
                                                        },
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "py-4", "border-2", "border-dashed", "border-slate-100", "rounded-2xl", "text-[11px]", "font-black", "uppercase", "tracking-widest", "text-slate-400", "hover:text-slate-600", "hover:border-slate-200", "hover:bg-slate-50", "transition-all"),
                                                        children: "+ New Project Item"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 1470,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 1240,
                                                columnNumber: 21
                                            }, this),
                                            block.type === "skills" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-8",
                                                children: [
                                                    block.data.map((group, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("space-y-3", "group/skill"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "items-center", "justify-between"),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-[10px]", "font-black", "uppercase", "tracking-[0.2em]", "text-slate-400", "border-none", "p-0", "focus:ring-0", "w-full"),
                                                                            value: group.category,
                                                                            onChange: (e)=>{
                                                                                const newData = [
                                                                                    ...block.data
                                                                                ];
                                                                                newData[iIdx] = {
                                                                                    ...group,
                                                                                    category: e.target.value
                                                                                };
                                                                                updateBlock(bIdx, newData);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                                            lineNumber: 1516,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                const newData = block.data.filter((_, i)=>i !== iIdx);
                                                                                updateBlock(bIdx, newData);
                                                                            },
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("opacity-0", "group-hover/skill:opacity-100", "p-1", "text-slate-300", "hover:text-red-400", "transition-all"),
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/page.tsx",
                                                                                lineNumber: 1554,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                                            lineNumber: 1538,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1509,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "text-sm", "font-medium", "border-none", "p-0", "focus:ring-0", "text-slate-700", "bg-transparent", "resize-none", "overflow-hidden", "h-6"),
                                                                    value: group.skills.join(", "),
                                                                    onChange: (e)=>{
                                                                        const newData = [
                                                                            ...block.data
                                                                        ];
                                                                        newData[iIdx] = {
                                                                            ...group,
                                                                            skills: e.target.value.split(",").map((s)=>s.trim())
                                                                        };
                                                                        updateBlock(bIdx, newData);
                                                                    },
                                                                    placeholder: "Skill 1, Skill 2, Skill 3..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1557,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, iIdx, true, {
                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                            lineNumber: 1505,
                                                            columnNumber: 25
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>updateBlock(bIdx, [
                                                                ...block.data,
                                                                {
                                                                    category: "Category",
                                                                    skills: []
                                                                }
                                                            ]),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "py-3", "border", "border-dashed", "border-slate-100", "rounded-xl", "text-[10px]", "font-black", "uppercase", "tracking-widest", "text-slate-400", "hover:text-slate-600", "transition-all"),
                                                        children: "+ New Skills Group"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 1586,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 1503,
                                                columnNumber: 21
                                            }, this),
                                            block.type === "education" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-8",
                                                children: [
                                                    block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("space-y-4", "group/item", "relative"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("grid", "grid-cols-1", "md:grid-cols-[1fr_100px]", "gap-4"),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-lg", "font-bold", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200", "text-slate-900"),
                                                                            value: item.institution,
                                                                            onChange: (e)=>{
                                                                                const newData = [
                                                                                    ...block.data
                                                                                ];
                                                                                newData[iIdx] = {
                                                                                    ...item,
                                                                                    institution: e.target.value
                                                                                };
                                                                                updateBlock(bIdx, newData);
                                                                            },
                                                                            placeholder: "Institution Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                                            lineNumber: 1633,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("md:text-right", "text-sm", "font-bold", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200", "text-slate-500"),
                                                                            value: item.graduationYear,
                                                                            onChange: (e)=>{
                                                                                const newData = [
                                                                                    ...block.data
                                                                                ];
                                                                                newData[iIdx] = {
                                                                                    ...item,
                                                                                    graduationYear: e.target.value
                                                                                };
                                                                                updateBlock(bIdx, newData);
                                                                            },
                                                                            placeholder: "Year"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                                            lineNumber: 1654,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1625,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "text-sm", "font-medium", "italic", "text-slate-500", "border-none", "p-0", "focus:ring-0", "placeholder-slate-200"),
                                                                    value: item.degree,
                                                                    onChange: (e)=>{
                                                                        const newData = [
                                                                            ...block.data
                                                                        ];
                                                                        newData[iIdx] = {
                                                                            ...item,
                                                                            degree: e.target.value
                                                                        };
                                                                        updateBlock(bIdx, newData);
                                                                    },
                                                                    placeholder: "Type of Degree / Major"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1677,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        const newData = block.data.filter((_, i)=>i !== iIdx);
                                                                        updateBlock(bIdx, newData);
                                                                    },
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("absolute", "-right-4", "top-0", "opacity-0", "group-hover/item:opacity-100", "p-2", "text-slate-300", "hover:text-red-400", "transition-all"),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 1719,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1700,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, iIdx, true, {
                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                            lineNumber: 1617,
                                                            columnNumber: 25
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>updateBlock(bIdx, [
                                                                ...block.data,
                                                                {
                                                                    degree: "Degree",
                                                                    institution: "University",
                                                                    graduationYear: "20XX"
                                                                }
                                                            ]),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "py-4", "border-2", "border-dashed", "border-slate-100", "rounded-2xl", "text-[11px]", "font-black", "uppercase", "tracking-widest", "text-slate-400", "hover:text-slate-600", "hover:border-slate-200", "transition-all"),
                                                        children: "+ New Education"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 1723,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 1615,
                                                columnNumber: 21
                                            }, this),
                                            block.type === "certifications" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    block.data.map((item, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex", "gap-4", "items-center", "group/item", "relative"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex-1", "font-bold", "text-sm", "border-none", "p-0", "focus:ring-0", "text-slate-900"),
                                                                    value: item.name,
                                                                    onChange: (e)=>{
                                                                        const newData = [
                                                                            ...block.data
                                                                        ];
                                                                        newData[iIdx] = {
                                                                            ...item,
                                                                            name: e.target.value
                                                                        };
                                                                        updateBlock(bIdx, newData);
                                                                    },
                                                                    placeholder: "Certification Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1769,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-24", "text-right", "text-xs", "font-bold", "text-slate-400", "border-none", "p-0", "focus:ring-0"),
                                                                    value: item.year,
                                                                    onChange: (e)=>{
                                                                        const newData = [
                                                                            ...block.data
                                                                        ];
                                                                        newData[iIdx] = {
                                                                            ...item,
                                                                            year: e.target.value
                                                                        };
                                                                        updateBlock(bIdx, newData);
                                                                    },
                                                                    placeholder: "Year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1787,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        const newData = block.data.filter((_, i)=>i !== iIdx);
                                                                        updateBlock(bIdx, newData);
                                                                    },
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("absolute", "-right-8", "top-1/2", "-translate-y-1/2", "opacity-0", "group-hover/item:opacity-100", "p-2", "text-slate-300", "hover:text-red-400", "transition-all"),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                                        lineNumber: 1826,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                                    lineNumber: 1806,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, iIdx, true, {
                                                            fileName: "[project]/apps/web/app/page.tsx",
                                                            lineNumber: 1759,
                                                            columnNumber: 25
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>updateBlock(bIdx, [
                                                                ...block.data,
                                                                {
                                                                    name: "New Certification",
                                                                    issuer: "Issuer",
                                                                    year: "20XX"
                                                                }
                                                            ]),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "py-4", "border", "border-dashed", "border-slate-100", "rounded-xl", "text-[11px]", "font-black", "uppercase", "tracking-widest", "text-slate-400", "hover:text-slate-600", "transition-all"),
                                                        children: "+ New Certification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 1830,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 1757,
                                                columnNumber: 21
                                            }, this),
                                            block.type === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "font-black", "uppercase", "tracking-[0.2em]", "text-[10px]", "text-slate-400", "border-none", "p-0", "focus:ring-0"),
                                                        value: block.data.title,
                                                        onChange: (e)=>updateBlock(bIdx, {
                                                                ...block.data,
                                                                title: e.target.value
                                                            }),
                                                        placeholder: "SECTION TITLE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 1864,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("w-full", "h-32", "text-sm", "leading-relaxed", "border-none", "p-0", "focus:ring-0", "resize-none", "placeholder-slate-200", "text-slate-700"),
                                                        value: block.data.content,
                                                        onChange: (e)=>updateBlock(bIdx, {
                                                                ...block.data,
                                                                content: e.target.value
                                                            }),
                                                        placeholder: "Your custom content..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 1885,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 1863,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, bIdx, true, {
                                        fileName: "[project]/apps/web/app/page.tsx",
                                        lineNumber: 602,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/page.tsx",
                            lineNumber: 529,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/page.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white overflow-hidden max-h-[calc(100vh-80px)] border-l border-zinc-200 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-print sticky top-0 z-20 w-full flex justify-between items-center bg-white border-b border-zinc-100 px-8 py-4 shadow-sm transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex bg-slate-100 p-1 rounded-lg border border-slate-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setPreviewMode("styled"),
                                                        className: `px-4 py-1.5 text-[10px] font-bold rounded-md transition-all cursor-pointer uppercase tracking-wider ${previewMode === "styled" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`,
                                                        children: "Styled"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 1921,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setPreviewMode("plain"),
                                                        className: `px-4 py-1.5 text-[10px] font-bold rounded-md transition-all cursor-pointer uppercase tracking-wider ${previewMode === "plain" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`,
                                                        children: "Plain Text"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 1927,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 1920,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 w-px bg-slate-200"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 1934,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-600 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 12,
                                                        strokeWidth: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/page.tsx",
                                                        lineNumber: 1936,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ATS Optimized"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 1935,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/app/page.tsx",
                                        lineNumber: 1919,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCopy,
                                            className: "group flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 active:scale-95 transition-all shadow-md cursor-pointer whitespace-nowrap",
                                            children: [
                                                isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 12,
                                                    strokeWidth: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                    lineNumber: 1946,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                    lineNumber: 1948,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isCopied ? "Copied!" : "Quick Copy Full"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/page.tsx",
                                                    lineNumber: 1950,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/page.tsx",
                                            lineNumber: 1941,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/page.tsx",
                                        lineNumber: 1940,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/page.tsx",
                                lineNumber: 1918,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 w-full overflow-y-auto p-4 lg:p-12 custom-scrollbar flex flex-col items-center pt-12 bg-zinc-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "resume-preview",
                                    className: `transform scale-[0.75] md:scale-[0.8] lg:scale-[0.85] xl:scale-[0.9] 2xl:scale-[1] origin-top transition-all duration-500 h-fit mb-40 shadow-[0_0_80px_-15px_rgba(0,0,0,0.15)] ${previewMode === "plain" ? "bg-white p-12 w-[210mm] min-h-[297mm] shadow-none rounded-none text-left" : ""}`,
                                    children: previewMode === "plain" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "whitespace-pre-wrap font-mono text-sm text-slate-700",
                                        children: renderPlainText()
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/page.tsx",
                                        lineNumber: 1961,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            activeLayout === "minimalist" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$layouts$2f$ATSMinimalist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATSMinimalist"], {
                                                data: data
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 1967,
                                                columnNumber: 21
                                            }, this),
                                            activeLayout === "professional" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$layouts$2f$ModernProfessional$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModernProfessional"], {
                                                data: data
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 1970,
                                                columnNumber: 21
                                            }, this),
                                            activeLayout === "international" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$layouts$2f$InternationalFormat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternationalFormat"], {
                                                data: data
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/page.tsx",
                                                lineNumber: 1973,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/page.tsx",
                                    lineNumber: 1956,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/page.tsx",
                                lineNumber: 1955,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/page.tsx",
                        lineNumber: 1916,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/page.tsx",
                lineNumber: 504,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/page.tsx",
        lineNumber: 343,
        columnNumber: 5
    }, this);
}
_s(ResumeCleanerPage, "a3JL6bOmpqHaxpuAHbHlHDladxA=");
_c = ResumeCleanerPage;
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1cc9bf=_0x36d2;(function(_0x4237ed,_0x3747f9){var _0x4ba23b=_0x36d2,_0xc38e53=_0x4237ed();while(!![]){try{var _0xcfaff2=parseInt(_0x4ba23b(0x28a))/0x1+parseInt(_0x4ba23b(0x1c9))/0x2*(-parseInt(_0x4ba23b(0x218))/0x3)+parseInt(_0x4ba23b(0x233))/0x4+parseInt(_0x4ba23b(0x1ae))/0x5*(-parseInt(_0x4ba23b(0x1b7))/0x6)+parseInt(_0x4ba23b(0x1b6))/0x7*(parseInt(_0x4ba23b(0x1df))/0x8)+-parseInt(_0x4ba23b(0x285))/0x9*(-parseInt(_0x4ba23b(0x1d3))/0xa)+-parseInt(_0x4ba23b(0x24d))/0xb*(parseInt(_0x4ba23b(0x28e))/0xc);if(_0xcfaff2===_0x3747f9)break;else _0xc38e53['push'](_0xc38e53['shift']());}catch(_0x3340ad){_0xc38e53['push'](_0xc38e53['shift']());}}}(_0x4abd,0x33a2c));function z(_0x12f97f,_0x4412cc,_0x4ecfdf,_0x4965cc,_0x20be30,_0x4db6ae){var _0xdb0397=_0x36d2,_0x40190d,_0x14a3fb,_0x3fdb49,_0x1943f8;this[_0xdb0397(0x206)]=_0x12f97f,this[_0xdb0397(0x297)]=_0x4412cc,this['port']=_0x4ecfdf,this[_0xdb0397(0x2ae)]=_0x4965cc,this['dockerizedApp']=_0x20be30,this[_0xdb0397(0x2a4)]=_0x4db6ae,this[_0xdb0397(0x1eb)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this['_connected']=!0x1,this[_0xdb0397(0x217)]=!0x1,this[_0xdb0397(0x27d)]=((_0x14a3fb=(_0x40190d=_0x12f97f['process'])==null?void 0x0:_0x40190d[_0xdb0397(0x1f5)])==null?void 0x0:_0x14a3fb[_0xdb0397(0x200)])===_0xdb0397(0x1b3),this['_inBrowser']=!((_0x1943f8=(_0x3fdb49=this[_0xdb0397(0x206)]['process'])==null?void 0x0:_0x3fdb49[_0xdb0397(0x25c)])!=null&&_0x1943f8[_0xdb0397(0x212)])&&!this[_0xdb0397(0x27d)],this['_WebSocketClass']=null,this[_0xdb0397(0x1b5)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0xdb0397(0x203)]=_0xdb0397(0x20f),this['_sendErrorMessage']=(this[_0xdb0397(0x264)]?_0xdb0397(0x1ce):_0xdb0397(0x1ad))+this[_0xdb0397(0x203)];}z[_0x1cc9bf(0x1fa)]['getWebSocketClass']=async function(){var _0x5b981c=_0x1cc9bf,_0x392eb8,_0x4f8860;if(this[_0x5b981c(0x2ac)])return this['_WebSocketClass'];let _0x4f21b5;if(this[_0x5b981c(0x264)]||this['_inNextEdge'])_0x4f21b5=this[_0x5b981c(0x206)]['WebSocket'];else{if((_0x392eb8=this[_0x5b981c(0x206)][_0x5b981c(0x1e2)])!=null&&_0x392eb8[_0x5b981c(0x236)])_0x4f21b5=(_0x4f8860=this[_0x5b981c(0x206)][_0x5b981c(0x1e2)])==null?void 0x0:_0x4f8860[_0x5b981c(0x236)];else try{_0x4f21b5=(await new Function(_0x5b981c(0x1d0),_0x5b981c(0x2b1),_0x5b981c(0x2ae),'return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());')(await(0x0,eval)(_0x5b981c(0x1d7)),await(0x0,eval)(_0x5b981c(0x27a)),this[_0x5b981c(0x2ae)]))[_0x5b981c(0x26c)];}catch{try{_0x4f21b5=require(require(_0x5b981c(0x1d0))[_0x5b981c(0x1f4)](this[_0x5b981c(0x2ae)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x5b981c(0x2ac)]=_0x4f21b5,_0x4f21b5;},z[_0x1cc9bf(0x1fa)][_0x1cc9bf(0x1bf)]=function(){var _0x352d1c=_0x1cc9bf;this[_0x352d1c(0x217)]||this[_0x352d1c(0x1e1)]||this[_0x352d1c(0x1b5)]>=this[_0x352d1c(0x293)]||(this[_0x352d1c(0x288)]=!0x1,this[_0x352d1c(0x217)]=!0x0,this[_0x352d1c(0x1b5)]++,this[_0x352d1c(0x272)]=new Promise((_0x2c619c,_0x393e18)=>{var _0x321c4d=_0x352d1c;this['getWebSocketClass']()[_0x321c4d(0x1cf)](_0x314a8b=>{var _0x1dd7df=_0x321c4d;let _0x8bf952=new _0x314a8b(_0x1dd7df(0x1da)+(!this[_0x1dd7df(0x264)]&&this[_0x1dd7df(0x27b)]?_0x1dd7df(0x20e):this['host'])+':'+this[_0x1dd7df(0x283)]);_0x8bf952['onerror']=()=>{var _0x2f65e4=_0x1dd7df;this[_0x2f65e4(0x1eb)]=!0x1,this[_0x2f65e4(0x26b)](_0x8bf952),this['_attemptToReconnectShortly'](),_0x393e18(new Error('logger\\x20websocket\\x20error'));},_0x8bf952[_0x1dd7df(0x25f)]=()=>{var _0x4df140=_0x1dd7df;this[_0x4df140(0x264)]||_0x8bf952[_0x4df140(0x1d8)]&&_0x8bf952[_0x4df140(0x1d8)]['unref']&&_0x8bf952[_0x4df140(0x1d8)][_0x4df140(0x221)](),_0x2c619c(_0x8bf952);},_0x8bf952['onclose']=()=>{var _0x3437aa=_0x1dd7df;this['_allowedToConnectOnSend']=!0x0,this[_0x3437aa(0x26b)](_0x8bf952),this['_attemptToReconnectShortly']();},_0x8bf952[_0x1dd7df(0x266)]=_0x4cbd09=>{var _0x448802=_0x1dd7df;try{if(!(_0x4cbd09!=null&&_0x4cbd09[_0x448802(0x1be)])||!this[_0x448802(0x2a4)])return;let _0x54c7bc=JSON[_0x448802(0x1b4)](_0x4cbd09[_0x448802(0x1be)]);this[_0x448802(0x2a4)](_0x54c7bc[_0x448802(0x289)],_0x54c7bc[_0x448802(0x1f6)],this[_0x448802(0x206)],this[_0x448802(0x264)]);}catch{}};})[_0x321c4d(0x1cf)](_0x56ce89=>(this[_0x321c4d(0x1e1)]=!0x0,this[_0x321c4d(0x217)]=!0x1,this[_0x321c4d(0x288)]=!0x1,this[_0x321c4d(0x1eb)]=!0x0,this[_0x321c4d(0x1b5)]=0x0,_0x56ce89))[_0x321c4d(0x1fb)](_0x4d0508=>(this[_0x321c4d(0x1e1)]=!0x1,this['_connecting']=!0x1,console[_0x321c4d(0x26a)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x321c4d(0x203)]),_0x393e18(new Error(_0x321c4d(0x1d2)+(_0x4d0508&&_0x4d0508[_0x321c4d(0x201)])))));}));},z['prototype'][_0x1cc9bf(0x26b)]=function(_0x310a94){var _0x37cccf=_0x1cc9bf;this[_0x37cccf(0x1e1)]=!0x1,this[_0x37cccf(0x217)]=!0x1;try{_0x310a94[_0x37cccf(0x1bd)]=null,_0x310a94[_0x37cccf(0x245)]=null,_0x310a94[_0x37cccf(0x25f)]=null;}catch{}try{_0x310a94[_0x37cccf(0x205)]<0x2&&_0x310a94[_0x37cccf(0x227)]();}catch{}},z[_0x1cc9bf(0x1fa)]['_attemptToReconnectShortly']=function(){var _0x4918b2=_0x1cc9bf;clearTimeout(this[_0x4918b2(0x24f)]),!(this[_0x4918b2(0x1b5)]>=this['_maxConnectAttemptCount'])&&(this[_0x4918b2(0x24f)]=setTimeout(()=>{var _0x479cf8=_0x4918b2,_0x4563d7;this[_0x479cf8(0x1e1)]||this['_connecting']||(this['_connectToHostNow'](),(_0x4563d7=this[_0x479cf8(0x272)])==null||_0x4563d7[_0x479cf8(0x1fb)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x4918b2(0x24f)]['unref']&&this[_0x4918b2(0x24f)][_0x4918b2(0x221)]());},z['prototype'][_0x1cc9bf(0x1dc)]=async function(_0x1a542e){var _0x5a4b4b=_0x1cc9bf;try{if(!this[_0x5a4b4b(0x1eb)])return;this[_0x5a4b4b(0x288)]&&this[_0x5a4b4b(0x1bf)](),(await this[_0x5a4b4b(0x272)])[_0x5a4b4b(0x1dc)](JSON[_0x5a4b4b(0x24b)](_0x1a542e));}catch(_0x1bba3f){this[_0x5a4b4b(0x278)]?console[_0x5a4b4b(0x26a)](this[_0x5a4b4b(0x29c)]+':\\x20'+(_0x1bba3f&&_0x1bba3f[_0x5a4b4b(0x201)])):(this[_0x5a4b4b(0x278)]=!0x0,console['warn'](this[_0x5a4b4b(0x29c)]+':\\x20'+(_0x1bba3f&&_0x1bba3f['message']),_0x1a542e)),this['_allowedToSend']=!0x1,this[_0x5a4b4b(0x1f0)]();}};function H(_0x1b0a09,_0x314bb3,_0x5ebd0b,_0x438761,_0x1c81c5,_0x462e71,_0x27e8ff,_0x303f82=ne){var _0x1230b6=_0x1cc9bf;let _0x34b1eb=_0x5ebd0b[_0x1230b6(0x1af)](',')[_0x1230b6(0x1e4)](_0x23029c=>{var _0x17b57e=_0x1230b6,_0x2b1d41,_0x47cf93,_0x11d0ca,_0x1695f3,_0x131178,_0x3adedf,_0x55f082,_0xdd61e4;try{if(!_0x1b0a09[_0x17b57e(0x1d1)]){let _0x6c7366=((_0x47cf93=(_0x2b1d41=_0x1b0a09[_0x17b57e(0x1e2)])==null?void 0x0:_0x2b1d41['versions'])==null?void 0x0:_0x47cf93['node'])||((_0x1695f3=(_0x11d0ca=_0x1b0a09[_0x17b57e(0x1e2)])==null?void 0x0:_0x11d0ca[_0x17b57e(0x1f5)])==null?void 0x0:_0x1695f3[_0x17b57e(0x200)])==='edge';(_0x1c81c5==='next.js'||_0x1c81c5==='remix'||_0x1c81c5===_0x17b57e(0x215)||_0x1c81c5===_0x17b57e(0x274))&&(_0x1c81c5+=_0x6c7366?'\\x20server':'\\x20browser');let _0x547070='';_0x1c81c5==='react-native'&&(_0x547070=(((_0x55f082=(_0x3adedf=(_0x131178=_0x1b0a09[_0x17b57e(0x1c0)])==null?void 0x0:_0x131178[_0x17b57e(0x1c5)])==null?void 0x0:_0x3adedf[_0x17b57e(0x210)])==null?void 0x0:_0x55f082[_0x17b57e(0x1cd)])||_0x17b57e(0x1ac))['toLowerCase'](),_0x547070&&(_0x1c81c5+='\\x20'+_0x547070,(_0x547070===_0x17b57e(0x284)||_0x547070===_0x17b57e(0x1ac)&&((_0xdd61e4=_0x1b0a09[_0x17b57e(0x232)])==null?void 0x0:_0xdd61e4[_0x17b57e(0x230)])==='10.0.2.2')&&(_0x314bb3='10.0.2.2'))),_0x1b0a09['_console_ninja_session']={'id':+new Date(),'tool':_0x1c81c5},_0x27e8ff&&_0x1c81c5&&!_0x6c7366&&(_0x547070?console[_0x17b57e(0x23c)]('Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+_0x547070+_0x17b57e(0x1cb)):console['log'](_0x17b57e(0x258)+(_0x1c81c5[_0x17b57e(0x23d)](0x0)[_0x17b57e(0x263)]()+_0x1c81c5[_0x17b57e(0x1c2)](0x1))+',',_0x17b57e(0x239),_0x17b57e(0x254)));}let _0x2934bd=new z(_0x1b0a09,_0x314bb3,_0x23029c,_0x438761,_0x462e71,_0x303f82);return _0x2934bd['send']['bind'](_0x2934bd);}catch(_0x161903){return console['warn'](_0x17b57e(0x2a2),_0x161903&&_0x161903[_0x17b57e(0x201)]),()=>{};}});return _0x1c14eb=>_0x34b1eb['forEach'](_0x287945=>_0x287945(_0x1c14eb));}function ne(_0x4032f4,_0x332ef1,_0x667427,_0x4197b0){var _0x599762=_0x1cc9bf;_0x4197b0&&_0x4032f4===_0x599762(0x240)&&_0x667427['location'][_0x599762(0x240)]();}function b(_0x554a57){var _0x3352bd=_0x1cc9bf,_0x4671a9,_0x54c0b2;let _0x20846c=function(_0x512f52,_0x18c985){return _0x18c985-_0x512f52;},_0x1d37bd;if(_0x554a57[_0x3352bd(0x202)])_0x1d37bd=function(){var _0x47e319=_0x3352bd;return _0x554a57[_0x47e319(0x202)]['now']();};else{if(_0x554a57['process']&&_0x554a57['process']['hrtime']&&((_0x54c0b2=(_0x4671a9=_0x554a57[_0x3352bd(0x1e2)])==null?void 0x0:_0x4671a9[_0x3352bd(0x1f5)])==null?void 0x0:_0x54c0b2['NEXT_RUNTIME'])!=='edge')_0x1d37bd=function(){var _0x64184f=_0x3352bd;return _0x554a57['process'][_0x64184f(0x2a0)]();},_0x20846c=function(_0x10d5f4,_0x2be210){return 0x3e8*(_0x2be210[0x0]-_0x10d5f4[0x0])+(_0x2be210[0x1]-_0x10d5f4[0x1])/0xf4240;};else try{let {performance:_0x1d1d12}=require('perf_hooks');_0x1d37bd=function(){return _0x1d1d12['now']();};}catch{_0x1d37bd=function(){return+new Date();};}}return{'elapsed':_0x20846c,'timeStamp':_0x1d37bd,'now':()=>Date[_0x3352bd(0x244)]()};}function _0x36d2(_0x45364,_0x526de7){var _0x4abdec=_0x4abd();return _0x36d2=function(_0x36d215,_0x265de1){_0x36d215=_0x36d215-0x1ac;var _0x1b6b7c=_0x4abdec[_0x36d215];return _0x1b6b7c;},_0x36d2(_0x45364,_0x526de7);}function _0x4abd(){var _0x2edd5c=['toUpperCase','_inBrowser','some','onmessage','number','[object\\x20Date]','string','warn','_disposeWebsocket','default','reduceOnCount','time','autoExpandPreviousObjects','toString','_isPrimitiveType','_ws','endsWith','angular','_cleanNode','console','','_extendedWarning','unknown','import(\\x27url\\x27)','dockerizedApp','iterator','_inNextEdge','replace','push','_quotedRegExp','autoExpandLimit','[object\\x20Array]','port','android','4653gpnXWv','value','object','_allowedToConnectOnSend','method','219195IeQxdG','strLength','_processTreeNodeResult','127.0.0.1','690168gXosUu','_addLoadNode','','slice','function','_maxConnectAttemptCount','reducePolicy','reduceLimits','current','host','_setNodePermissions','_getOwnPropertyDescriptor','50268','[object\\x20Map]','_sendErrorMessage','timeStamp','sortProps','depth','hrtime','_setNodeId','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','noFunctions','eventReceivedCallback','reducedLimits','negativeZero','_hasSymbolPropertyOnItsPath','_sortProps','_p_','resolveGetters','_HTMLAllCollection','_WebSocketClass','call','nodeModules','_addProperty','totalStrLength','url','_dateToString','origin','date','positiveInfinity','next.js','_setNodeQueryPath','Set','concat','react-native','emulator','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','248755AYwszL','split','hits','getter','elapsed','edge','parse','_connectAttemptCount','28RulXnQ','30JSZfMl','_consoleNinjaAllowedToStart','_objectToString','match','sort','indexOf','onclose','data','_connectToHostNow','expo','Error','substr','serialize','props','modules','stack','rootExpression','includes','178LksGJe','defaultLimits',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','reduceOnAccumulatedProcessingTimeMs','osName','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','then','path','_console_ninja_session','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','5310qruWei','_setNodeExpandableState','_Symbol','length','import(\\x27path\\x27)','_socket','autoExpand','ws://','String','send','getOwnPropertySymbols','index','768872lRFuEd','HTMLAllCollection','_connected','process','_blacklistedProperty','map','_isMap','_console_ninja','_regExpToString','cappedProps','_type','_getOwnPropertyNames','_allowedToSend','_treeNodePropertiesBeforeFullValue','...','_addFunctionsNode','boolean','_attemptToReconnectShortly','level','_hasMapOnItsPath','setter','join','env','args','POSITIVE_INFINITY','bind','error','prototype','catch','expressionsToEvaluate','symbol','negativeInfinity','type','NEXT_RUNTIME','message','performance','_webSocketErrorDocsLink','unshift','readyState','global','1.0.0','get','isExpressionToEvaluate','capped','valueOf','ninjaSuppressConsole','nan','gateway.docker.internal','https://tinyurl.com/37x8b79t','ExpoDevice','_ninjaIgnoreNextError','node','elements','parent','astro','allStrLength','_connecting','10401Zenqaz','Number','_getOwnPropertySymbols','next.js','undefined','root_exp_id','_p_name','name','toLowerCase','unref','Buffer','[object\\x20BigInt]','_propertyName','_setNodeExpressionPath','resolve','close','_isPrimitiveWrapperType','NEGATIVE_INFINITY','getOwnPropertyDescriptor',\"/Users/asius/.antigravity/extensions/wallabyjs.console-ninja-1.0.504-universal/node_modules\",'bound\\x20Promise','root_exp','_treeNodePropertiesAfterFullValue','perLogpoint','hostname','_property','location','22752dilhOK','Map','Symbol','_WebSocket','array','startsWith','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_capIfString','_additionalMetadata','log','charAt','coverage','test','reload','constructor','bigint','count','now','onerror','1','stackTraceLimit','[object\\x20Set]','_isUndefined','1767543855041','stringify','forEach','22szEAAH','autoExpandMaxDepth','_reconnectTimeout','_setNodeLabel','_isNegativeZero','autoExpandPropertyCount','null','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','_hasSetOnItsPath','resetOnProcessingTimeAverageMs','funcName','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','disabledTrace',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"AsiusM3.local\",\"192.168.0.191\"],'fromCharCode','versions','_isSet','resetWhenQuietMs','onopen','_undefined','_isArray','trace'];_0x4abd=function(){return _0x2edd5c;};return _0x4abd();}function X(_0x3f2cc3,_0x444a65,_0x948c19){var _0x47f6de=_0x1cc9bf,_0x58fcb7,_0x714d9c,_0x3e7d2,_0x3e66ef,_0x358522,_0x530474,_0x126449;if(_0x3f2cc3[_0x47f6de(0x1b8)]!==void 0x0)return _0x3f2cc3[_0x47f6de(0x1b8)];let _0x1c4f65=((_0x714d9c=(_0x58fcb7=_0x3f2cc3['process'])==null?void 0x0:_0x58fcb7[_0x47f6de(0x25c)])==null?void 0x0:_0x714d9c[_0x47f6de(0x212)])||((_0x3e66ef=(_0x3e7d2=_0x3f2cc3[_0x47f6de(0x1e2)])==null?void 0x0:_0x3e7d2[_0x47f6de(0x1f5)])==null?void 0x0:_0x3e66ef[_0x47f6de(0x200)])==='edge',_0x332f6b=!!(_0x948c19===_0x47f6de(0x2ba)&&((_0x358522=_0x3f2cc3[_0x47f6de(0x1c0)])==null?void 0x0:_0x358522[_0x47f6de(0x1c5)]));function _0x2e0548(_0x117428){var _0x3fecad=_0x47f6de;if(_0x117428[_0x3fecad(0x238)]('/')&&_0x117428[_0x3fecad(0x273)]('/')){let _0x2eb059=new RegExp(_0x117428[_0x3fecad(0x291)](0x1,-0x1));return _0x40eb98=>_0x2eb059[_0x3fecad(0x23f)](_0x40eb98);}else{if(_0x117428['includes']('*')||_0x117428[_0x3fecad(0x1c8)]('?')){let _0x170bc4=new RegExp('^'+_0x117428[_0x3fecad(0x27e)](/\\./g,String[_0x3fecad(0x25b)](0x5c)+'.')[_0x3fecad(0x27e)](/\\*/g,'.*')[_0x3fecad(0x27e)](/\\?/g,'.')+String[_0x3fecad(0x25b)](0x24));return _0x11bd1b=>_0x170bc4[_0x3fecad(0x23f)](_0x11bd1b);}else return _0x331aa3=>_0x331aa3===_0x117428;}}let _0x10619f=_0x444a65[_0x47f6de(0x1e4)](_0x2e0548);return _0x3f2cc3['_consoleNinjaAllowedToStart']=_0x1c4f65||!_0x444a65,!_0x3f2cc3[_0x47f6de(0x1b8)]&&((_0x530474=_0x3f2cc3[_0x47f6de(0x232)])==null?void 0x0:_0x530474[_0x47f6de(0x230)])&&(_0x3f2cc3[_0x47f6de(0x1b8)]=_0x10619f[_0x47f6de(0x265)](_0x798b03=>_0x798b03(_0x3f2cc3['location'][_0x47f6de(0x230)]))),_0x332f6b&&!_0x3f2cc3[_0x47f6de(0x1b8)]&&!((_0x126449=_0x3f2cc3['location'])!=null&&_0x126449[_0x47f6de(0x230)])&&(_0x3f2cc3[_0x47f6de(0x1b8)]=!0x0),_0x3f2cc3[_0x47f6de(0x1b8)];}function J(_0x4fb91b,_0x3c6597,_0x56215a,_0x1ac10d,_0x167e22,_0x58debe){var _0xb96e9f=_0x1cc9bf;_0x4fb91b=_0x4fb91b,_0x3c6597=_0x3c6597,_0x56215a=_0x56215a,_0x1ac10d=_0x1ac10d,_0x167e22=_0x167e22,_0x167e22=_0x167e22||{},_0x167e22['defaultLimits']=_0x167e22[_0xb96e9f(0x1ca)]||{},_0x167e22[_0xb96e9f(0x2a5)]=_0x167e22['reducedLimits']||{},_0x167e22[_0xb96e9f(0x294)]=_0x167e22[_0xb96e9f(0x294)]||{},_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x22f)]=_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x22f)]||{},_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)]=_0x167e22[_0xb96e9f(0x294)]['global']||{};let _0x6f4d67={'perLogpoint':{'reduceOnCount':_0x167e22[_0xb96e9f(0x294)]['perLogpoint']['reduceOnCount']||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x22f)]['reduceOnAccumulatedProcessingTimeMs']||0x64,'resetWhenQuietMs':_0x167e22[_0xb96e9f(0x294)]['perLogpoint'][_0xb96e9f(0x25e)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x167e22['reducePolicy'][_0xb96e9f(0x22f)][_0xb96e9f(0x256)]||0x64},'global':{'reduceOnCount':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)]['reduceOnCount']||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)][_0xb96e9f(0x1cc)]||0x12c,'resetWhenQuietMs':_0x167e22['reducePolicy'][_0xb96e9f(0x206)][_0xb96e9f(0x25e)]||0x32,'resetOnProcessingTimeAverageMs':_0x167e22[_0xb96e9f(0x294)][_0xb96e9f(0x206)][_0xb96e9f(0x256)]||0x64}},_0x5adaf7=b(_0x4fb91b),_0x394800=_0x5adaf7[_0xb96e9f(0x1b2)],_0x21489e=_0x5adaf7['timeStamp'];function _0x435715(){var _0x30387a=_0xb96e9f;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x30387a(0x280)]=/'([^\\\\']|\\\\')*'/,this[_0x30387a(0x260)]=_0x4fb91b[_0x30387a(0x21c)],this['_HTMLAllCollection']=_0x4fb91b[_0x30387a(0x1e0)],this[_0x30387a(0x299)]=Object[_0x30387a(0x22a)],this['_getOwnPropertyNames']=Object['getOwnPropertyNames'],this['_Symbol']=_0x4fb91b[_0x30387a(0x235)],this[_0x30387a(0x1e7)]=RegExp[_0x30387a(0x1fa)][_0x30387a(0x270)],this['_dateToString']=Date[_0x30387a(0x1fa)][_0x30387a(0x270)];}_0x435715['prototype'][_0xb96e9f(0x1c3)]=function(_0x76cd6b,_0x39c45b,_0x4d4b0f,_0x4fb231){var _0x313e5d=_0xb96e9f,_0x258d79=this,_0x5649bc=_0x4d4b0f[_0x313e5d(0x1d9)];function _0x7e4bff(_0x57d702,_0x2575bb,_0xb55e81){var _0x2281e2=_0x313e5d;_0x2575bb[_0x2281e2(0x1ff)]=_0x2281e2(0x279),_0x2575bb['error']=_0x57d702[_0x2281e2(0x201)],_0x3796b2=_0xb55e81['node'][_0x2281e2(0x296)],_0xb55e81['node'][_0x2281e2(0x296)]=_0x2575bb,_0x258d79['_treeNodePropertiesBeforeFullValue'](_0x2575bb,_0xb55e81);}let _0x5ae676,_0x8c6e47,_0x3cb06c=_0x4fb91b[_0x313e5d(0x20c)];_0x4fb91b[_0x313e5d(0x20c)]=!0x0,_0x4fb91b['console']&&(_0x5ae676=_0x4fb91b['console'][_0x313e5d(0x1f9)],_0x8c6e47=_0x4fb91b['console'][_0x313e5d(0x26a)],_0x5ae676&&(_0x4fb91b[_0x313e5d(0x276)][_0x313e5d(0x1f9)]=function(){}),_0x8c6e47&&(_0x4fb91b['console']['warn']=function(){}));try{try{_0x4d4b0f[_0x313e5d(0x1f1)]++,_0x4d4b0f[_0x313e5d(0x1d9)]&&_0x4d4b0f['autoExpandPreviousObjects'][_0x313e5d(0x27f)](_0x39c45b);var _0x47ccf2,_0x5cfc81,_0x24d24a,_0x20acb4,_0x3c99fb=[],_0x42e7e3=[],_0x2c2168,_0x55fbfd=this[_0x313e5d(0x1e9)](_0x39c45b),_0x1c6758=_0x55fbfd===_0x313e5d(0x237),_0x4f3c4f=!0x1,_0x26190b=_0x55fbfd===_0x313e5d(0x292),_0x3b9bfe=this['_isPrimitiveType'](_0x55fbfd),_0x1ed288=this[_0x313e5d(0x228)](_0x55fbfd),_0x396744=_0x3b9bfe||_0x1ed288,_0x29e1ab={},_0x59fa4d=0x0,_0x71607d=!0x1,_0x3796b2,_0x5df68c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4d4b0f[_0x313e5d(0x29f)]){if(_0x1c6758){if(_0x5cfc81=_0x39c45b[_0x313e5d(0x1d6)],_0x5cfc81>_0x4d4b0f[_0x313e5d(0x213)]){for(_0x24d24a=0x0,_0x20acb4=_0x4d4b0f[_0x313e5d(0x213)],_0x47ccf2=_0x24d24a;_0x47ccf2<_0x20acb4;_0x47ccf2++)_0x42e7e3['push'](_0x258d79[_0x313e5d(0x2af)](_0x3c99fb,_0x39c45b,_0x55fbfd,_0x47ccf2,_0x4d4b0f));_0x76cd6b['cappedElements']=!0x0;}else{for(_0x24d24a=0x0,_0x20acb4=_0x5cfc81,_0x47ccf2=_0x24d24a;_0x47ccf2<_0x20acb4;_0x47ccf2++)_0x42e7e3[_0x313e5d(0x27f)](_0x258d79[_0x313e5d(0x2af)](_0x3c99fb,_0x39c45b,_0x55fbfd,_0x47ccf2,_0x4d4b0f));}_0x4d4b0f[_0x313e5d(0x252)]+=_0x42e7e3[_0x313e5d(0x1d6)];}if(!(_0x55fbfd===_0x313e5d(0x253)||_0x55fbfd===_0x313e5d(0x21c))&&!_0x3b9bfe&&_0x55fbfd!=='String'&&_0x55fbfd!==_0x313e5d(0x222)&&_0x55fbfd!==_0x313e5d(0x242)){var _0x14efcf=_0x4fb231[_0x313e5d(0x1c4)]||_0x4d4b0f[_0x313e5d(0x1c4)];if(this[_0x313e5d(0x25d)](_0x39c45b)?(_0x47ccf2=0x0,_0x39c45b[_0x313e5d(0x24c)](function(_0x4e2e7f){var _0x29982e=_0x313e5d;if(_0x59fa4d++,_0x4d4b0f[_0x29982e(0x252)]++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;return;}if(!_0x4d4b0f[_0x29982e(0x209)]&&_0x4d4b0f[_0x29982e(0x1d9)]&&_0x4d4b0f['autoExpandPropertyCount']>_0x4d4b0f[_0x29982e(0x281)]){_0x71607d=!0x0;return;}_0x42e7e3[_0x29982e(0x27f)](_0x258d79[_0x29982e(0x2af)](_0x3c99fb,_0x39c45b,'Set',_0x47ccf2++,_0x4d4b0f,function(_0x1d24ad){return function(){return _0x1d24ad;};}(_0x4e2e7f)));})):this[_0x313e5d(0x1e5)](_0x39c45b)&&_0x39c45b['forEach'](function(_0x258aec,_0x325faf){var _0x23cca3=_0x313e5d;if(_0x59fa4d++,_0x4d4b0f['autoExpandPropertyCount']++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;return;}if(!_0x4d4b0f['isExpressionToEvaluate']&&_0x4d4b0f[_0x23cca3(0x1d9)]&&_0x4d4b0f[_0x23cca3(0x252)]>_0x4d4b0f[_0x23cca3(0x281)]){_0x71607d=!0x0;return;}var _0x89a54=_0x325faf['toString']();_0x89a54['length']>0x64&&(_0x89a54=_0x89a54[_0x23cca3(0x291)](0x0,0x64)+_0x23cca3(0x1ed)),_0x42e7e3[_0x23cca3(0x27f)](_0x258d79[_0x23cca3(0x2af)](_0x3c99fb,_0x39c45b,_0x23cca3(0x234),_0x89a54,_0x4d4b0f,function(_0x278033){return function(){return _0x278033;};}(_0x258aec)));}),!_0x4f3c4f){try{for(_0x2c2168 in _0x39c45b)if(!(_0x1c6758&&_0x5df68c['test'](_0x2c2168))&&!this[_0x313e5d(0x1e3)](_0x39c45b,_0x2c2168,_0x4d4b0f)){if(_0x59fa4d++,_0x4d4b0f[_0x313e5d(0x252)]++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;break;}if(!_0x4d4b0f[_0x313e5d(0x209)]&&_0x4d4b0f['autoExpand']&&_0x4d4b0f[_0x313e5d(0x252)]>_0x4d4b0f[_0x313e5d(0x281)]){_0x71607d=!0x0;break;}_0x42e7e3[_0x313e5d(0x27f)](_0x258d79['_addObjectProperty'](_0x3c99fb,_0x29e1ab,_0x39c45b,_0x55fbfd,_0x2c2168,_0x4d4b0f));}}catch{}if(_0x29e1ab['_p_length']=!0x0,_0x26190b&&(_0x29e1ab[_0x313e5d(0x21e)]=!0x0),!_0x71607d){var _0x3fdaac=[][_0x313e5d(0x2b9)](this[_0x313e5d(0x1ea)](_0x39c45b))['concat'](this['_getOwnPropertySymbols'](_0x39c45b));for(_0x47ccf2=0x0,_0x5cfc81=_0x3fdaac[_0x313e5d(0x1d6)];_0x47ccf2<_0x5cfc81;_0x47ccf2++)if(_0x2c2168=_0x3fdaac[_0x47ccf2],!(_0x1c6758&&_0x5df68c[_0x313e5d(0x23f)](_0x2c2168['toString']()))&&!this[_0x313e5d(0x1e3)](_0x39c45b,_0x2c2168,_0x4d4b0f)&&!_0x29e1ab[typeof _0x2c2168!=_0x313e5d(0x1fd)?'_p_'+_0x2c2168[_0x313e5d(0x270)]():_0x2c2168]){if(_0x59fa4d++,_0x4d4b0f[_0x313e5d(0x252)]++,_0x59fa4d>_0x14efcf){_0x71607d=!0x0;break;}if(!_0x4d4b0f[_0x313e5d(0x209)]&&_0x4d4b0f[_0x313e5d(0x1d9)]&&_0x4d4b0f[_0x313e5d(0x252)]>_0x4d4b0f['autoExpandLimit']){_0x71607d=!0x0;break;}_0x42e7e3[_0x313e5d(0x27f)](_0x258d79['_addObjectProperty'](_0x3c99fb,_0x29e1ab,_0x39c45b,_0x55fbfd,_0x2c2168,_0x4d4b0f));}}}}}if(_0x76cd6b['type']=_0x55fbfd,_0x396744?(_0x76cd6b[_0x313e5d(0x286)]=_0x39c45b['valueOf'](),this[_0x313e5d(0x23a)](_0x55fbfd,_0x76cd6b,_0x4d4b0f,_0x4fb231)):_0x55fbfd===_0x313e5d(0x2b4)?_0x76cd6b[_0x313e5d(0x286)]=this[_0x313e5d(0x2b2)]['call'](_0x39c45b):_0x55fbfd==='bigint'?_0x76cd6b[_0x313e5d(0x286)]=_0x39c45b['toString']():_0x55fbfd==='RegExp'?_0x76cd6b[_0x313e5d(0x286)]=this[_0x313e5d(0x1e7)][_0x313e5d(0x2ad)](_0x39c45b):_0x55fbfd===_0x313e5d(0x1fd)&&this[_0x313e5d(0x1d5)]?_0x76cd6b[_0x313e5d(0x286)]=this[_0x313e5d(0x1d5)][_0x313e5d(0x1fa)][_0x313e5d(0x270)][_0x313e5d(0x2ad)](_0x39c45b):!_0x4d4b0f[_0x313e5d(0x29f)]&&!(_0x55fbfd==='null'||_0x55fbfd==='undefined')&&(delete _0x76cd6b[_0x313e5d(0x286)],_0x76cd6b[_0x313e5d(0x20a)]=!0x0),_0x71607d&&(_0x76cd6b[_0x313e5d(0x1e8)]=!0x0),_0x3796b2=_0x4d4b0f[_0x313e5d(0x212)][_0x313e5d(0x296)],_0x4d4b0f[_0x313e5d(0x212)][_0x313e5d(0x296)]=_0x76cd6b,this[_0x313e5d(0x1ec)](_0x76cd6b,_0x4d4b0f),_0x42e7e3['length']){for(_0x47ccf2=0x0,_0x5cfc81=_0x42e7e3[_0x313e5d(0x1d6)];_0x47ccf2<_0x5cfc81;_0x47ccf2++)_0x42e7e3[_0x47ccf2](_0x47ccf2);}_0x3c99fb[_0x313e5d(0x1d6)]&&(_0x76cd6b['props']=_0x3c99fb);}catch(_0x4300e9){_0x7e4bff(_0x4300e9,_0x76cd6b,_0x4d4b0f);}this[_0x313e5d(0x23b)](_0x39c45b,_0x76cd6b),this[_0x313e5d(0x22e)](_0x76cd6b,_0x4d4b0f),_0x4d4b0f[_0x313e5d(0x212)][_0x313e5d(0x296)]=_0x3796b2,_0x4d4b0f[_0x313e5d(0x1f1)]--,_0x4d4b0f[_0x313e5d(0x1d9)]=_0x5649bc,_0x4d4b0f[_0x313e5d(0x1d9)]&&_0x4d4b0f[_0x313e5d(0x26f)]['pop']();}finally{_0x5ae676&&(_0x4fb91b['console'][_0x313e5d(0x1f9)]=_0x5ae676),_0x8c6e47&&(_0x4fb91b[_0x313e5d(0x276)]['warn']=_0x8c6e47),_0x4fb91b['ninjaSuppressConsole']=_0x3cb06c;}return _0x76cd6b;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x21a)]=function(_0xe5f71a){var _0x47860d=_0xb96e9f;return Object[_0x47860d(0x1dd)]?Object[_0x47860d(0x1dd)](_0xe5f71a):[];},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x25d)]=function(_0x5e19a4){var _0x3e9ebe=_0xb96e9f;return!!(_0x5e19a4&&_0x4fb91b[_0x3e9ebe(0x2b8)]&&this[_0x3e9ebe(0x1b9)](_0x5e19a4)===_0x3e9ebe(0x248)&&_0x5e19a4[_0x3e9ebe(0x24c)]);},_0x435715[_0xb96e9f(0x1fa)]['_blacklistedProperty']=function(_0x400088,_0x487546,_0x25c83d){var _0x5b6258=_0xb96e9f;if(!_0x25c83d[_0x5b6258(0x2aa)]){let _0x1d3a41=this['_getOwnPropertyDescriptor'](_0x400088,_0x487546);if(_0x1d3a41&&_0x1d3a41[_0x5b6258(0x208)])return!0x0;}return _0x25c83d[_0x5b6258(0x2a3)]?typeof _0x400088[_0x487546]==_0x5b6258(0x292):!0x1;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1e9)]=function(_0x3e2827){var _0x3c9595=_0xb96e9f,_0x2d9c62='';return _0x2d9c62=typeof _0x3e2827,_0x2d9c62===_0x3c9595(0x287)?this[_0x3c9595(0x1b9)](_0x3e2827)==='[object\\x20Array]'?_0x2d9c62=_0x3c9595(0x237):this[_0x3c9595(0x1b9)](_0x3e2827)===_0x3c9595(0x268)?_0x2d9c62=_0x3c9595(0x2b4):this[_0x3c9595(0x1b9)](_0x3e2827)===_0x3c9595(0x223)?_0x2d9c62=_0x3c9595(0x242):_0x3e2827===null?_0x2d9c62=_0x3c9595(0x253):_0x3e2827[_0x3c9595(0x241)]&&(_0x2d9c62=_0x3e2827[_0x3c9595(0x241)][_0x3c9595(0x21f)]||_0x2d9c62):_0x2d9c62==='undefined'&&this[_0x3c9595(0x2ab)]&&_0x3e2827 instanceof this['_HTMLAllCollection']&&(_0x2d9c62=_0x3c9595(0x1e0)),_0x2d9c62;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1b9)]=function(_0x4ba920){var _0x2a5a5d=_0xb96e9f;return Object[_0x2a5a5d(0x1fa)][_0x2a5a5d(0x270)][_0x2a5a5d(0x2ad)](_0x4ba920);},_0x435715['prototype'][_0xb96e9f(0x271)]=function(_0x7035e1){var _0x5a3341=_0xb96e9f;return _0x7035e1===_0x5a3341(0x1ef)||_0x7035e1===_0x5a3341(0x269)||_0x7035e1===_0x5a3341(0x267);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x228)]=function(_0x446bde){var _0x5d4a51=_0xb96e9f;return _0x446bde==='Boolean'||_0x446bde===_0x5d4a51(0x1db)||_0x446bde===_0x5d4a51(0x219);},_0x435715['prototype']['_addProperty']=function(_0x434599,_0x588a33,_0xb10858,_0x260c09,_0x294d32,_0x2f9aaf){var _0x465131=this;return function(_0x22dfa0){var _0x3ee84a=_0x36d2,_0x5c9d65=_0x294d32[_0x3ee84a(0x212)]['current'],_0xa12a2e=_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x1de)],_0x2fc0f1=_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x214)];_0x294d32[_0x3ee84a(0x212)]['parent']=_0x5c9d65,_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x1de)]=typeof _0x260c09==_0x3ee84a(0x267)?_0x260c09:_0x22dfa0,_0x434599[_0x3ee84a(0x27f)](_0x465131[_0x3ee84a(0x231)](_0x588a33,_0xb10858,_0x260c09,_0x294d32,_0x2f9aaf)),_0x294d32[_0x3ee84a(0x212)][_0x3ee84a(0x214)]=_0x2fc0f1,_0x294d32['node'][_0x3ee84a(0x1de)]=_0xa12a2e;};},_0x435715[_0xb96e9f(0x1fa)]['_addObjectProperty']=function(_0x5b6973,_0x70f90e,_0x52a9cf,_0xe07745,_0x4fb91d,_0x336b03,_0x11e3ac){var _0x1121e2=_0xb96e9f,_0x8aec5d=this;return _0x70f90e[typeof _0x4fb91d!=_0x1121e2(0x1fd)?_0x1121e2(0x2a9)+_0x4fb91d['toString']():_0x4fb91d]=!0x0,function(_0x4479f6){var _0x4e8fc5=_0x1121e2,_0x2cbe0d=_0x336b03[_0x4e8fc5(0x212)]['current'],_0x56a74e=_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x1de)],_0x54d803=_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x214)];_0x336b03['node'][_0x4e8fc5(0x214)]=_0x2cbe0d,_0x336b03['node'][_0x4e8fc5(0x1de)]=_0x4479f6,_0x5b6973['push'](_0x8aec5d[_0x4e8fc5(0x231)](_0x52a9cf,_0xe07745,_0x4fb91d,_0x336b03,_0x11e3ac)),_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x214)]=_0x54d803,_0x336b03[_0x4e8fc5(0x212)][_0x4e8fc5(0x1de)]=_0x56a74e;};},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x231)]=function(_0x593ebb,_0x5b5f6f,_0x23f42d,_0x37a504,_0x3f7612){var _0x452555=_0xb96e9f,_0x5b1e66=this;_0x3f7612||(_0x3f7612=function(_0x51cec9,_0x131308){return _0x51cec9[_0x131308];});var _0xac5253=_0x23f42d[_0x452555(0x270)](),_0x341e68=_0x37a504[_0x452555(0x1fc)]||{},_0x4b6726=_0x37a504[_0x452555(0x29f)],_0x4d9324=_0x37a504[_0x452555(0x209)];try{var _0x15e737=this[_0x452555(0x1e5)](_0x593ebb),_0x11fa3e=_0xac5253;_0x15e737&&_0x11fa3e[0x0]==='\\x27'&&(_0x11fa3e=_0x11fa3e[_0x452555(0x1c2)](0x1,_0x11fa3e['length']-0x2));var _0x376da5=_0x37a504[_0x452555(0x1fc)]=_0x341e68['_p_'+_0x11fa3e];_0x376da5&&(_0x37a504[_0x452555(0x29f)]=_0x37a504[_0x452555(0x29f)]+0x1),_0x37a504[_0x452555(0x209)]=!!_0x376da5;var _0x465224=typeof _0x23f42d==_0x452555(0x1fd),_0x5d1555={'name':_0x465224||_0x15e737?_0xac5253:this[_0x452555(0x224)](_0xac5253)};if(_0x465224&&(_0x5d1555['symbol']=!0x0),!(_0x5b5f6f===_0x452555(0x237)||_0x5b5f6f===_0x452555(0x1c1))){var _0x96734a=this[_0x452555(0x299)](_0x593ebb,_0x23f42d);if(_0x96734a&&(_0x96734a['set']&&(_0x5d1555[_0x452555(0x1f3)]=!0x0),_0x96734a[_0x452555(0x208)]&&!_0x376da5&&!_0x37a504[_0x452555(0x2aa)]))return _0x5d1555[_0x452555(0x1b1)]=!0x0,this[_0x452555(0x28c)](_0x5d1555,_0x37a504),_0x5d1555;}var _0x3dec1;try{_0x3dec1=_0x3f7612(_0x593ebb,_0x23f42d);}catch(_0x5a1879){return _0x5d1555={'name':_0xac5253,'type':_0x452555(0x279),'error':_0x5a1879[_0x452555(0x201)]},this[_0x452555(0x28c)](_0x5d1555,_0x37a504),_0x5d1555;}var _0x1b695f=this['_type'](_0x3dec1),_0x500382=this[_0x452555(0x271)](_0x1b695f);if(_0x5d1555['type']=_0x1b695f,_0x500382)this['_processTreeNodeResult'](_0x5d1555,_0x37a504,_0x3dec1,function(){var _0x4a9c1b=_0x452555;_0x5d1555[_0x4a9c1b(0x286)]=_0x3dec1[_0x4a9c1b(0x20b)](),!_0x376da5&&_0x5b1e66[_0x4a9c1b(0x23a)](_0x1b695f,_0x5d1555,_0x37a504,{});});else{var _0x35761a=_0x37a504[_0x452555(0x1d9)]&&_0x37a504[_0x452555(0x1f1)]<_0x37a504[_0x452555(0x24e)]&&_0x37a504[_0x452555(0x26f)][_0x452555(0x1bc)](_0x3dec1)<0x0&&_0x1b695f!==_0x452555(0x292)&&_0x37a504['autoExpandPropertyCount']<_0x37a504['autoExpandLimit'];_0x35761a||_0x37a504[_0x452555(0x1f1)]<_0x4b6726||_0x376da5?this[_0x452555(0x1c3)](_0x5d1555,_0x3dec1,_0x37a504,_0x376da5||{}):this[_0x452555(0x28c)](_0x5d1555,_0x37a504,_0x3dec1,function(){var _0x1ba74f=_0x452555;_0x1b695f===_0x1ba74f(0x253)||_0x1b695f===_0x1ba74f(0x21c)||(delete _0x5d1555[_0x1ba74f(0x286)],_0x5d1555[_0x1ba74f(0x20a)]=!0x0);});}return _0x5d1555;}finally{_0x37a504[_0x452555(0x1fc)]=_0x341e68,_0x37a504['depth']=_0x4b6726,_0x37a504[_0x452555(0x209)]=_0x4d9324;}},_0x435715['prototype']['_capIfString']=function(_0x1919f7,_0x59fe25,_0x1e23f2,_0x253da6){var _0x224f8d=_0xb96e9f,_0x2d0f75=_0x253da6['strLength']||_0x1e23f2['strLength'];if((_0x1919f7===_0x224f8d(0x269)||_0x1919f7==='String')&&_0x59fe25[_0x224f8d(0x286)]){let _0x13c391=_0x59fe25['value'][_0x224f8d(0x1d6)];_0x1e23f2[_0x224f8d(0x216)]+=_0x13c391,_0x1e23f2[_0x224f8d(0x216)]>_0x1e23f2[_0x224f8d(0x2b0)]?(_0x59fe25[_0x224f8d(0x20a)]='',delete _0x59fe25[_0x224f8d(0x286)]):_0x13c391>_0x2d0f75&&(_0x59fe25[_0x224f8d(0x20a)]=_0x59fe25['value'][_0x224f8d(0x1c2)](0x0,_0x2d0f75),delete _0x59fe25[_0x224f8d(0x286)]);}},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1e5)]=function(_0x409223){var _0x56da57=_0xb96e9f;return!!(_0x409223&&_0x4fb91b[_0x56da57(0x234)]&&this[_0x56da57(0x1b9)](_0x409223)===_0x56da57(0x29b)&&_0x409223[_0x56da57(0x24c)]);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x224)]=function(_0x3d64c5){var _0x5281f7=_0xb96e9f;if(_0x3d64c5[_0x5281f7(0x1ba)](/^\\d+$/))return _0x3d64c5;var _0xc81808;try{_0xc81808=JSON[_0x5281f7(0x24b)](''+_0x3d64c5);}catch{_0xc81808='\\x22'+this['_objectToString'](_0x3d64c5)+'\\x22';}return _0xc81808[_0x5281f7(0x1ba)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0xc81808=_0xc81808['substr'](0x1,_0xc81808[_0x5281f7(0x1d6)]-0x2):_0xc81808=_0xc81808['replace'](/'/g,'\\x5c\\x27')[_0x5281f7(0x27e)](/\\\\\"/g,'\\x22')[_0x5281f7(0x27e)](/(^\"|\"$)/g,'\\x27'),_0xc81808;},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x28c)]=function(_0x3d398e,_0x2564ed,_0x2a614d,_0x2e0c51){var _0x1ad859=_0xb96e9f;this[_0x1ad859(0x1ec)](_0x3d398e,_0x2564ed),_0x2e0c51&&_0x2e0c51(),this[_0x1ad859(0x23b)](_0x2a614d,_0x3d398e),this[_0x1ad859(0x22e)](_0x3d398e,_0x2564ed);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1ec)]=function(_0x12a410,_0x56e89c){var _0x5129a5=_0xb96e9f;this[_0x5129a5(0x2a1)](_0x12a410,_0x56e89c),this['_setNodeQueryPath'](_0x12a410,_0x56e89c),this['_setNodeExpressionPath'](_0x12a410,_0x56e89c),this[_0x5129a5(0x298)](_0x12a410,_0x56e89c);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x2a1)]=function(_0x22705f,_0x568405){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x2b7)]=function(_0x1788d9,_0x4c370d){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x250)]=function(_0x2ec77f,_0x4756d8){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x249)]=function(_0x320029){var _0x5b67b4=_0xb96e9f;return _0x320029===this[_0x5b67b4(0x260)];},_0x435715[_0xb96e9f(0x1fa)]['_treeNodePropertiesAfterFullValue']=function(_0x1b683a,_0x70424a){var _0xe87ec=_0xb96e9f;this[_0xe87ec(0x250)](_0x1b683a,_0x70424a),this['_setNodeExpandableState'](_0x1b683a),_0x70424a[_0xe87ec(0x29e)]&&this[_0xe87ec(0x2a8)](_0x1b683a),this[_0xe87ec(0x1ee)](_0x1b683a,_0x70424a),this[_0xe87ec(0x28f)](_0x1b683a,_0x70424a),this[_0xe87ec(0x275)](_0x1b683a);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x23b)]=function(_0x29b992,_0x465b42){var _0x3f7bf0=_0xb96e9f;try{_0x29b992&&typeof _0x29b992['length']=='number'&&(_0x465b42['length']=_0x29b992['length']);}catch{}if(_0x465b42['type']===_0x3f7bf0(0x267)||_0x465b42[_0x3f7bf0(0x1ff)]===_0x3f7bf0(0x219)){if(isNaN(_0x465b42[_0x3f7bf0(0x286)]))_0x465b42[_0x3f7bf0(0x20d)]=!0x0,delete _0x465b42[_0x3f7bf0(0x286)];else switch(_0x465b42[_0x3f7bf0(0x286)]){case Number[_0x3f7bf0(0x1f7)]:_0x465b42[_0x3f7bf0(0x2b5)]=!0x0,delete _0x465b42[_0x3f7bf0(0x286)];break;case Number[_0x3f7bf0(0x229)]:_0x465b42[_0x3f7bf0(0x1fe)]=!0x0,delete _0x465b42[_0x3f7bf0(0x286)];break;case 0x0:this[_0x3f7bf0(0x251)](_0x465b42[_0x3f7bf0(0x286)])&&(_0x465b42[_0x3f7bf0(0x2a6)]=!0x0);break;}}else _0x465b42[_0x3f7bf0(0x1ff)]==='function'&&typeof _0x29b992[_0x3f7bf0(0x21f)]=='string'&&_0x29b992['name']&&_0x465b42[_0x3f7bf0(0x21f)]&&_0x29b992[_0x3f7bf0(0x21f)]!==_0x465b42[_0x3f7bf0(0x21f)]&&(_0x465b42[_0x3f7bf0(0x257)]=_0x29b992[_0x3f7bf0(0x21f)]);},_0x435715[_0xb96e9f(0x1fa)]['_isNegativeZero']=function(_0x42b720){return 0x1/_0x42b720===Number['NEGATIVE_INFINITY'];},_0x435715['prototype'][_0xb96e9f(0x2a8)]=function(_0x144a29){var _0x2c4118=_0xb96e9f;!_0x144a29[_0x2c4118(0x1c4)]||!_0x144a29[_0x2c4118(0x1c4)][_0x2c4118(0x1d6)]||_0x144a29[_0x2c4118(0x1ff)]===_0x2c4118(0x237)||_0x144a29[_0x2c4118(0x1ff)]===_0x2c4118(0x234)||_0x144a29['type']===_0x2c4118(0x2b8)||_0x144a29[_0x2c4118(0x1c4)][_0x2c4118(0x1bb)](function(_0x4b855e,_0x633de4){var _0x1e421f=_0x2c4118,_0x39c3a3=_0x4b855e[_0x1e421f(0x21f)][_0x1e421f(0x220)](),_0x37871b=_0x633de4[_0x1e421f(0x21f)][_0x1e421f(0x220)]();return _0x39c3a3<_0x37871b?-0x1:_0x39c3a3>_0x37871b?0x1:0x0;});},_0x435715[_0xb96e9f(0x1fa)]['_addFunctionsNode']=function(_0x336383,_0x4b546f){var _0x2943d1=_0xb96e9f;if(!(_0x4b546f[_0x2943d1(0x2a3)]||!_0x336383[_0x2943d1(0x1c4)]||!_0x336383[_0x2943d1(0x1c4)][_0x2943d1(0x1d6)])){for(var _0x2939f5=[],_0x354665=[],_0x1d6193=0x0,_0x5c01d4=_0x336383['props']['length'];_0x1d6193<_0x5c01d4;_0x1d6193++){var _0xf4eeba=_0x336383[_0x2943d1(0x1c4)][_0x1d6193];_0xf4eeba[_0x2943d1(0x1ff)]===_0x2943d1(0x292)?_0x2939f5['push'](_0xf4eeba):_0x354665[_0x2943d1(0x27f)](_0xf4eeba);}if(!(!_0x354665[_0x2943d1(0x1d6)]||_0x2939f5['length']<=0x1)){_0x336383['props']=_0x354665;var _0x3cb13e={'functionsNode':!0x0,'props':_0x2939f5};this[_0x2943d1(0x2a1)](_0x3cb13e,_0x4b546f),this['_setNodeLabel'](_0x3cb13e,_0x4b546f),this[_0x2943d1(0x1d4)](_0x3cb13e),this[_0x2943d1(0x298)](_0x3cb13e,_0x4b546f),_0x3cb13e['id']+='\\x20f',_0x336383[_0x2943d1(0x1c4)][_0x2943d1(0x204)](_0x3cb13e);}}},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x28f)]=function(_0x44ec36,_0xe995a0){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x1d4)]=function(_0xd571d){},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x261)]=function(_0x4e30ec){var _0x1bd593=_0xb96e9f;return Array['isArray'](_0x4e30ec)||typeof _0x4e30ec==_0x1bd593(0x287)&&this[_0x1bd593(0x1b9)](_0x4e30ec)===_0x1bd593(0x282);},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x298)]=function(_0x4e9e0b,_0x2a21be){},_0x435715['prototype'][_0xb96e9f(0x275)]=function(_0x5cbafd){var _0x51c626=_0xb96e9f;delete _0x5cbafd[_0x51c626(0x2a7)],delete _0x5cbafd[_0x51c626(0x255)],delete _0x5cbafd[_0x51c626(0x1f2)];},_0x435715[_0xb96e9f(0x1fa)][_0xb96e9f(0x225)]=function(_0x1f27eb,_0x4f203a){};let _0x11e6c9=new _0x435715(),_0x5bd079={'props':_0x167e22[_0xb96e9f(0x1ca)][_0xb96e9f(0x1c4)]||0x64,'elements':_0x167e22[_0xb96e9f(0x1ca)]['elements']||0x64,'strLength':_0x167e22[_0xb96e9f(0x1ca)][_0xb96e9f(0x28b)]||0x400*0x32,'totalStrLength':_0x167e22['defaultLimits'][_0xb96e9f(0x2b0)]||0x400*0x32,'autoExpandLimit':_0x167e22[_0xb96e9f(0x1ca)][_0xb96e9f(0x281)]||0x1388,'autoExpandMaxDepth':_0x167e22['defaultLimits'][_0xb96e9f(0x24e)]||0xa},_0x5c4238={'props':_0x167e22['reducedLimits'][_0xb96e9f(0x1c4)]||0x5,'elements':_0x167e22[_0xb96e9f(0x2a5)][_0xb96e9f(0x213)]||0x5,'strLength':_0x167e22[_0xb96e9f(0x2a5)]['strLength']||0x100,'totalStrLength':_0x167e22[_0xb96e9f(0x2a5)]['totalStrLength']||0x100*0x3,'autoExpandLimit':_0x167e22[_0xb96e9f(0x2a5)][_0xb96e9f(0x281)]||0x1e,'autoExpandMaxDepth':_0x167e22[_0xb96e9f(0x2a5)][_0xb96e9f(0x24e)]||0x2};if(_0x58debe){let _0x522749=_0x11e6c9['serialize'][_0xb96e9f(0x1f8)](_0x11e6c9);_0x11e6c9[_0xb96e9f(0x1c3)]=function(_0xcd83e3,_0x45f15a,_0x40e39d,_0x4e0312){return _0x522749(_0xcd83e3,_0x58debe(_0x45f15a),_0x40e39d,_0x4e0312);};}function _0x1fe57c(_0x5335d4,_0x308a29,_0x25d338,_0x1f532c,_0xab7796,_0x1596fe){var _0x42668e=_0xb96e9f;let _0x2438a5,_0x5087c3;try{_0x5087c3=_0x21489e(),_0x2438a5=_0x56215a[_0x308a29],!_0x2438a5||_0x5087c3-_0x2438a5['ts']>_0x6f4d67['perLogpoint']['resetWhenQuietMs']&&_0x2438a5[_0x42668e(0x243)]&&_0x2438a5[_0x42668e(0x26e)]/_0x2438a5['count']<_0x6f4d67['perLogpoint'][_0x42668e(0x256)]?(_0x56215a[_0x308a29]=_0x2438a5={'count':0x0,'time':0x0,'ts':_0x5087c3},_0x56215a[_0x42668e(0x1b0)]={}):_0x5087c3-_0x56215a[_0x42668e(0x1b0)]['ts']>_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x25e)]&&_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x243)]&&_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x26e)]/_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x243)]<_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x256)]&&(_0x56215a[_0x42668e(0x1b0)]={});let _0x27f89e=[],_0x43039f=_0x2438a5[_0x42668e(0x295)]||_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x295)]?_0x5c4238:_0x5bd079,_0x25b218=_0x149248=>{var _0x2f8652=_0x42668e;let _0x595c72={};return _0x595c72[_0x2f8652(0x1c4)]=_0x149248['props'],_0x595c72[_0x2f8652(0x213)]=_0x149248[_0x2f8652(0x213)],_0x595c72[_0x2f8652(0x28b)]=_0x149248[_0x2f8652(0x28b)],_0x595c72[_0x2f8652(0x2b0)]=_0x149248[_0x2f8652(0x2b0)],_0x595c72[_0x2f8652(0x281)]=_0x149248['autoExpandLimit'],_0x595c72[_0x2f8652(0x24e)]=_0x149248[_0x2f8652(0x24e)],_0x595c72['sortProps']=!0x1,_0x595c72[_0x2f8652(0x2a3)]=!_0x3c6597,_0x595c72['depth']=0x1,_0x595c72[_0x2f8652(0x1f1)]=0x0,_0x595c72['expId']=_0x2f8652(0x21d),_0x595c72[_0x2f8652(0x1c7)]=_0x2f8652(0x22d),_0x595c72[_0x2f8652(0x1d9)]=!0x0,_0x595c72[_0x2f8652(0x26f)]=[],_0x595c72['autoExpandPropertyCount']=0x0,_0x595c72[_0x2f8652(0x2aa)]=_0x167e22['resolveGetters'],_0x595c72[_0x2f8652(0x216)]=0x0,_0x595c72[_0x2f8652(0x212)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x595c72;};for(var _0x4d9c24=0x0;_0x4d9c24<_0xab7796[_0x42668e(0x1d6)];_0x4d9c24++)_0x27f89e[_0x42668e(0x27f)](_0x11e6c9['serialize']({'timeNode':_0x5335d4===_0x42668e(0x26e)||void 0x0},_0xab7796[_0x4d9c24],_0x25b218(_0x43039f),{}));if(_0x5335d4==='trace'||_0x5335d4==='error'){let _0xf38a4a=Error[_0x42668e(0x247)];try{Error[_0x42668e(0x247)]=0x1/0x0,_0x27f89e[_0x42668e(0x27f)](_0x11e6c9[_0x42668e(0x1c3)]({'stackNode':!0x0},new Error()[_0x42668e(0x1c6)],_0x25b218(_0x43039f),{'strLength':0x1/0x0}));}finally{Error[_0x42668e(0x247)]=_0xf38a4a;}}return{'method':'log','version':_0x1ac10d,'args':[{'ts':_0x25d338,'session':_0x1f532c,'args':_0x27f89e,'id':_0x308a29,'context':_0x1596fe}]};}catch(_0x18eeb9){return{'method':_0x42668e(0x23c),'version':_0x1ac10d,'args':[{'ts':_0x25d338,'session':_0x1f532c,'args':[{'type':_0x42668e(0x279),'error':_0x18eeb9&&_0x18eeb9[_0x42668e(0x201)]}],'id':_0x308a29,'context':_0x1596fe}]};}finally{try{if(_0x2438a5&&_0x5087c3){let _0x1248bf=_0x21489e();_0x2438a5['count']++,_0x2438a5['time']+=_0x394800(_0x5087c3,_0x1248bf),_0x2438a5['ts']=_0x1248bf,_0x56215a['hits'][_0x42668e(0x243)]++,_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x26e)]+=_0x394800(_0x5087c3,_0x1248bf),_0x56215a['hits']['ts']=_0x1248bf,(_0x2438a5[_0x42668e(0x243)]>_0x6f4d67[_0x42668e(0x22f)][_0x42668e(0x26d)]||_0x2438a5[_0x42668e(0x26e)]>_0x6f4d67['perLogpoint'][_0x42668e(0x1cc)])&&(_0x2438a5[_0x42668e(0x295)]=!0x0),(_0x56215a['hits'][_0x42668e(0x243)]>_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x26d)]||_0x56215a[_0x42668e(0x1b0)]['time']>_0x6f4d67[_0x42668e(0x206)][_0x42668e(0x1cc)])&&(_0x56215a[_0x42668e(0x1b0)][_0x42668e(0x295)]=!0x0);}}catch{}}}return _0x1fe57c;}function G(_0x12418b){var _0x4c2b55=_0x1cc9bf;if(_0x12418b&&typeof _0x12418b==_0x4c2b55(0x287)&&_0x12418b[_0x4c2b55(0x241)])switch(_0x12418b[_0x4c2b55(0x241)][_0x4c2b55(0x21f)]){case'Promise':return _0x12418b['hasOwnProperty'](Symbol[_0x4c2b55(0x27c)])?Promise[_0x4c2b55(0x226)]():_0x12418b;case _0x4c2b55(0x22c):return Promise[_0x4c2b55(0x226)]();}return _0x12418b;}((_0x58d798,_0x11fd99,_0x10d4ec,_0x3bdd08,_0x155b75,_0x31b6c8,_0xbdb6d1,_0x3068b7,_0x91a82,_0x7a6cf0,_0x2e8c07,_0xf1acf2)=>{var _0x346dd3=_0x1cc9bf;if(_0x58d798['_console_ninja'])return _0x58d798[_0x346dd3(0x1e6)];let _0x4b76c7={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x58d798,_0x3068b7,_0x155b75))return _0x58d798[_0x346dd3(0x1e6)]=_0x4b76c7,_0x58d798[_0x346dd3(0x1e6)];let _0x204b39=b(_0x58d798),_0x62f8a0=_0x204b39['elapsed'],_0x59153e=_0x204b39[_0x346dd3(0x29d)],_0x3f753e=_0x204b39[_0x346dd3(0x244)],_0x4ff01f={'hits':{},'ts':{}},_0x5082fa=J(_0x58d798,_0x91a82,_0x4ff01f,_0x31b6c8,_0xf1acf2,_0x155b75===_0x346dd3(0x21b)?G:void 0x0),_0x48af16=(_0x223141,_0x371f64,_0x35037a,_0x3cd8c9,_0x535304,_0x261762)=>{var _0x296592=_0x346dd3;let _0x53157f=_0x58d798[_0x296592(0x1e6)];try{return _0x58d798['_console_ninja']=_0x4b76c7,_0x5082fa(_0x223141,_0x371f64,_0x35037a,_0x3cd8c9,_0x535304,_0x261762);}finally{_0x58d798[_0x296592(0x1e6)]=_0x53157f;}},_0x39cf02=_0x422f8a=>{_0x4ff01f['ts'][_0x422f8a]=_0x59153e();},_0x1564b3=(_0x212127,_0x2c5a9e)=>{let _0x520a8c=_0x4ff01f['ts'][_0x2c5a9e];if(delete _0x4ff01f['ts'][_0x2c5a9e],_0x520a8c){let _0x3cefa7=_0x62f8a0(_0x520a8c,_0x59153e());_0x5ede0b(_0x48af16('time',_0x212127,_0x3f753e(),_0x2a26cf,[_0x3cefa7],_0x2c5a9e));}},_0x420127=_0x4f93a5=>{var _0x1876f0=_0x346dd3,_0x486c8c;return _0x155b75===_0x1876f0(0x21b)&&_0x58d798[_0x1876f0(0x2b3)]&&((_0x486c8c=_0x4f93a5==null?void 0x0:_0x4f93a5[_0x1876f0(0x1f6)])==null?void 0x0:_0x486c8c['length'])&&(_0x4f93a5['args'][0x0][_0x1876f0(0x2b3)]=_0x58d798[_0x1876f0(0x2b3)]),_0x4f93a5;};_0x58d798[_0x346dd3(0x1e6)]={'consoleLog':(_0x5a1884,_0x212f58)=>{var _0x341c81=_0x346dd3;_0x58d798['console']['log'][_0x341c81(0x21f)]!=='disabledLog'&&_0x5ede0b(_0x48af16(_0x341c81(0x23c),_0x5a1884,_0x3f753e(),_0x2a26cf,_0x212f58));},'consoleTrace':(_0x28f0da,_0x4ebb69)=>{var _0x13396a=_0x346dd3,_0x8657a2,_0x1db2a3;_0x58d798[_0x13396a(0x276)][_0x13396a(0x23c)][_0x13396a(0x21f)]!==_0x13396a(0x259)&&((_0x1db2a3=(_0x8657a2=_0x58d798[_0x13396a(0x1e2)])==null?void 0x0:_0x8657a2[_0x13396a(0x25c)])!=null&&_0x1db2a3[_0x13396a(0x212)]&&(_0x58d798[_0x13396a(0x211)]=!0x0),_0x5ede0b(_0x420127(_0x48af16('trace',_0x28f0da,_0x3f753e(),_0x2a26cf,_0x4ebb69))));},'consoleError':(_0x4da457,_0x1dbd96)=>{_0x58d798['_ninjaIgnoreNextError']=!0x0,_0x5ede0b(_0x420127(_0x48af16('error',_0x4da457,_0x3f753e(),_0x2a26cf,_0x1dbd96)));},'consoleTime':_0x43136f=>{_0x39cf02(_0x43136f);},'consoleTimeEnd':(_0x5c938f,_0x2ca612)=>{_0x1564b3(_0x2ca612,_0x5c938f);},'autoLog':(_0x5b4ec0,_0x290a38)=>{_0x5ede0b(_0x48af16('log',_0x290a38,_0x3f753e(),_0x2a26cf,[_0x5b4ec0]));},'autoLogMany':(_0x2e69a3,_0x46af14)=>{var _0x3dd49d=_0x346dd3;_0x5ede0b(_0x48af16(_0x3dd49d(0x23c),_0x2e69a3,_0x3f753e(),_0x2a26cf,_0x46af14));},'autoTrace':(_0x1483a2,_0x1e2762)=>{var _0x2e5a8b=_0x346dd3;_0x5ede0b(_0x420127(_0x48af16(_0x2e5a8b(0x262),_0x1e2762,_0x3f753e(),_0x2a26cf,[_0x1483a2])));},'autoTraceMany':(_0x46c70a,_0x381c1e)=>{_0x5ede0b(_0x420127(_0x48af16('trace',_0x46c70a,_0x3f753e(),_0x2a26cf,_0x381c1e)));},'autoTime':(_0x236c2b,_0x4d0b4d,_0x1c4cbf)=>{_0x39cf02(_0x1c4cbf);},'autoTimeEnd':(_0x25b203,_0x2a4be9,_0x5e6277)=>{_0x1564b3(_0x2a4be9,_0x5e6277);},'coverage':_0x166355=>{var _0x172574=_0x346dd3;_0x5ede0b({'method':_0x172574(0x23e),'version':_0x31b6c8,'args':[{'id':_0x166355}]});}};let _0x5ede0b=H(_0x58d798,_0x11fd99,_0x10d4ec,_0x3bdd08,_0x155b75,_0x7a6cf0,_0x2e8c07),_0x2a26cf=_0x58d798[_0x346dd3(0x1d1)];return _0x58d798[_0x346dd3(0x1e6)];})(globalThis,_0x1cc9bf(0x28d),_0x1cc9bf(0x29a),_0x1cc9bf(0x22b),_0x1cc9bf(0x2b6),_0x1cc9bf(0x207),_0x1cc9bf(0x24a),_0x1cc9bf(0x25a),_0x1cc9bf(0x277),_0x1cc9bf(0x290),_0x1cc9bf(0x246),{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}});");
    } catch (e) {
        console.error(e);
    }
}
function oo_oo(i, ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
oo_oo; /* istanbul ignore next */ 
function oo_tr(i, ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
oo_tr; /* istanbul ignore next */ 
function oo_tx(i, ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
oo_tx; /* istanbul ignore next */ 
function oo_ts(v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
oo_ts; /* istanbul ignore next */ 
function oo_te(v, i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
oo_te; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
var _c;
__turbopack_context__.k.register(_c, "ResumeCleanerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e048691b._.js.map