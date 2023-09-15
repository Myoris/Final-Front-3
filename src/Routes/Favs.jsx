import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const getFavoritesFromLocalStorag = () => {
    const favs = localStorage.getItem("favs");
    return favs ? JSON.parse(favs) : [];
  };

  // Obtiene los favoritos desde el almacenamiento local
  const favs = getFavoritesFromLocalStorag();

  return (
    <div className={`favs-container ${state=== "dark" ? "dark-theme" : "light-theme"}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((dentistFavs, index) => (
          <Card key={index} dentist={dentistFavs} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
