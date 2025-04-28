import css from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => onSearch(e.target.value)}
        className={css.field}
      />
    </div>
  );
}
