import Cards from "./components/Cards";
import Highlights from "./components/Highlights";
export default function App() {
  return (
    <div className="top">
      <Header />;
      <Highlights />
      <Cards />
    </div>
  );
}
