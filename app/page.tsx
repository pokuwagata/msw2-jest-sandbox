"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  async function handleSubmit() {
    const body = new FormData();
    body.append("name", name);
    body.append("age", age.toString());

    await fetch("http://localhost:3000/api/test", {
      method: "POST",
      body,
    });
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            name
            <input
              id="name"
              name="name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            age
            <input
              id="age"
              name="age"
              type="number"
              onChange={(e) => {
                setAge(Number(e.target.value));
              }}
            />
          </label>
        </div>
      </form>
      <button onClick={handleSubmit}>submit</button>
    </main>
  );
}
