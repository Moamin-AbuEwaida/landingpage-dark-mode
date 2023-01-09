import Header from "./components/Header";
import SectionCategory from "./components/SectionCategory";
import SectionDownload from "./components/SectionDownload";
import SectionJobs from "./components/SectionJobs";
import SectionStaff from "./components/SectionStaff";
import SubscribeSection from "./components/SubscribeSection";

function App() {
  return (
    <div>
      <Header />
      <SectionCategory />
      <SectionJobs />
      <SectionDownload />
      <SectionStaff />
      <SubscribeSection />
    </div>
  );
}

export default App;
