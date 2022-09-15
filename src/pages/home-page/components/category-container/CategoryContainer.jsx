import React from "react";
import "./category-container.scss";
import CategoryItemData from "../../../../data/CategoryItemData";
import CategoryItem from "../category-item/CategoryItem";

class CategoryContainer extends React.Component {
  // state of component
  state = {
    items: CategoryItemData,
  };

  // render component
  render() {
    return (
      <div className="category-container">
        {this.state.items.map(({ id, title, imageUrl, size, linkUrl }) => (
          <CategoryItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default CategoryContainer;
