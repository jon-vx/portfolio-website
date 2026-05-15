export const site = {
  name: "jonathan allen",
  city: "boston",
  blurb: "cs + math (minor) student. interested in ml and the web.",
  socials: [
    { label: "github", href: "https://github.com/jon-vx" },
    { label: "linkedin", href: "https://linkedin.com/in/jonallenvx" },
    { label: "chess.com", href: "https://www.chess.com/member/jonvx0" },
    { label: "jonvx0@gmail dot com", href: "" },
  ],
  projects: [
    {
      name: "medsam3-spleen",
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
      name: "entocellular segmentation",
      href: "https://github.com/bronsdonayden/EntocellularAnnotate",
      updated: "research practicum",
      blurb: "fine-tuned Cellpose-SAM on phase-contrast microscopy for cell segmentation (AP@0.5 = 0.624). built a Napari annotation tool with model-assisted pre-labeling.",
    },
    {
      name: "bestella web design",
      href: "https://www.bestellawebdesign.com/",
      updated: "founder",
      blurb: "web design studio shipping fast, SEO-optimized static sites in eleventy on netlify. 90+ pagespeed; one client went from 0 to 12+ inbound contacts/month post-launch.",
    },
  ],
  writing: [],
  elsewhere: [
    { label: "ml research practicum @ venture development center", href: "#" },
    { label: "resume (pdf)", href: "/resume.pdf" },
  ],
};
