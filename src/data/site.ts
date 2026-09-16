export const site = {
  name: "jon allen",
  city: "boston",
  blurb: "software engineer building ml systems, inference infrastructure, and performant web applications. cs @ umass boston, graduating may 2027.",
  socials: [
    { label: "github", href: "https://github.com/jon-vx" },
    { label: "linkedin", href: "https://linkedin.com/in/jonallenvx" },
    { label: "chess.com", href: "https://www.chess.com/member/jonvx0" },
    { label: "jonvx0@gmail.com", copy: "jonvx0@gmail.com" },
  ],
  work: [
    {
      org: "machine psychology lab",
      role: "undergraduate research fellow",
      period: "jun 2026 - present",
      href: "https://mpsych.org/",
      blurb: "built a browser-based LLM benchmarking platform and implemented WebLLM GPU dispatch batching, reducing generation time by 35–41% for SmolLM2-360M and 21.1% for Llama 3.2 1B.",
    },
    {
      org: "venture development center (inia biosciences)",
      role: "ai/ml engineer",
      period: "jan 2026 - may 2026",
      href: "https://www.umb.edu/vdc/",
      blurb: "built a unified SAM 3 and MedSAM 3 training and evaluation framework, improving held-out segmentation mean Dice from 0.62 to 0.97.",
    },
    {
      org: "bestella web design",
      role: "founder & software engineer",
      period: "jan 2026 - present",
      href: "https://www.bestellawebdesign.com/",
      blurb: "built production web applications for 10+ small-business clients and maintained 90+ PageSpeed scores.",
    },
  ],
  projects: [
    {
      name: "prisoner's-dilemma",
      href: "https://github.com/jon-vx/prisoners-dilemma",
      updated: "in development",
      blurb: "simulation platform for configurable strategy tournaments. python engine with a react/typescript interface, fastapi service, postgresql persistence, automated tests, and docker compose packaging.",
    },
    {
      name: "inia-package",
      href: "https://github.com/jon-vx/team-SAMv3-impact",
      updated: "ml systems",
      blurb: "unified python package around meta's SAM 3 and MedSAM 3 for spleen ultrasound segmentation. fine-tuning raised mean Dice from 0.62 → 0.97.",
    },
    {
      name: "c-grad",
      href: "https://github.com/jon-vx/c-grad",
      updated: "systems",
      blurb: "scalar-valued autograd engine in C with a dynamic compute graph, topological-sort backprop, a custom arena allocator, and an MLP training module.",
    },
    {
      name: "chess-engine",
      href: "https://github.com/jon-vx/chess-engine-310",
      updated: "~1600 elo",
      blurb: "python chess engine and lichess bot with iterative-deepening minimax, alpha-beta pruning, quiescence search, transposition tables, and a UCI driver.",
    },
  ],
  writing: [],
  other: [
    { label: "uses", href: "/uses" },
    { label: "resume (pdf)", href: "/resume.pdf" },
  ],
};
