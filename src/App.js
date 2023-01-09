import Header from "./components/Header";
import SectionCategory from "./components/SectionCategory";
import SectionDownload from "./components/SectionDownload";
import SectionJobs from "./components/SectionJobs";
import SectionStaff from "./components/SectionStaff";

function App() {
  return (
    <div>
      <Header />
      <SectionCategory />
      <SectionJobs />
      <SectionDownload />
      <SectionStaff />
    </div>
  );
}

export default App;
