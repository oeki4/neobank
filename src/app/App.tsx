import { Navbar } from "@/widgets/Navbar";
import { AppRouter } from "@/app/providers/AppRouter";
import { Footer } from "@/widgets/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
