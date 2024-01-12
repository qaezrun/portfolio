import React, { useState } from "react";
import "./Home.css";
import Create from "../MessageCreation/create";
import ReactCardFlip from "react-card-flip";
import { useSelector } from "react-redux";
import Loader from "../PopUps/loader";
import Pop from '../PopUps/pop';

function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const isLoading = useSelector((state) => state.loader.value);
  const alertData = useSelector((state)=> state.alert.data)
  const alertShow = useSelector((state)=> state.alert.show)

  const handleClick = (e) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  };

  return (
    <div className="main-con">
      <Loader trigger={isLoading}></Loader>
      <Pop trigger={alertShow} text={alertData.btntxt} status={alertData.status} for={alertData.for}>
          <h4>{alertData.header}</h4>
          <hr />
          <p>{alertData.desc}</p>
      </Pop>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="test">
          <Create />
        </div>
        <div className="test"></div>
      </ReactCardFlip>
    </div>
  );
}

export default Home;
