import React from "react";
import AuthContext, { useAuthContext } from "./contexts/authContext";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

const App = () => {
  const authContextValue = useAuthContext();

  return (
    <BrowserRouter>
      <AuthContext.Provider value={authContextValue}>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<SearchPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
