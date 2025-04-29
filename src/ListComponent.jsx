import React from "react";

const ListComponent = ({ items, renderItem }) => {
    if (!items || items.length === 0) {
      return (
        <div className="text-center text-gray-500">No items to display.</div>
      );
    }

    return <ul className="max-w-2xl mx-auto">{items.map(renderItem)}</ul>;
}
 
export default ListComponent;
