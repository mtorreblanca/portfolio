/** Single-source content that isn't a card: hero, links, education. */
export const profile = {
  name: 'Marcelo Torreblanca',
  shortName: 'Marcelo',
  role: 'Full‑stack engineer', // non-breaking hyphen: never splits across lines
  /** Hero sentence; `highlight` is underlined in the accent color. */
  headline: 'building React/TypeScript apps, data visualization and LLM-powered UIs.',
  highlight: 'data visualization',
  stack: ['React', 'TypeScript', 'D3', 'LLM UIs'],
  location: 'Based in Mexico, working remotely with U.S. teams',
  /** Used for <meta description> and link previews. */
  description:
    'Full-stack engineer: React/TypeScript, data visualization and LLM-powered UIs. Projects and selected work.',
  links: {
    github: 'https://github.com/mtorreblanca',
    linkedin: 'https://linkedin.com/in/marcelotorreblanca',
    email: 'marchello1212@gmail.com',
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
    url: 'https://www.credly.com/badges/b9a9242f-912c-4bb2-993f-26cdc33bc006',
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
