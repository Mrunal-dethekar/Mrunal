export const COUNTQUESTION = "COUNTQUESTION";
export const SAVEANSWER = "SAVEANSWER";


export const arrayLength = (data) => {
  return {
    type: COUNTQUESTION,
    payload: data,
  };
};

export const sendAnswer = (data) => {
  return {
    type: SAVEANSWER,
    payload: data,
  };
};
