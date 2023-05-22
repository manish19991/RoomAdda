import "./App.css";
import Banner from "./Components/NavbarTab/BannerTab/Banner";
import Navbar from "./Components/NavbarTab/Navabar.jsx";
import Categories from "./Components/NavbarTab/CategoriesTab/Categories";
import SubCate from "./Components/NavbarTab/SubCategoriesTab/SubCategories";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Maplocation from "./Components/NavbarTab/GoogleMp/Maplocation.jsx";

const handleResults = (results) => console.log(results);

const onError = (type, status) => console.log(type, status);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Categories />
        {/* <Maplocation /> */}
        <Routes>
          <Route path="/Service" element={<SubCate />} />
        </Routes>
      </BrowserRouter>
      {/* <Maplocation onFetchAddress={handleResults} onError={onError}>
        {({ getCurrentLocation, loading }) => (
          <button onClick={getCurrentLocation} disabled={loading}>
            Get Current Location
          </button>
        )}
      </Maplocation> */}
    </div>
  );
}

export default App;
