import "./navigation.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { supabase } from "../../Supabase/supabaseClient";

const Navigation = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Logout failed", error.message);
    } else {
      console.log("Logged out successfully");
    }
  };
  return (
    <div className="navigation-main">
      <div className="navigation-left">
        <img
          src="https://vihdejdhouasksfmldlv.supabase.co/storage/v1/object/sign/logo-image/movie-logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2JiNzVhNTdjLWI5ZTItNGEyMC04NjY3LTA4NjY4NzI1MmYwYyJ9.eyJ1cmwiOiJsb2dvLWltYWdlL21vdmllLWxvZ28ucG5nIiwiaWF0IjoxNzQ4MjkwNDg4LCJleHAiOjE3Nzk4MjY0ODh9.Hu1Rxjz0j77UAQYR2Z8YsXUhAkCYXoBJBt19ZdnxYmI"
          alt="Logo"
          className="logo"
        />
        <p>cinema 100</p>
      </div>
      <div className="navigation-right">
        <p>Welcome {user?.username ? user.username : "Guest"}</p>
        <p onClick={handleLogout}>Log out</p>
        <img src="logut"></img>
      </div>
    </div>
  );
};

export default Navigation;
