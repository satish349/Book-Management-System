import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <section className="flex flex-col min-h-screen w-full bg-slate-50 text-slate-900">
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
          <Navbar />
        </header>
        <main className="flex-1 pt-24 p-6 md:p-10">
          <Home />
        </main>
        <footer className="py-4 text-center border-t border-gray-200 text-xs text-slate-400 bg-white">
          Book Management System &copy; 2026
        </footer>
      </section>
    </>
  );
}

export default App;
