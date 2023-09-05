import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [username, setUsername] = useState({});
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users/${input}`)
      .then((res) => res.json())
      .then((data) => {
        setUsername(data);
      });
  }, [input]);
  return (
    <div className="card">
      <Form setInput={setInput} />
      <UserCard
        setUsername={setUsername}
        name={username.name}
        user={username.login}
        avatar={username.avatar_url}
      />
    </div>
  );
}
