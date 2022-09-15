import React from "react";
import "./home-page.scss";
import CategoryContainer from "./components/category-container/CategoryContainer";

function HomePage() {
  return (
    <div className="container home-page">
      <CategoryContainer />
    </div>
  );
}

export default HomePage;
