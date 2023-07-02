"use client";
import { DOMAttributes, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignIn: DOMAttributes<HTMLButtonElement>["onClick"] = () => {
    // e.preventDefault()
  };

  const handleSignUp: DOMAttributes<HTMLButtonElement>["onClick"] = () => {
    // e.preventDefault()
  };
  return (
    <main className="flex min-h-screen flex-col p-24 color-black">
      <div>
        <form>
          <p>email</p>
          <input
            name="email"
            placeholder="email"
            type="email"
            className="text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>password</p>
          <input
            name="password"
            placeholder="password"
            type="password"
            className="text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          onClick={(e) => handleSignIn(e)}
          style={{
            backgroundColor: "white",
            width: "100px",
            height: "30px",
            marginTop: "10px",
            color: "black",
          }}
        >
          Sign In
        </button>
      </div>
      <div>
        <form>
          <p>email</p>
          <input
            name="email"
            placeholder="email"
            type="email"
            className="text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>password</p>
          <input
            name="password"
            placeholder="password"
            type="password"
            className="text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>confirm password</p>
          <input
            name="confirm_password"
            placeholder="confirm password"
            type="password"
            className="text-black"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </form>
        <button
          onClick={(e) => handleSignUp(e)}
          style={{
            backgroundColor: "white",
            width: "100px",
            height: "30px",
            marginTop: "10px",
            color: "black",
          }}
        >
          Sign up
        </button>
      </div>
    </main>
  );
}
