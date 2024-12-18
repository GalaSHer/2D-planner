export const ADD_OBJECT = "ADD_OBJECT";
export const UPDATE_POSITION = "UPDATE_POSITION";
export const SET_LAYOUT = "SET_LAYOUT";
export const DELETE_OBJECT = "DELETE_OBJECT";

export const addObject = (object) => ({
  type: ADD_OBJECT,
  payload: object,
});

export const updatePosition = (id, position) => ({
  type: UPDATE_POSITION,
  payload: { id, position },
});

export const setLayout = (layout) => ({
  type: SET_LAYOUT,
  payload: layout,
});

export const deleteObject = (id) => ({
  type: DELETE_OBJECT,
  payload: id,
})