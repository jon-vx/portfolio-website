export const site = {
  name: "jon allen",
  city: "boston",
  blurb: "full stack software engineer and undergraduate researcher. cs @ umb.",
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
      blurb: "cut WebLLM generation time 21–41% by batching WebGPU dispatches (96% fewer GPU queue submissions, identical output across 660 runs), and built a resumable benchmark harness that has run 2,900+ trials across 8 models and 9 GPUs.",
    },
    {
      org: "bestella web (freelance / part-time)",
      role: "software engineer",
      period: "jan 2026 - present",
      href: "https://www.bestellawebdesign.com/",
      blurb: "shipped 8 client sites on a shared 11ty/Netlify build pipeline scoring 92–100 on Lighthouse and driving 200+ quote requests, plus python lead-enrichment and google ads automation tooling.",
    },
    {
      org: "impact practicum (client: inia biosciences)",
      role: "software engineer",
      period: "jan 2026 - may 2026",
      href: "https://www.umb.edu/vdc/",
      blurb: "led a 5-person team building a SAM 3/MedSAM 3 fine-tuning and inference package for INIA Biosciences; LoRA fine-tuning raised spleen ultrasound segmentation Dice from 0.45 to 0.97.",
    },
  ],
  projects: [
    {
      name: "game theory tournament simulator",
      href: "https://github.com/jon-vx/game-theory-simulator",
      updated: "web app",
      blurb: "seeded strategy tournaments of up to 100K rounds on a ~450K rounds/s python engine, with a next.js frontend, fastapi + postgresql backend, and jenkins CI/CD deploying to aws ec2.",
    },
    {
      name: "inia-package",
      href: "https://github.com/jon-vx/INIA-package",
      updated: "ml systems",
      blurb: "unified python package around meta's SAM 3 and MedSAM 3 for spleen ultrasound segmentation. LoRA fine-tuning raised Dice from 0.45 → 0.97.",
    },
    {
      name: "c-grad autograd engine and mlp library",
      href: "https://github.com/jon-vx/c-grad",
      updated: "systems",
      blurb: "scalar-valued autograd engine in C with a dynamic compute graph, topological-sort backprop, a custom arena allocator, and an MLP training module.",
    },
    {
      name: "chess engine & lichess bot",
      href: "https://github.com/jon-vx/chess-engine-310",
      updated: "algorithms",
      blurb: "UCI chess engine with iterative-deepening alpha-beta, quiescence search, and transposition tables. runs as a lichess bot rated 1747 rapid (peak 1779), winning 75% of 497 games.",
    },
  ],
  writing: [],
  other: [
    { label: "uses", href: "/uses" },
  ],
};
