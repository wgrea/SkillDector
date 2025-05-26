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
        email: email,
        password: password,
        });

        console.log("Auth Response:", { data, error });

        if (error) throw new Error(error.message);
    } catch (err) {
        console.error("Auth Error:", (err as Error).message);
        setError((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{type === "signUp" ? "Sign Up" : "Sign In"}</h2>
      <input
        className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        onClick={handleAuth}
      >
        {type === "signUp" ? "Register" : "Login"}
      </button>
      {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
    </div>
  );
};

export default AuthForm;
