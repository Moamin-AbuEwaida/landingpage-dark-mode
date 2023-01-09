import Header from "./components/Header";
import SectionCategory from "./components/SectionCategory";
import SectionDownload from "./components/SectionDownload";
import SectionFooter from "./components/SectionFooter";
import SectionJobs from "./components/SectionJobs";
import SectionStaff from "./components/SectionStaff";
import ServiceSection from "./components/ServiceSection";
import SubscribeSection from "./components/SubscribeSection";

function App() {
  return (
    <div>
      <Header />
      <SectionCategory />
      <SectionJobs />
      <SectionDownload />
      <ServiceSection />
      <SectionStaff />
      <SubscribeSection />
      <SectionFooter />
    </div>
  );
}

export default App;
