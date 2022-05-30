import FetchCompileWasmTemplatePlugin from "webpack/lib/web/FetchCompileWasmTemplatePlugin";

const ADD_GREETING = 'hello-rails/greeting/ADD_GREETINGS';

const initialState = '';

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GREETING:
      return action.payload;
    default:
      return state;
  };
};

export default greetingReducer;

const addGreeting = (text) => ({
  type: ADD_GREETING,
  payload: text,
});

export { addGreeting }

const getGreeting = () => async (dispatch) => {
  const response = await fetch('v1/greeting');
  const data = await response.json();
  dispatch(addGreeting(data.greeting));
};

export { getGreeting };
