"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<object>({});

  async function handleOnClick() {
    const body = new FormData();
    body.append("name", "foo");
    body.append("age", "30");

    const data = await fetch("http://localhost:3000/api/test", {
      method: "POST",
      body,
    });

    const json = await data.json();
    setData(json);
  }

  return (
    <main>
      <button onClick={handleOnClick}>request</button>
      <div>
        <code>{JSON.stringify(data)}</code>
      </div>
    </main>
  );
}
