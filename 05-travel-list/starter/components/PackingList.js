import { useState } from "react";
import Item from "./Item.js";

export default function PackingList({
  items,
  onRemoveItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("packed");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => {
      if (a.packed && !b.packed) return 1;
      if (!a.packed && b.packed) return -1;
      return 0;
    });
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onRemoveItem={onRemoveItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear all</button>
      </div>
    </div>
  );
}
