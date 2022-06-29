import {
  COUNTQUESTION,
  SAVEANSWER,
} from "./action";

const intialState = {ans:[],};

export const myReducer = (state = intialState, action) => {
  const Payload = action.payload;
  switch (action.type) {
    case COUNTQUESTION: {
      let tempAns = []
      for(let i=0;i<Payload;i++){
        tempAns.push(null);
      }
      return {
        ...state,
       ans:tempAns,
      };
    }

    case SAVEANSWER: {
      let index = Payload.index;
      let option = Payload.option;
      let tempAns = state.ans;
      tempAns[index] = option;
      return {
        ...state,
       ans:tempAns,
      };
    }

    default:
      return { ...intialState };
  }
};
