import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
