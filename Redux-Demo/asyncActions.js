// Asynchronous Actions in Redux
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

//STATE
const initialState = {
   loading: false,
   user: [],
   error: "",
};

// ACTION CREATORS
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
   return {
      type: FETCH_USERS_REQUEST,
   };
};

const fetchUsersSuccess = (users) => {
   return {
      type: FETCH_USERS_SUCCESS,
      payload: users,
   };
};

const fetchUsersFailure = (error) => {
   return {
      type: FETCH_USERS_FAILURE,
      payload: error,
   };
};

// REDUCERS
const reducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_USERS_REQUEST:
         return {
            ...state,
            loading: true,
         };
      case FETCH_USERS_SUCCESS:
         return {
            loading: false,
            user: action.payload,
            error: "",
         };
      case FETCH_USERS_FAILURE:
         return {
            loading: false,
            user: [],
            error: action.payload,
         };
   }
};

// ACTION CREATOR
const fetchUsers = () => {
   return function (dispatch) {
      dispatch(fetchUsersRequest()); //This would display the loader right before the axios call is made
      axios
         .get("https://jsonplaceholder.typicode.com/users")
         .then((res) => {
            // response.data is the array of users
            const users = res.data.map((user) => user.id);
            dispatch(fetchUsersSuccess(users));
         })
         .catch((err) => {
            // error.message is the error description
            dispatch(fetchUsersFailure(error));
         });
   };
};

// STORE
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
   console.log(store.getState());
});
store.dispatch(fetchUsers);
