import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("http://localhost:3333/smurfs")
      .then((resp) => {
        const data = resp.data;

        dispatch(fetchSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchError(err));
      });
  };
};

export const postSmurf = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3333/smurfs", data)
      .then((resp) => {
        console.log(resp);
        dispatch(addSmurf(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};

export const fetchError = (err) => {
  return { type: FETCH_ERROR, payload: err };
};

export const addSmurf = (data) => {
  return { type: ADD_SMURF, payload: data };
};

export const setError = (err) => {
  return { type: SET_ERROR, payload: err };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
