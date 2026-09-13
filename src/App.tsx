import { useState } from "react";
import { birthday } from "./config";
import LoginGate from "./components/LoginGate";
import GuessDay from "./screens/GuessDay";
import PuzzleChallenge from "./screens/PuzzleChallenge";
import MemoryMatch from "./screens/MemoryMatch";
import BirthdayReveal from "./screens/BirthdayReveal";
import CakeCutting from "./screens/CakeCutting";
import FinalMessage from "./screens/FinalMessage";

type Stage = "date" | "puzzle" | "memory" | "reveal" | "cake" | "message";

export default function App() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem("shenya-unlocked") === "1"
  );
  const [stage, setStage] = useState<Stage>("date");

  if (!unlocked) {
    return <LoginGate onSuccess={() => setUnlocked(true)} />;
  }

  const names: Record<Stage, string> = {
    date: "Guess the Day",
    puzzle: "Idol Question",
    memory: "Memory Match",
    reveal: "Birthday Reveal",
    cake: "Cake Cutting",
    message: "Final Message",
  };

  const n: Record<Stage, number> = {
    date: 1,
    puzzle: 2,
    memory: 3,
    reveal: 4,
    cake: 5,
    message: 6,
  };

  const replay = () => {
    sessionStorage.removeItem("shenya-unlocked");
    setUnlocked(false);
    setStage("date");
  };

  return (
    <main className="page">
      <div className="app">
        <header>
          🎂 {birthday.name}'s Birthday Adventure
          <span>
            {n[stage]}/6 · {names[stage]}
          </span>
        </header>

        {stage === "date" && <GuessDay next={() => setStage("puzzle")} />}
        {stage === "puzzle" && (
          <PuzzleChallenge next={() => setStage("memory")} />
        )}
        {stage === "memory" && (
          <MemoryMatch next={() => setStage("reveal")} />
        )}
        {stage === "reveal" && (
          <BirthdayReveal next={() => setStage("cake")} />
        )}
        {stage === "cake" && (
          <CakeCutting next={() => setStage("message")} />
        )}
        {stage === "message" && <FinalMessage replay={replay} />}
      </div>
    </main>
  );
}
