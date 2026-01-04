# Resume Builder V1.0.0

**Live Preview + Clean PDF Export (ATS Safe)**

---

## 1. Purpose of This Tool

This tool exists to help users quickly create a **clean, professional, ATS safe resume** with:

- Live preview
- Real time ATS readable view
- One click copy text
- Clean PDF export

This is **Version 1.0.0 only**.
No accounts. No AI chat. No job matching. No scores.

The tool behaves like WordPress or Canva in _reliability_, not in _complexity_.

---

## 2. Core Philosophy

- Structure is fixed and opinionated
- Content is fully editable
- Visual styling is minimal and secondary
- Humans and machines must read the same content
- Preview and PDF must always match

If preview and PDF differ, the system is broken.

---

## 3. Single Source of Truth

All resume output is derived from:

**Semantic HTML + minimal CSS**

Everything else is derived from this:

- Live preview
- ATS preview
- Copy text
- PDF export

There must never be multiple rendering systems.

---

## 4. Required Sections (Always Present)

These sections are always visible, even if content is weak or missing.

### 4.1 Personal Information

Purpose: Identify and contact the candidate.

Fields:

- Full Name
- City, Country
- Email
- Phone
- One professional link (LinkedIn, GitHub, or Portfolio)

Rules:

- No photo
- No age
- No gender
- No full address
- No icons

---

### 4.2 Professional Summary

Purpose: Give quick context to recruiters.

Rules:

- Optional but visible
- Maximum 2 to 3 lines
- Role + experience + value
- No buzzwords
- No soft skills

If empty, show guidance text.

---

### 4.3 Experience

Purpose: Show real world impact.

Structure per role:

- Job Title
- Company Name
- Dates (Month Year – Month Year)
- Location (optional)
- 3 to 5 bullet points

Bullet rules:

- Start with action verb
- One idea per bullet
- Outcome focused
- Numbers if available

If user is a beginner:

- Allow internships
- Allow freelance
- Allow academic or personal experience

---

### 4.4 Skills

Purpose: ATS keyword scanning and quick overview.

Format:

- Grouped lists only

Example groups:

- Languages
- Frameworks
- Tools
- Platforms

Rules:

- No ratings
- No percentages
- No soft skills

---

### 4.5 Education

Purpose: Establish qualification baseline.

Structure:

- Degree
- Institution
- Graduation year

Rules:

- Factual only
- No marks breakdown

---

## 5. Optional Sections (User Controlled)

These sections appear only if content exists.

### Projects

- Project name
- One line description
- Tech stack
- 2 to 3 impact bullets

### Certifications

- Certification name
- Issuer
- Year

### Additional Information (International use)

- Work authorization
- Languages spoken

---

## 6. Templates (Structure Based, Not Design Based)

Templates differ by **section order and emphasis**, not colors or fonts.

### 6.1 Minimalist Template

Best for tech and startups.

Order:

1. Name
2. Contact line (single line)
3. Summary (optional)
4. Skills
5. Experience
6. Projects (optional)
7. Education

Feel:

- Compact
- High signal
- Very clean

---

### 6.2 Professional Template

Best for corporate and senior roles.

Order:

1. Name
2. Contact block
3. Summary (recommended)
4. Experience
5. Skills
6. Education
7. Certifications (optional)

Feel:

- Traditional
- Recruiter safe
- Familiar

---

### 6.3 International Template

Best for global roles.

Order:

1. Name
2. Contact with country code
3. Summary
4. Core Skills
5. Professional Experience
6. Education (with country)
7. Additional Information

Feel:

- Formal
- Clear
- Globally understandable

---

## 7. Text Types (Used Everywhere)

- Name text
  Largest size, bold

- Section header
  Medium size, bold

- Role title
  Regular size, bold

- Meta text
  Smaller size, dates, locations, links

- Body text
  Regular paragraphs

- Bullet text
  Simple bullets, one idea per line

Only one font family is allowed.

---

## 8. Live Resume Preview

The live preview renders the resume using:

- Semantic HTML
- Minimal CSS
- Natural document flow

Rules:

- Single column
- No absolute positioning
- No tables
- No canvas
- No SVG text

The preview must look like a printed document.

---

## 9. ATS Real Time Preview

This is **not a score**.

What it shows:

- Plain text version of the resume
- Same order as preview
- Same wording

Implementation:

- Strip HTML tags
- Preserve line breaks
- Preserve bullet markers

Purpose:

- Build trust
- Show exactly what ATS systems see

---

## 10. Quick Copy Text

Features:

- Copy full resume
- Copy section by section

Rules:

- Text must paste cleanly into Google Docs and Word
- Bullets and spacing must remain intact

---

## 11. PDF Export (Critical)

PDF export must be:

- Text based
- Selectable
- Searchable
- ATS readable

### Correct Approach

1. Generate resume as HTML
2. Apply print CSS
3. Render HTML to PDF using headless browser

Recommended tools:

- Puppeteer or Playwright

PDF rules:

- A4 or US Letter
- White background
- Standard margins
- Embedded fonts
- No headers or footers

### Do NOT Use

- Canvas based PDF
- Screenshot based export
- Client side PDF libraries
- Image based rendering

If text cannot be selected in the PDF, it is a failure.

---

## 12. Version 1.0.0 Limitations (Intentional)

V1.0.0 does NOT include:

- Accounts
- Resume versions
- Job description matching
- ATS scoring
- AI chat
- Design customization

These are future concerns.

---

## 13. Success Criteria

V1.0.0 is successful if:

- User pastes content
- Live preview updates instantly
- ATS preview matches export
- PDF looks identical to preview
- User copies or exports in under 30 seconds

If users ask what to do next, the UX failed.

---

## 14. Final Mental Model

This tool is not a creative editor.

It is a **structured document system** with strong defaults.

Structure is opinionated.
Content is flexible.
Trust is everything.

---

**End of V1.0.0 Specification**
