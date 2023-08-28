"use client"
import FormUserSearch from "@/components/FormUserSearch"
import Header from "@/components/Header"
import UserInfo from "@/components/UserInfo"
import { useState } from "react";
import {User} from "@/interfaces/user"

function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if(!res.ok){
      setUser(null);
      setError("User not Found!");
      return;
    }
    const data = await res.json();
    setUser(data);
    setError(null)
  }

  return (
    <>
      <Header />
      <main className="flex flex-col gap-4">
        <FormUserSearch getUser={getUser} />
        {user && <UserInfo user={user}/>}
        {error && (
          <div className="rounded-lg bg-red-500 p-4 text-white">{error}</div>
        )}
      </main>
    </>
  )
}
export default Home