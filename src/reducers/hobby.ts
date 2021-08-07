import { HobbyAction, HOBBY_ACTION } from "../actions/hobby";

type HobbyState = {
  list: object[];
  activeId: any;
};

const initialState: HobbyState = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = initialState, action: HobbyAction) => {
  switch (action.type) {
    case HOBBY_ACTION.ADD_HOBBY: {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }
    case HOBBY_ACTION.SET_ACTIVE: {
      const newActiveId = action.payload.id;
      return {
        ...state,
        activeId: newActiveId,
      };
    }
    default:
      return state;
  }
};

export default hobbyReducer;
