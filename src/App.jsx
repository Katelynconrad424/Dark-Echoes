import { useState } from "react";
import { episodes } from "./data";
import "./App.css";

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  function handleClick(ep) {
    setSelectedEpisode(ep);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <h1>Dark Echoes</h1>
        <h2>Episodes</h2>

        <ul>
          {episodes.map((ep) => {
            // check if this episode is the one the user clicked
            let isActive = false;
            if (selectedEpisode && selectedEpisode.id === ep.id) {
              isActive = true;
            }

            return (
              <li
                key={ep.id}
                onClick={() => handleClick(ep)}
                className={isActive ? "active" : ""}
              >
                {ep.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="details">
        {selectedEpisode ? (
          <div>
            <h2>Episode {selectedEpisode.number}</h2>
            <h3>{selectedEpisode.name}</h3>
            <p>{selectedEpisode.description}</p>
            <button>Watch now</button>
          </div>
        ) : (
          <p>Please click an episode to see details.</p>
        )}
      </div>
    </div>
  );
}
