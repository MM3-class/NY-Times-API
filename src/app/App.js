import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../components/header/Header";
import NotFound from "../components/notFound/NotFound";
import SearchField from "../features/searchField/SearchField.jsx";
import Home from "../pages/Home.jsx";
import Fashion from "../pages/Fashion";
import Arts from "../pages/Arts";
import Us from "../pages/Us";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to= "/ny-times-api"/>} replace/>
        <Route path="/ny-times-api"  element={<Home />} />
        <Route path="/search" element={<SearchField />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="art" element={<Arts />} />
        <Route path="us" element={<Us />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
