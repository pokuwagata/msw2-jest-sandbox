"use client";

import { FormEvent } from "react";

export default function Home() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const body = new FormData(event.currentTarget);

    await fetch("http://localhost:3000/api/test", {
      method: "POST",
      body,
    });
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input id="name" name="name" type="text" />
        </div>
        <div>
          <label htmlFor="age">age</label>
          <input id="age" name="age" type="number" />
        </div>
        <input type="submit" value="submit" />
      </form>
    </main>
  );
}
