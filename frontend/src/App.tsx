import "./App.css";
import { Chat } from "./pages/chat/chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/DashBoard/DashBoard";
import { ThemeProvider } from "./context/ThemeContext";
import { Login } from "./pages/login";
import { AuthProvider } from "./context/AuthContext";
import { Selection } from "./pages/selection";
import { SignUp } from "./pages/signup";
import { Registros } from "./pages/Registros/Registros";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="w-full h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Routes>
              <Route path="/chat" element={<Chat />} />
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/selection" element={<Selection />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/records" element={<Registros />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
