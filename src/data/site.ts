export const site = {
  name: "jon allen",
  city: "boston",
  blurb: "cs + math (minor) student. interested in ml and the web.",
  socials: [
    { label: "github", href: "https://github.com/jon-vx" },
    { label: "linkedin", href: "https://linkedin.com/in/jonallenvx" },
    { label: "chess.com", href: "https://www.chess.com/member/jonvx0" },
    { label: "jonvx0@gmail.com", copy: "jonvx0@gmail.com" },
  ],
  work: [
    {
      org: "machine psychology @ umass boston",
      role: "undergraduate research fellow",
      period: "jun 2026 - present",
      href: "https://mpsych.org/",
      blurb: "",
    },
    {
      org: "bestella web design",
      role: "founder",
      period: "jan 2026 - present",
      href: "https://www.bestellawebdesign.com/",
      blurb: "",
    },
  ],
  projects: [
    {
      name: "inia-package",
      href: "https://github.com/jon-vx/team-SAMv3-impact",
      updated: "foundation models",
      blurb: "unified python package around meta's SAM 3 and MedSAM 3 for spleen ultrasound segmentation. LoRA fine-tuning + UNet++ prompt generation raised mean Dice from 0.62 → 0.97.",
    },
    {
      name: "c-grad",
      href: "https://github.com/jon-vx",
      updated: "systems",
      blurb: "scalar-valued autograd engine in C with a dynamic compute graph, topological-sort backprop, and a custom arena allocator. MLP module on top trains on real datasets.",
    },
    {
      name: "chess-engine",
      href: "https://github.com/jon-vx/chess-engine-310",
      updated: "~1600 elo",
      blurb: "python chess engine and lichess bot. iterative-deepening minimax w/ alpha-beta, quiescence, TT, null-move, LMR. phase-blended PSQT eval + MVV-LVA, killers, history. UCI driver + live stats dashboard.",
    },
    {
      name: "entocellular-segmentation",
      href: "https://github.com/bronsdonayden/EntocellularAnnotate",
      updated: "research practicum",
      blurb: "fine-tuned Cellpose (cyto3 + SAM) on phase-contrast microscopy for cell segmentation. AP@0.5: 0.523→0.624 (cyto3), 0.515→0.688 (SAM). built an annotation tool with model-assisted pre-labeling.",
    },
  ],
  writing: [],
  other: [
    { label: "uses", href: "/uses" },
    { label: "resume (pdf)", href: "/resume.pdf" },
  ],
};
