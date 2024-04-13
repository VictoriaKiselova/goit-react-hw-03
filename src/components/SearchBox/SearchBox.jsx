import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilter }) {
  return (
    <label htmlFor="valueContact">
      Find contacts by name
      <input
        type="text"
        name="valueContact"
        value={filter}
        onChange={event => onFilter(event.target.value)}
      />
    </label>
  );
}
