import {
  GETDATA_FAIL,
  GETDATA_LOADING,
  GETDATA_SUCCESS,
  ADD_LIST,
  SELECTED_DELETE_LIST,
  DELETE_ICON_LIST,
} from "../actionTypes/actionTypes";

const listsReducer = (state = { listData: [] }, action) => {
  switch (action.type) {
    case GETDATA_LOADING:
      return { loading: true, listData: [] };
    case GETDATA_SUCCESS:
      console.log(action.payload, "payload");
      return {
        loading: false,
        listData: action.payload,
      };
    case GETDATA_FAIL:
      return { loading: false, error: action.payload };

    case ADD_LIST:
      return {
        ...state,
        listData: [...state.listData, action.payload.data],
      };

    case SELECTED_DELETE_LIST:
      return {
        ...state,
        listData: action.payload.data,
      };

    case DELETE_ICON_LIST:
      return {
        ...state,
        listData: action.payload.data,
      };

    default:
      return state;
  }
};

export { listsReducer };
