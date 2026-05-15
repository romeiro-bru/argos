import { useState } from "react";
import { Card } from "./components/card";

export default function Home() {

  return (
    <main>
      <h1 className="mb-10">Aumigos disponíveis para adoção</h1>

      <Card />
    </main>
  );
}
