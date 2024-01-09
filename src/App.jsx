import Cards from "./components/Cards";
import Highlights from "./components/Highlights";
import Header from "./components/HEader";
export default function App() {
  return (
    <div className="top">
      <Header />;
      <Highlights />
      <Cards />
    </div>
  );
}
