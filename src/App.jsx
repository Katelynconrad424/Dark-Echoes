import { useState } from "react";
import { episodes } from "./data";
import "./App.css";

export default function App() {
  // this remembers which episode you clicked on
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // when you click an episode name, this will run
  function handleClick(episode) {
    setSelectedEpisode(episode);
  }

  return (
    <div className="app">
      {/* Left side with episode names */}
      <div className="sidebar">
        <h1>Dark Echoes</h1>
        <h2>Episodes</h2>

        <ul>
          {episodes.map((ep) => (
            <li
              key={ep.id}
              onClick={() => handleClick(ep)} // when clicked, show details
              className={selectedEpisode?.id === ep.id ? "active" : ""}
            >
              {ep.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side with episode details */}
      <div className="details">
        {selectedEpisode ? (
          <div>
            <h2>Episode {selectedEpisode.number}</h2>
            <h3>{selectedEpisode.name}</h3>
            <p>{selectedEpisode.description}</p>
            <button>Watch now</button>
          </div>
        ) : (
          <p>Please select an episode to see more details.</p>
        )}
      </div>
    </div>
  );
}
