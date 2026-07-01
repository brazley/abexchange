import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Market from "./pages/Market";

// On the bare market subdomain (market.abexchange.ogel.fyi) the Market
// landing IS the site root; everywhere else "/" is the dashboard.
const isMarketHost =
  typeof window !== "undefined" && window.location.hostname.startsWith("market.");

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="grain min-h-screen bg-canvas">
        <TopBar />
        <Routes>
          <Route path="/" element={isMarketHost ? <Market /> : <Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
