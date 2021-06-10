import { List, AutoSizer } from "react-virtualized";

const Virtualized = ({ people }) => {
  return (
    <div className="list">
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowHeight={50}
            rowCount={people.length}
            rowRenderer={({ key, index, style }) => {
              const person = people[index];

              return (
                <div key={key} style={style}>
                  <h2>{person.name}</h2>
                </div>
              );
            }}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default Virtualized;
