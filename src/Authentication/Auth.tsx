import { useContext, useEffect, useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Dashboard from "../Dashboard/Dashboard";
import { AuthContext } from "../context/AuthContext";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { user, loading } = useContext(AuthContext);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  if (user) {
    return <Dashboard />;
  }

  return (
    <div className="auth-main">
      <div className="logo-div">
        <img
          src="https://vihdejdhouasksfmldlv.supabase.co/storage/v1/object/sign/logo-image/movie-logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2JiNzVhNTdjLWI5ZTItNGEyMC04NjY3LTA4NjY4NzI1MmYwYyJ9.eyJ1cmwiOiJsb2dvLWltYWdlL21vdmllLWxvZ28ucG5nIiwiaWF0IjoxNzQ4MjkwNDg4LCJleHAiOjE3Nzk4MjY0ODh9.Hu1Rxjz0j77UAQYR2Z8YsXUhAkCYXoBJBt19ZdnxYmI"
          alt="Logo"
          className="logo"
        />
        <h3>Cinema 100</h3>
      </div>

      {isLogin ? (
        <Login switchToRegister={() => setIsLogin(false)} />
      ) : (
        <Registration switchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
}
