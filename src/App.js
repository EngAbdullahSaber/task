import "./App.css";
import Company from "./components/company/Company";
import News from "./components/news/News";
import img1 from "./images/company/5.png";
import img2 from "./images/company/6.png";
import img3 from "./images/company/7.png";
import img4 from "./images/company/8.png";
import img5 from "./images/company/9.png";
import img11 from "./images/services/11.png";
import img22 from "./images/services/22.png";
import img33 from "./images/services/33.png";
import img44 from "./images/services/44.png";
import img55 from "./images/services/55.png";
import img66 from "./images/services/66.png";
const images = [
  { index: 1, url: img1 },
  { index: 2, url: img2 },
  { index: 3, url: img3 },
  { index: 4, url: img4 },
  { index: 5, url: img5 },
];
const services = [
  { index: 1, url: img11 },
  { index: 2, url: img22 },
  { index: 3, url: img33 },
  { index: 4, url: img44 },
  { index: 5, url: img55 },
  { index: 6, url: img66 },
];
function App() {
  return (
    <div className="App">
      <Company data={services} title="اقسام التبرع" />
      <News />
      <Company data={images} title="شركائنا" />
    </div>
  );
}

export default App;
