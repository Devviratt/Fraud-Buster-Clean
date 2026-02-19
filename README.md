# Fraud Buster

**Real-Time Hybrid Transaction Anomaly Detection Engine**

A lightweight, client-side fraud detection dashboard for Indian UPI transactions. Combines a multi-rule engine with simulated Isolation Forest and LightGBM models to score and flag suspicious transactions in real time.

---

## Getting Started

Requires **Node.js ≥ 18** & npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
# Clone the repository
git clone https://github.com/Devviratt/Fraud-Buster.git

# Navigate to the project directory
cd Fraud-Buster/fraudbuster

# Install dependencies
npm i

# Start the development server
npm run dev

# Click on 
Network: http://10.1.21.208:8080/

```

---

## Tech Stack

### Frontend & Build

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI framework |
| **TypeScript** | Static typing across the entire codebase |
| **Vite** | Dev server & production bundler (SWC-based React plugin) |
| **Tailwind CSS** | Utility-first styling with custom glass-morphism design tokens |
| **shadcn/ui** + **Radix UI** | Accessible, composable component library (Dialog, Accordion, Select, Tooltip, etc.) |
| **React Router v6** | Client-side routing (Landing → Dashboard → Simulate) |

### Data Visualization & Animation

| Technology | Purpose |
|---|---|
| **Recharts** | Interactive line/area charts for risk trends and behavioral analysis |
| **Custom SVG Gauge** | Circular arc risk gauge built with raw SVG math (`strokeDasharray`/`strokeDashoffset`) |
| **Framer Motion** | Physics-based spring animations, staggered list reveals, `AnimatePresence` transitions |
| **Lucide React** | Icon library for all UI iconography |

### ML / Fraud Detection Engine

| Algorithm / Technique | Implementation |
|---|---|
| **Isolation Forest (Anomaly Detection)** | 12-feature weighted anomaly scorer with sigmoid-shaped signal curves and cross-feature interaction multipliers (e.g., new-city × high-amount = 1.25× amplification) |
| **LightGBM (Fraud Probability)** | Gradient-boosted decision simulation with 13 contribution features including beneficiary risk, UPI age, salary overrun, and geo-velocity |
| **Hybrid Rule Engine** | 10 configurable rules — amount deviation, city anomaly, salary ratio, frequency spike, night-hour flag, device change, geo-velocity, rapid small txns, fraud history, behavioral drift |
| **Adaptive Risk Thresholds** | Per-user threshold adjustment based on spending volatility (coefficient of variation) |
| **Behavioral Drift Detection** | Compares 14-day spending window against 90-day baseline to detect sudden pattern shifts |
| **Geo-Velocity / Impossible Travel** | Flags transactions from different cities within physically impossible timeframes |
| **Payment Link Deep Inspection** | Domain extraction, shortened URL detection, suspicious keyword matching, Levenshtein-based lookalike domain scoring, simulated domain age analysis |
| **Beneficiary Risk Scoring** | Composite score from first-time beneficiary flag, UPI account age, suspicious UPI ID keywords |
| **Risk Confidence Score** | Measures agreement between rule engine and ML scores — high agreement + strong signals = high confidence |
| **Final Score Fusion** | Weighted blend: `60% rule score + 40% ML score`, with per-user adaptive risk level thresholds |

### Data & State Management

| Technology | Purpose |
|---|---|
| **React Context API** | Demo mode toggle (`DemoProvider` / `useDemo`) |
| **Window-global store + CustomEvent** | Cross-component transaction sync with HMR resilience |
| **Synthetic Dataset Engine** | 79-user Indian behavioral dataset with 5 profile types (salaried, business, student, high spender, low spender) |
| **Simulation Injection** | Configurable anomaly scenario injection into the live transaction stream |
| **Pre-Auth Lifecycle Simulation** | Multi-stage state machine (`INITIATED → RISK_CHECK → ML_EVAL → DECISION → COMPLETED`) driven by `setTimeout` chains |

### Testing & Quality

| Technology | Purpose |
|---|---|
| **Vitest** | Unit test framework with jsdom environment |
| **Testing Library** | React component testing utilities |
| **ESLint** + **TypeScript ESLint** | Code quality and type-aware linting |

---

## Project Structure

| Path | Purpose |
|---|---|
| `src/lib/scoring-engine.ts` | Core ML scoring pipeline — rule engine, Isolation Forest, LightGBM, final score fusion |
| `src/lib/dataset.ts` | 79-user Indian behavioral dataset with UPI registry and transaction history generator |
| `src/lib/types.ts` | Shared TypeScript interfaces (`ScoringResult`, `DeviationMetrics`, `LinkDeepInspection`, etc.) |
| `src/lib/transaction-store.tsx` | Global transaction store with event-driven sync |
| `src/lib/mock-data.ts` | Synthetic transaction generator with anomaly injection |
| `src/lib/demo-context.tsx` | Demo mode context provider |
| `src/pages/` | Route-level pages — Landing, Dashboard (Index), Simulate, NotFound |
| `src/components/` | UI components — RiskGauge, BehavioralDNA, GeoVelocityViz, LiveTransactionStream, SimulationControls, etc. |
| `src/test/` | Unit tests for scoring engine |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 8080 |
| `npm run build` | Production build |
| `npm run test` | Run unit tests (Vitest) |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | ESLint check |
| `npm run preview` | Preview production build locally |

---

## License

MIT
