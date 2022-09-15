import React from "react";
import "./category-item.scss";

function CategoryItem({ title, imageUrl, size, linkUrl }) {
  return (
    <div className={`category-item ${size}`}>
      <div
        className="category-item-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-item-content">
        <h2 className="category-item-title">{title.toUpperCase()}</h2>
        <span className="category-item-subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default CategoryItem;
