/** Single-source content that isn't a card: hero, links, education. */
export const profile = {
  name: 'Marcelo Torreblanca',
  shortName: 'Marcelo',
  role: 'Frontend engineer',
  /** Hero sentence; `highlight` is underlined in the accent color. */
  headline: 'building React/TypeScript apps, data visualization and LLM-powered UIs.',
  highlight: 'data visualization',
  stack: ['React', 'TypeScript', 'D3', 'LLM UIs'],
  location: 'Based in Mexico, working remotely with U.S. teams',
  /** Used for <meta description> and link previews. */
  description:
    'Frontend engineer: React/TypeScript, data visualization and LLM-powered UIs. Projects and selected work.',
  links: {
    github: 'https://github.com/mtorreblanca',
    linkedin: 'https://linkedin.com/in/marcelotorreblanca',
    email: 'marchello1212@gmail.com',
    cv: '/cv.pdf', // NEEDED: drop the PDF in public/cv.pdf (the one sent to this recruiter)
  },
};

export const education = [
  {
    title: 'M.S. Artificial Intelligence',
    org: 'The University of Texas at Austin',
    note: 'In progress, since Sep 2024',
  },
  {
    title: 'AWS Certified AI Practitioner',
    org: 'Amazon Web Services',
    note: 'Issued Sep 2026',
    url: 'https://example.com/lorem-badge', // NEEDED: Credly badge link
  },
  {
    title: 'Data Science and AI: From Concept to Application Development',
    org: 'Tec de Monterrey',
    note: '120 hours, 2024',
    url: 'https://www.credential.net/4a38ea69-2ab8-4f3f-9775-ffff9a2a5dcd',
  },
  {
    title: 'B.S. Mechatronics Engineering',
    org: 'Tec de Monterrey',
    note: '2013 – 2018',
  },
];
