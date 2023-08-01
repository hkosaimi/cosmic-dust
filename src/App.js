import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Brand from "./components/Brand/Brand";
import Templates from "./components/Templates/Templates";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Brand />
        <Templates />
      </div>
    </>
  );
}

export default App;
