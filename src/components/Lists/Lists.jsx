import "./Lists.css";
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteListUsingIconAction } from "../../redux/actions/actions";

const Lists = ({ inputValueSearch, sortValue }) => {
  const [lists, setLists] = useState("");
  // const [checkBox, setCheckBox] = useState(false);
  const { listData } = useSelector((state) => state.listsReducer);
  const dispatch = useDispatch();
  console.log(listData, "lsit");

  const getData = () => {
    setLists(listData);
  };

  useEffect(() => {
    getData();
  }, [listData]);

  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(9);
  const showPerPage = 9;

  const getCounter = (counter) => {
    const value = showPerPage * counter;
    setEndPage(value);
    setStartPage(value - showPerPage);
  };

  const getCheckedValueFromPagination = (checked) => {
    let tempList = lists.map((list) => {
      return { ...list, isChecked: checked };
    });
    setLists(tempList);
  };

  const onEveryInputChange = (e) => {
    let { name, checked } = e.target;
    let tempList = lists.map((list) => {
      return list.name === name ? { ...list, isChecked: checked } : list;
    });
    setLists(tempList);
  };

  const onClickDeletedIconHandle = (id) => {
    let tempList =
      lists &&
      lists.filter((list) => {
        return list.id !== id;
      });
    dispatch(deleteListUsingIconAction(tempList));
  };

  const result =
    lists &&
    lists
      .filter((list) => {
        if (
          list.name.toLowerCase().includes(inputValueSearch.toLowerCase()) ||
          list.email.toLowerCase().includes(inputValueSearch.toLowerCase()) ||
          list.role.toLowerCase().includes(inputValueSearch.toLowerCase())
        )
          return list;
      })
      .slice(startPage, endPage)
      .filter((list) => {
        return list;
      })
      .sort((a, b) => a[sortValue].localeCompare(b[sortValue]))
      .map(({ id, name, email, role, isChecked }) => {
        return (
          <div
            style={{ backgroundColor: isChecked ? "grey" : "" }}
            className="lists-div"
            key={id}
          >
            <p>
              <span>Name : </span> {name}
            </p>
            <p>
              <span>Email : </span> {email}
            </p>
            <p>
              <span>Role : </span> {role}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "auto",
                // marginTop: "-5px",
                width: "80%",
              }}
            >
              <input
                type="checkbox"
                name={name}
                checked={!isChecked ? false : isChecked}
                onChange={onEveryInputChange}
              />
              <EditIcon />
              <DeleteIcon onClick={() => onClickDeletedIconHandle(id)} />
            </div>
          </div>
        );
      });
  return (
    <div className="Lists">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          //   padding: "14px",
          //   placeItems: "center",
          minHeight: "450px",
          gap: "1em",
        }}
      >
        {result}
      </div>

      <Pagination
        getCheckedValueFromPagination={getCheckedValueFromPagination}
        lists={lists}
        getCounter={getCounter}
      />
    </div>
  );
};

export default Lists;
