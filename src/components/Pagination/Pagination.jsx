import React, { useEffect, useState } from "react";
import "./Pagination.css";
import { deleteSelectedListAction } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const Pagination = ({ lists, getCounter, getCheckedValueFromPagination }) => {
  const [counter, setCounter] = useState(1);
  const showPerPage = 9;

  const dispatch = useDispatch();

  useEffect(() => {
    getCounter(counter);
  }, [counter, getCounter]);

  const stopCounter = (type) => {
    if (type === "prev") {
      counter === 1 ? setCounter(1) : setCounter(counter - 1);
    }

    if (type === "next") {
      counter === Math.ceil(lists.length / showPerPage)
        ? setCounter(Math.ceil(lists.length / showPerPage))
        : setCounter(counter + 1);
    }
  };

  const getOnCheckedValue = (e) => {
    getCheckedValueFromPagination(e.target.checked);
  };

  const deleteSelectedOnClickHandle = () => {
    let tempList = lists.filter((list) => {
      return list.isChecked !== true;
    });

    dispatch(deleteSelectedListAction(tempList));
  };

  return (
    <div className="pagination-container">
      <div>
        <ul className="pagination">
          <li className="page-item">
            <p
              className="page-link"
              aria-label="Previous"
              onClick={() => setCounter(1)}
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </p>
          </li>
          <li className="page-item">
            <p
              className="page-link"
              aria-label="Previous"
              onClick={() => stopCounter("prev")}
            >
              prev
            </p>
          </li>

          <li className="page-item">
            <p className="page-link" onClick={() => setCounter(1)}>
              1
            </p>
          </li>
          <li className="page-item">
            <p className="page-link" onClick={() => setCounter(2)}>
              2
            </p>
          </li>
          <li className="page-item">
            <p className="page-link" onClick={() => setCounter(3)}>
              3
            </p>
          </li>
          <li className="page-item">
            <p
              className="page-link"
              aria-label="Previous"
              onClick={() => stopCounter("next")}
            >
              next
            </p>
          </li>
          <li className="page-item">
            <p
              className="page-link"
              aria-label="Next"
              onClick={() => setCounter(Math.ceil(lists.length / showPerPage))}
            >
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </p>
          </li>
        </ul>
      </div>
      <div>
        <span className="checkbox-Select-all">
          <input
            type="checkbox"
            name="selectAll"
            checked={
              lists &&
              lists.filter((list) => list.isChecked !== true).length > 0
                ? false
                : true
            }
            onChange={getOnCheckedValue}
          />

          <span>Select All</span>
        </span>
      </div>
      <div>
        <p onClick={deleteSelectedOnClickHandle} className="delete-selected">
          Delete Selected
        </p>
      </div>
    </div>
  );
};

export default Pagination;
