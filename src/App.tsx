import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen md:h-screen flex flex-col">
        <Navbar />
        <Banner />
      </div>
    </>
  );
}

export default App;
