import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listsAction } from "./redux/actions/actions";
import Home from "./components/Home/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listsAction());
  }, [dispatch]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
