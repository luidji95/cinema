import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import { supabase } from "../Supabase/supabaseClient";

type User = {
  email: string;
  username: string;
  id: string;
} | null;

type AuthContextType = {
  user: User;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("getSession error:", error.message);
        }

        const currentUser = data?.session?.user;

        if (currentUser) {
          setUser({
            email: currentUser.email!,
            username: currentUser.user_metadata.username || "",
            id: currentUser.id,
          });
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          email: session.user.email!,
          username: session.user.user_metadata.username || "",
          id: session.user.id,
        });
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
