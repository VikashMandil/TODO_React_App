export default function Task(props) {
  return (
    <div className="task">
      <h3>{props.taskName}</h3>
      <button
        className="editBtn"
        onClick={() => {
          props.editHandler(props.id);
        }}
      >
        Edit
      </button>
      <button
        className="deleteBtn"
        onClick={() => {
          props.deleteHandler(props.id);
        }}
      >
        Done
      </button>
    </div>
  );
}
