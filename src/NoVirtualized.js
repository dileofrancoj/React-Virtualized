const NoVirtualized = ({ people }) => {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          <h2>{person.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default NoVirtualized;
