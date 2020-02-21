import React, { useState, useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [github_username, setGithub_username] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setlongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setlongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
            ></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              required
              onChange={e => setTechs(e.target.value)}
            ></input>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              ></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setlongitude(e.target.value)}
              ></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/24900774?s=460&v=4"
                alt="brayner"
              />
              <div className="user-info">
                <strong>Brayner Felipe</strong>
                <span>ReactJS, IonicJS</span>
              </div>
            </header>

            <p>qsadasdasdasdasdasdsa. adasdasdsad</p>
            <a href="https://braynerfelipe.com">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/24900774?s=460&v=4"
                alt="brayner"
              />
              <div className="user-info">
                <strong>Brayner Felipe</strong>
                <span>ReactJS, IonicJS</span>
              </div>
            </header>

            <p>qsadasdasdasdasdasdsa. adasdasdsad</p>
            <a href="https://braynerfelipe.com">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/24900774?s=460&v=4"
                alt="brayner"
              />
              <div className="user-info">
                <strong>Brayner Felipe</strong>
                <span>ReactJS, IonicJS</span>
              </div>
            </header>

            <p>qsadasdasdasdasdasdsa. adasdasdsad</p>
            <a href="https://braynerfelipe.com">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/24900774?s=460&v=4"
                alt="brayner"
              />
              <div className="user-info">
                <strong>Brayner Felipe</strong>
                <span>ReactJS, IonicJS</span>
              </div>
            </header>

            <p>qsadasdasdasdasdasdsa. adasdasdsad</p>
            <a href="https://braynerfelipe.com">Acessar perfil do Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
