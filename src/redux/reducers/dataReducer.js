import { SET_ANGIOGRAM_STATE, SET_DEGREE_STATE } from "src/redux/types";

const initialState = {
  angiogram_state: {
    angiographic: "AP",
    angulation: "CRANIAL",
    degree: {
      x: 0,
      z: 30,
    },
  },
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANGIOGRAM_STATE:
      return {
        ...state,
        angiogram_state: {
          ...state.angiogram_state,
          [action.name]: action.payload,
        },
      };
    case SET_DEGREE_STATE:
      return {
        ...state,
        angiogram_state: {
          ...state.angiogram_state,
          degree: {
            ...state.angiogram_state.degree,
            [action.name]: action.payload,
          },
        },
      };
    default:
      return state;
  }
}
