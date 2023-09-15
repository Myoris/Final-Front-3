import React, { useContext, useEffect } from 'react'
import Card from '../Components/Card'
import { useState } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { getUsuarios, handleSetUsers, state } = useContext(ContextGlobal);

  useEffect(() => {
      getUsuarios().then((datos) => {
          handleSetUsers(datos);
          setLoading(false);
      });
  }, []);

  return (
      <div>
          <main className="">
              <h1>Home</h1>
              <div className="card-grid">
                  {!loading &&
                      state.allDestist.map((item) => (
                          <Card key={item.id} {...item} />
                      ))}
              </div>
          </main>
      </div>
  );
};

export default Home