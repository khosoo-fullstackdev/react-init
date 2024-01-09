import Cards from "./components/Cards";
import Highlights from "./components/Highlights";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="gogo">
      <Header />
      <div className="top">
        <div className="ttop">
          <Highlights />
        </div>
        <div className="tbot">
          <Cards />
        </div>
      </div>
    </div>
  );
}
