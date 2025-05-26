// src/components/auth/AuthForm.tsx

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

console.log("Supabase Client:", supabase);
console.log("Supabase Auth Module:", supabase.auth);

const AuthForm = ({ type }: { type: "signUp" | "signIn" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = async () => {
    console.log("Supabase Client:", supabase);
    console.log("Supabase Auth Module:", supabase.auth);

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
        email: email,  // 👈 Ensuring email comes from state
        password: password, // 👈 Same for password
        });

        console.log("Auth Response:", { data, error });

        if (error) throw new Error(error.message);
    } catch (err) {
        console.error("Auth Error:", (err as Error).message);
        setError((err as Error).message);
    }
  };



  return (
    <div className="auth-container">
      <h2>{type === "signUp" ? "Sign Up" : "Sign In"}</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleAuth}>{type === "signUp" ? "Register" : "Login"}</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AuthForm;
