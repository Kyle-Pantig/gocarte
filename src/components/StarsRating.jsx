import { useState } from "react";
import StarOutline from "./Icons/StarOutline";
import StarSolid from "./Icons/StarSolid";

const StarsRating = ({
  defaultHowMany = 0,
  disabled,
  size = "md",
  onChange = (star) => {}, // Fixed: now accepts parameter
}) => {
  const [howMany, setHowMany] = useState(defaultHowMany);

  const five = [1, 2, 3, 4, 5];

  const handleStarRating = (star) => {
    if (disabled) {
      return;
    }
    setHowMany(star);
    onChange(star); // Now matches the function signature
  };

  return (
    <div className="inline-flex items-center">
      {five.map((number, index) => (
        <button
          key={index}
          className={`inline-flex items-center 
          ${size === "md" && "h-4 w-4"} 
          ${size === "sm" && "h-3 w-3"} 
          ${disabled && " cursor-default "}`}
          onClick={() => handleStarRating(number)}
        >
          {howMany >= number ? <StarSolid /> : <StarOutline />}
        </button>
      ))}
    </div>
  );
};

export default StarsRating;