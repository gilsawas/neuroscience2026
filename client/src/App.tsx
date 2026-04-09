import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Neuroscience2026 from "./pages/Neuroscience2026";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028288587/KtPSPubDC3LWkzszETquUn/pasted_file_jAMXqJ_tengrai_image_1765159705_282565_c2465d6c.png"
            alt="LUZ Logo"
            className="h-14 w-14 object-contain"
          />
          <span className="font-audiowide text-lg text-gray-900 tracking-tight hidden sm:inline">The YON Synthesis</span>
        </a>
        <nav className="flex items-center gap-6">
          <a href="/" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors">Home</a>
          <a href="/neuroscience2026" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors">NEUROSCIENCE 2026</a>
        </nav>
      </div>
    </header>
  );
}

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/neuroscience2026"} component={Neuroscience2026} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Header />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
