import { Brief } from "../components/Brief";
import { Metrics } from "../components/Metrics";
import { Feed } from "../components/Feed";
import { Sidebar } from "../components/Sidebar";
import { BRAND } from "../data/mock";

export default function Dashboard() {
  return (
    <main className="relative z-10 mx-auto max-w-[1220px] px-5 pb-24 pt-6 sm:px-8 sm:pt-8">
      {/* Masthead — one container, two columns: brief (left) + 2×2 metrics (right). */}
      <section className="relative overflow-hidden rounded-panel border border-line bg-surface">
        <div className="glow-field pointer-events-none absolute inset-0" />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
          <div className="p-6 sm:p-7 lg:border-r lg:border-line">
            <Brief />
          </div>
          <div className="border-t border-line p-4 sm:p-5 lg:border-t-0">
            <Metrics />
          </div>
        </div>
      </section>

      {/* Feed + sidebar rail */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_356px] lg:gap-8">
        <Feed />
        <Sidebar />
      </div>

      <footer className="mt-16 flex flex-col items-center gap-1 text-center">
        <span className="display text-[13px] text-ink-3">{BRAND}</span>
        <span className="text-[11px] text-ink-3/70">A working prototype · all data is illustrative</span>
      </footer>
    </main>
  );
}

