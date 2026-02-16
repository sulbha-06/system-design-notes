import "./App.css";
import BodyContainer from "./BodyContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import TeamsContainer from "./components/teams/TeamsContainer";
import LoginContainer from "./components/login/LoginContainer";
import ProtectedRoute from "./ProtectedRoute";
// <BodyContainer />
function App() {
  return (
    <div className="App">
      <h1 className="app-header">Laughing Panda</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyContainer />} />
          <Route element={<ProtectedRoute />}>
            {/* empty route to wrap protected routes  only to protect them */}
            <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route path="/teams" element={<TeamsContainer />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
