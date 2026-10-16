export const site = {
  name: "jon allen",
  city: "boston",
  blurb: "software engineer building web apps, ml systems, and researching edge computing.",
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
      blurb: "made WebLLM's WebGPU runtime faster with GPU dispatch batching, cutting generation time by 21–41% across 660 validated runs. built tools to automate browser benchmarks, resume interrupted experiments, and collect performance data across devices.",
    },
    {
      org: "bestella",
      role: "software engineer · part-time",
      period: "jan 2026 - present",
      href: "https://www.bestellawebdesign.com/",
      blurb: "worked directly with 10+ small-business clients to plan, build, and maintain their websites. built an internal React/Next.js app to compare keywords using search data. wrote Python pipelines to enrich and score sales leads, with concurrent processing and saved progress so interrupted runs could resume.",
    },
    {
      org: "impact practicum · inia biosciences",
      role: "software engineer",
      period: "jan 2026 - may 2026",
      href: "https://www.umb.edu/vdc/",
      blurb: "led a student team building a Python framework to train and evaluate computer-vision models. used fixed dataset splits and automated scoring to compare checkpoints, and fine-tuned the models to improve held-out segmentation mean Dice from 0.62 to 0.97.",
    },
  ],
  projects: [
    {
      name: "game-theory-simulation",
      href: "https://github.com/jon-vx/prisoners-dilemma",
      updated: "web app",
      blurb: "a Next.js and FastAPI app for game-theory tournaments of up to 100,000 rounds, with strategy rankings and match results. backed by PostgreSQL, 111 automated tests, and a Jenkins deployment pipeline on AWS.",
    },
    {
      name: "inia-package",
      href: "https://github.com/jon-vx/team-SAMv3-impact",
      updated: "ml systems",
      blurb: "a Python framework for training, running, and evaluating computer-vision models, built with my team at the IMPACT practicum. fixed dataset splits made checkpoint comparisons consistent. fine-tuning improved held-out segmentation mean Dice from 0.62 to 0.97.",
    },
    {
      name: "c-grad",
      href: "https://github.com/jon-vx/c-grad",
      updated: "systems",
      blurb: "built a reverse-mode autograd engine in C that computes scalar gradients by walking a dynamic computation graph in reverse topological order. added an MLP training module and an arena allocator to manage graph memory.",
    },
    {
      name: "chess-engine",
      href: "https://github.com/jon-vx/chess-engine-310",
      updated: "algorithms",
      blurb: "python chess engine and lichess bot with iterative-deepening minimax, alpha-beta pruning, quiescence search, transposition tables, and a UCI driver.",
    },
  ],
  writing: [],
  other: [
    { label: "uses", href: "/uses" },
  ],
};
