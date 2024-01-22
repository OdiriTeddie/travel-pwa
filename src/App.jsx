import { Adventure } from "./component/adventure";
import { Footer } from "./component/footer";
import { Header } from "./component/header";
import { Hero } from "./component/hero";
import { PlanTrip } from "./component/plan";
import { SearchTrip } from "./component/seach-trip";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PlanTrip />
      <SearchTrip />
      <Adventure />
      <Footer />
    </>
  );
}

export default App;
