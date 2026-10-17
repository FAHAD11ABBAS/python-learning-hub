# Python Learning Hub

An interactive, high-performance developer platform designed for learning modern Python programming with bespoke execution simulators, Web Audio feedback, and in-browser playgrounds.

[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-crimson?logo=github)](https://fahad11abbas.github.io/python-learning-hub/)
[![Python 3.12](https://img.shields.io/badge/Python-3.12%2B-FBBF24?logo=python&logoColor=0A0F1D)](https://python.org)
[![React](https://img.shields.io/badge/Framework-React%2019-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

**Live Demo:** [https://fahad11abbas.github.io/python-learning-hub/](https://fahad11abbas.github.io/python-learning-hub/)  
**GitHub Repository:** [https://github.com/FAHAD11ABBAS/python-learning-hub](https://github.com/FAHAD11ABBAS/python-learning-hub)

---

## Key Features

- **Multilingual Support (i18n):**
  - **Finnish (Suomi)** — Primary default language.
  - **English** — Seamless on-the-fly language switching.
- **Hyper-car UI & Audio Synthesizer:**
  - Deep metallic navy background (`#0A0F1D`), deep crimson red (`#E11D48`), and vibrant electric gold (`#FBBF24`).
  - Web Audio API real-time acoustic feedback (tactile click sounds, harmonic success chimes, and navigation pops) with mute toggle.
  - Subtle flowing Python matrix code stream in the background with zero text interference.
- **12 Bespoke Interactive Simulators:**
  - Real-time visualizers for every curriculum topic (architecture pipeline, memory references, I/O lab, string slicing ruler, truth-tables, loop-else stepper, virtual file streams, LEGB scope rings, module guards, exception lifecycles, data structures lab, and OOP encapsulation).
- **Interactive Python Playground / REPL:**
  - Run, modify, and test Python snippets in-browser with realistic terminal emulation.
- **Knowledge Retention Quizzes:**
  - Instant question checks per topic with explanations and progress tracking.

---

## Curriculum Coverage (12 Mandatory Topics)

1. **Introduction to Python** — Architecture, interpreted vs. compiled models, CPython PVM execution, and syntax comparisons.
2. **Variables & Core Data Types** — PEP 8 naming conventions, dynamic typing, `id()` references, and immutability.
3. **Input & Output** — `input()` prompting, `print(sep, end)` formatting, escape characters, and numeric type conversion.
4. **String Processing** — `len()`, slice notation `[start:stop:step]`, negative indexes, string replication, and core methods.
5. **Control Structures** — `if`, `elif`, `else`, indentation mechanics, logical operators, and truthy/falsy semantics.
6. **Loops & Iteration** — `for` and `while` loops, `range()`, `break`, `continue`, `pass`, and Python's unique `loop-else` clause.
7. **File Operations** — Text file reading/writing modes (`r`, `w`, `a`), `with open(...)` auto-closure, and binary stream byte headers.
8. **Functions & Scope** — `def`, default arguments, `*args`, `**kwargs`, return types, and the LEGB scope resolution rule.
9. **Modules & Packages** — Standard library packages, import patterns, and the `if __name__ == '__main__':` entry guard.
10. **Error & Exception Handling** — `try-except-else-finally` lifecycle, multiple exception catching, and `IndexError` prevention.
11. **Data Structures** — Comprehensive deep-dive into Lists, Dictionaries, Tuples, and Sets with time-complexity insights.
12. **Object-Oriented Programming (OOP)** — Classes, instances, constructors (`__init__`), encapsulation, inheritance, and method overriding.

---

## Local Development Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm (version 9 or higher)

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/FAHAD11ABBAS/python-learning-hub.git
cd python-learning-hub
npm install
```

### Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to interact with the application.

### Production Build
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

---

## Deployment to GitHub Pages

### Automated Deployment (GitHub Actions)
The repository includes a ready-to-run GitHub Actions workflow (`.github/workflows/deploy.yml`). Pushing changes to the `main` branch automatically builds and deploys the site to:
`https://fahad11abbas.github.io/python-learning-hub/`

### Manual Deployment via CLI
You can also deploy directly using the `gh-pages` script:
```bash
npm run deploy
```

---

## Project Structure

```
python-learning-hub/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/                       # Static public assets
├── src/
│   ├── components/
│   │   ├── simulators/          # 12 Bespoke interactive simulators
│   │   ├── CodeBlock.jsx        # Syntax highlighter with copy functionality
│   │   ├── GithubIcon.jsx       # SVG GitHub icon component
│   │   ├── Header.jsx           # Top navigation, language & theme toggles
│   │   ├── PlaygroundModal.jsx  # Interactive in-browser Python REPL
│   │   ├── QuizWidget.jsx       # Interactive topic quiz component
│   │   ├── Sidebar.jsx          # Search and topic navigation sidebar
│   │   └── TopicView.jsx        # Topic content view with tabs and theory
│   ├── context/
│   │   ├── LanguageContext.jsx  # Multilingual (FI/EN/AR) & RTL context
│   │   ├── ProgressContext.jsx  # Topic completion and quiz state
│   │   └── ThemeContext.jsx     # Dark & light mode state
│   ├── data/
│   │   ├── topicsData.js        # 12 topics curriculum database
│   │   └── translations.js      # UI translations dictionary
│   ├── App.jsx                  # Main application component
│   ├── index.css                # Tailwind directives and custom styles
│   └── main.jsx                 # Application entry point
├── index.html                   # HTML entry point with typography
├── package.json                 # Project dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme and brand color configuration
├── vite.config.js               # Vite build configuration with base URL
└── README.md                    # Project documentation
```

---

## License

This project is licensed under the MIT License.
