import { useState } from "react";

function App() {
  const [joke, setJoke] = useState<string | null>(null);

  const fetchJoke = async () => {
    try {
      const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await res.json();
      setJoke(data.joke);
    } catch (error) {
      setJoke("Failed to fetch joke. Try again!");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dad Joke Generator (PWA)</h1>
      <button onClick={fetchJoke}>Get a Joke</button>
      <p style={{ marginTop: 20 }}>{joke}</p>
    </div>
  );
}

export default App;
