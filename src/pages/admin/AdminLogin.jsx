import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AdminLogin() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if(error){
      alert(error.message);
    }else{
      window.location.href="/admin";
    }
  };

  return(
    <div>
      <h2>Admin Login</h2>

      <input
      type="email"
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}