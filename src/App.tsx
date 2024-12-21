import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./tailwind.css";
import SignIn from "./pages/SignIn";
import Company from "./pages/Company";
import PageNotFound from "./pages/PageNotFound";
import AuthMiddleware from "./components/AuthMiddleware";
import Admin from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route element={<AuthMiddleware />}>
            <Route path="/company" element={<Company />} />
          </Route>
          <Route element={<AuthMiddleware />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
