import axios from "axios";
import {
  GETDATA_FAIL,
  GETDATA_LOADING,
  GETDATA_SUCCESS,
  ADD_LIST,
  SELECTED_DELETE_LIST,
  DELETE_ICON_LIST,
} from "../actionTypes/actionTypes";

const listsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GETDATA_LOADING });
    const { data } = await axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    dispatch({ type: GETDATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GETDATA_FAIL, payload: "something went wrong" });
  }
};

const addListAction = (formData) => {
  return {
    type: ADD_LIST,
    payload: {
      data: formData,
    },
  };
};

const deleteSelectedListAction = (removeData) => {
  return {
    type: SELECTED_DELETE_LIST,
    payload: {
      data: removeData,
    },
  };
};

const deleteListUsingIconAction = (list) => {
  return {
    type: DELETE_ICON_LIST,
    payload: {
      data: list,
    },
  };
};
export {
  listsAction,
  addListAction,
  deleteSelectedListAction,
  deleteListUsingIconAction,
};
