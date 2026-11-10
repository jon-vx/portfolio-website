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
      bullets: [
        "sped up in-browser LLM inference 7–35% on 9 GPUs by batching WebGPU work (96% fewer GPU submits)",
        "built a Node.js job-queue server (claim/retry, crash-safe resume) that ran 2,900+ WebGPU trials on 5 models",
        "shipped a crowdsourced WebGPU benchmark on GitHub Pages with a validated, rate-limited Cloudflare Worker",
      ],
    },
    {
      org: "bestella web (freelance / part-time)",
      role: "software engineer",
      period: "jan 2026 - present",
      href: "https://www.bestellawebdesign.com/",
      bullets: [
        "delivered 8 client sites on a shared 11ty/Netlify build pipeline (esbuild, sharp/WebP, lazy loading) that score 92–100 on Lighthouse desktop/mobile and drove 200+ quote requests",
        "developed an internal React/Next.js dashboard that ranks client keywords by search volume and local intent",
        "built a resumable Python pipeline enriching 1,300+ leads via 5 APIs and scoring them by lead quality",
      ],
    },
    {
      org: "impact practicum (client: inia biosciences)",
      role: "software engineer",
      period: "jan 2026 - may 2026",
      href: "https://www.umb.edu/vdc/",
      bullets: [
        "led a 5-person team building a Python package to fine-tune and run inference on SAM3/MedSAM3 via one API",
        "raised spleen ultrasound segmentation Dice from 0.45 to 0.97 by fine-tuning MedSAM3 with LoRA in PyTorch",
        "implemented a UNet++ detect-then-segment cascade that feeds bounding-box prompts to SAM3 alongside text",
      ],
    },
  ],
  projects: [
    {
      name: "game theory tournament simulator",
      href: "https://github.com/jon-vx/game-theory-simulator",
      bullets: [
        "built a Next.js/TypeScript frontend whose server routes proxy a private FastAPI + Postgres backend",
        "wrote a ~450K rounds/s simulation engine that saves each tournament in one SQLAlchemy transaction",
        "built Jenkins CI/CD to test against PostgreSQL in Docker, publish versioned ECR images, and deploy to EC2",
      ],
    },
    {
      name: "inia-package",
      href: "https://github.com/jon-vx/INIA-package",
      bullets: [
        "unified python package around meta's SAM 3 and MedSAM 3 for spleen ultrasound segmentation. LoRA fine-tuning raised Dice from 0.45 → 0.97.",
      ],
    },
    {
      name: "c-grad autograd engine and mlp library",
      href: "https://github.com/jon-vx/c-grad",
      bullets: [
        "wrote a reverse-mode autodiff engine and MLP training library in C, with an arena allocator for graph memory",
      ],
    },
    {
      name: "chess engine & lichess bot",
      href: "https://github.com/jon-vx/chess-engine-310",
      bullets: [
        "implemented a UCI chess engine with iterative-deepening alpha-beta, quiescence search, and transposition tables",
        "cut middlegame search nodes a median 12x via move-ordering heuristics (MVV-LVA, killer moves, history)",
        "deployed it as a Lichess bot reaching a 1747 Elo rapid rating (peak 1779), winning 75% of 517 games",
      ],
    },
  ],
  writing: [],
  other: [
    { label: "uses", href: "/uses" },
  ],
};
