import React from "react";
import { LANG } from "../../utils/langConstants";

function AboutPage({ language }) {
  console.log(language);
  const data = LANG[language];
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default AboutPage;
