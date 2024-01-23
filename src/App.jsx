import { Adventure } from "./component/adventure";
import { AllServices } from "./component/all-services";
import { Footer } from "./component/footer";
import { Header } from "./component/header";
import { Hero } from "./component/hero";
import { Packages } from "./component/packages";
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
      <AllServices />
      <Packages />
      <Footer />
    </>
  );
}

export default App;
