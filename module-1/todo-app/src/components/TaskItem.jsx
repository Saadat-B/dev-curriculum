const TaskItem = ({ arr, deleteTodo, toggleTodo, setFilterOption }) => {
  return (
    <>
      {arr.length > 0 && (
        <div>
          <button
            onClick={() => {
              setFilterOption("ALL");
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              setFilterOption("COMPLETED");
            }}
          >
            Completed
          </button>
          <button
            onClick={() => {
              setFilterOption("PENDING");
            }}
          >
            Pending
          </button>
        </div>
      )}
      <ul>
        {arr.map((item, index) => (
          <li
            key={`${item.originalIndex}-${item.text}`}
            style={{ textDecoration: item.completed && "line-through" }}
          >
            {item.text}
            <input
              type="checkbox"
              //   value={item.completed}
              onChange={() => {
                toggleTodo(item.originalIndex);
              }}
              checked={item.completed}
            />
            <button
              onClick={() => {
                deleteTodo(item.originalIndex);
              }}
              style={{ marginLeft: "8px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskItem;
