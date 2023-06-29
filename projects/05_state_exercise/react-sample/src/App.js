import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected, onSelect }) => (
  <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
);

export const StarRating = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};
