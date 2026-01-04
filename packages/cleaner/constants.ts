export const ACTION_VERBS = {
  leadership: [
    'Led', 'Managed', 'Supervised', 'Directed', 'Orchestrated', 'Spearheaded', 'Coordinated', 'Mentored', 'Guided', 'Chaired'
  ],
  achievement: [
    'Built', 'Created', 'Designed', 'Launched', 'Developed', 'Implemented', 'Established', 'Pioneered', 'Engineered', 'Architected'
  ],
  efficiency: [
    'Improved', 'Optimized', 'Streamlined', 'Accelerated', 'Enhanced', 'Revamped', 'Transformed', 'Maximized', 'Minimized', 'Reduced'
  ],
  analytical: [
    'Analyzed', 'Evaluated', 'Researched', 'Investigated', 'Diagnosed', 'Identified', 'Measured', 'Verified', 'Tested', 'Audited'
  ],
  communication: [
    'Collaborated', 'Negotiated', 'Presented', 'Advocated', 'Authored', 'Persuaded', 'Published', 'Consulted', 'Liaised', 'Represented'
  ]
};

export const FLUFF_WORDS = [
  'Passionate', 'Hardworking', 'Dynamic', 'Self-motivated', 'Team player',
  'Result-oriented', 'Detail-oriented', 'Quick learner', 'Strategic thinker',
  'Responsible for', 'Worked on', 'Helped with', 'Involved in', 'Assisted in',
  'Participated in', 'Duties included', 'Strong communication skills'
];

export const WEAK_PHRASES_MAP: Record<string, string> = {
  'worked on': 'developed',
  'helped with': 'collaborated on',
  'responsible for': 'led',
  'involved in': 'executed',
  'assisted in': 'implemented',
  'participated in': 'contributed to',
  'duties included': 'managed',
};
