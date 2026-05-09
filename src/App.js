import { Toaster } from "sonner";
import Header from "./components/Header";
import Home from "./containers/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Toaster position="top-center" richColors />
    </>
  );
}

export default App;