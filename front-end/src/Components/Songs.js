import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect((id) => {
    axios.get(`${API}/playlists/${id}`);
  }, []);

  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this song</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;
