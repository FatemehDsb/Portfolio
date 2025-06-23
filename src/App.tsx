import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log("App is rendering");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
