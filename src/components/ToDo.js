import { COMPLETE, DEL, UNCOMPLETE } from "../actions";
import { useDispatch } from "../context";

export default function ToDo({ text, id, isCompleted }) {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      <span onClick={() => dispatch({ type: DEL, payload: id })}>❌</span>
      <span
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? "🤷🏼‍♂️" : "✅"}
      </span>
    </li>
  );
}
