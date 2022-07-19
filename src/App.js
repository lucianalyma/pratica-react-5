import React, { Component } from "react";

export default class App extends Component {
  state = {
    aboutMe: [
      {
        Livro: "Dom Casmurro"
      },
      {
        Novela: "Tititi"
      },
      {
        Filme: "Escritores da liberdade"
      },
      {
        Lugar: "Meu quarto"
      },
      {
        Música: "Gospel"
      },
      {
        Comida: "Massa"
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.aboutMe.map((item) => (
          <div>
            <ul>
              <li>
                {item.Livro}
                {item.Novela}
                {item.Filme}
                {item.Lugar}
                {item.Música}
                {item.Comida}
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
