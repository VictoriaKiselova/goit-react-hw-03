import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilter }) {
  return (
    <label htmlFor="valueContact" className={css.wrapper}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="valueContact"
        value={filter}
        onChange={event => onFilter(event.target.value)}
      />
    </label>
  );
}
