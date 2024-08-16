import React from "react";

const Quote = ({ quote, author }) => {
  return (
    <div className="quote">
      <h3>{quote}</h3>
      <h5>{author}</h5>
    </div>
  );
};

export default Quote;
