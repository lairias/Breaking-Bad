import React, { Fragment, useState, useEffect } from "react";
import styled from "@emotion/styled";
import Fraase from "./components/Frase";

const Contenerdo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Buton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );

  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  //State de las Fraces
  const [frase, setFrase] = useState({});

  //Sffect
  useEffect(() => {
    ConsultarApi();
  }, []);

  const ConsultarApi = async () => {
    const Api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );

    const frase = await Api.json();
    setFrase(frase[0]);
  };

  return (
    <Fragment>
      <Contenerdo>
        <Fraase frase={frase} />
        <Buton onClick={ConsultarApi}>Obtener Frase</Buton>
      </Contenerdo>
    </Fragment>
  );
}

export default App;
