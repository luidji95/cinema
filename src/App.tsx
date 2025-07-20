import { useState } from "react";

import "./App.css";
import Auth from "./Authentication/Auth";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
}

export default App;
