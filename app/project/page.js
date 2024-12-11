"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error during login: ", error);
    }
  };

  const logout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  return (
    <main style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Melody+</h1>
      {user ? (
        <div>
          <p>Signed in as {user.displayName} ({user.email})</p>
          <button onClick={logout} style={{ margin: "10px", padding: "10px 20px" }}>
            Logout
          </button>
          <br />
          <Link href="/project/playlist" style={{ color: "blue", textDecoration: "underline", marginTop: "20px" }}>
            Go to Playlist
          </Link>
        </div>
      ) : (
        <div>
          <p>Please log in to continue</p>
          <button onClick={login} style={{ margin: "10px", padding: "10px 20px" }}>
            Login with GitHub
          </button>
        </div>
      )}
    </main>
  );
}
