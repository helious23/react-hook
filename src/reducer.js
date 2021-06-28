import { v4 as uuidv4 } from "uuid";
// initialState 설정
export const initialState = {
  toDos: [],
  completed: [],
};

// reducer 의 switch 에서 사용할 변수 설정
// dispatch 에서도 사용
export const ADD = "add";
export const DEL = "del";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state, // previous state
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
        // 기존 state 에 새로운 state 및 id 부여하여 기존 state 를 대체함
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
        // 기존 id 와 payload 의 id 를 비교하여 id 가 다른 항목만 새로운 배열로 return
      };
    case COMPLETE:
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      // 기존 id 와 payload 의 id 를 비교하여 같은 항목만 새로운 obj로 return
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, target],
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
        toDos: [...state.toDos, aTarget],
      };
    default:
      return;
  }
};

export default reducer;
