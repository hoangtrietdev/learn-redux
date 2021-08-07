export const HOBBY_ACTION = {
  ADD_HOBBY: 1,
  SET_ACTIVE: 2,
};

export type HobbyAction = {
  type: number;
  payload: { id: any; title: any };
};

export const addNewHobby = (hobby: { id: any; title: any }): HobbyAction => {
  return {
    type: HOBBY_ACTION.ADD_HOBBY,
    payload: hobby,
  };
};

export const setActiveHobby = (hobby: { id: any; title: any }): HobbyAction => {
  return {
    type: HOBBY_ACTION.SET_ACTIVE,
    payload: hobby,
  };
};
