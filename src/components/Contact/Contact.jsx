export default function Contact({ data: { id, name, number }, onDelete }) {
  // add formatting to the number
  return (
    <div>
      <h2>{name}</h2>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
