export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentPackedItems =
    numItems === 0 ? 100 : ((numPackedItems / numItems) * 100).toFixed(1);

  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list, and you already packed{" "}
        {numPackedItems} ({percentPackedItems}%)
      </em>
    </footer>
  );
}
