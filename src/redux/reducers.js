import { ADD_OBJECT, UPDATE_POSITION, SET_LAYOUT, DELETE_OBJECT } from "./actions";

const initialState = {
  objects: [],
};

export const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OBJECT:
      return { ...state, objects: [...state.objects, action.payload] };
    case UPDATE_POSITION:
      return {
        ...state,
        objects: state.objects.map((obj) =>
          obj.id === action.payload.id
            ? { ...obj, position: action.payload.position }
            : obj
        ),
      };
    case SET_LAYOUT:
      return { ...state, objects: action.payload };
    case DELETE_OBJECT:
      return {
        ...state,
        objects: state.objects.filter((obj) => obj.id !== action.payload),
      };
    default:
      return state;
  }
};