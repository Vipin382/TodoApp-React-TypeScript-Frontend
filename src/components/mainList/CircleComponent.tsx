import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";

const CircleComponent = () => {
  const [finished, setFinished] = useState(false);
  return (
    <div className={"mainCircle"}>
      {finished ? (
        <BsCircle
          onClick={() => {
            setFinished(!finished);
          }}
        />
      ) : (
        <BsCircleFill
          onClick={() => {
            setFinished(!finished);
          }}
        />
      )}
    </div>
  );
};

export default CircleComponent;
