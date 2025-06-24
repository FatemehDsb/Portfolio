import MainPage from "./MainPage";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log("App is rendering");

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
