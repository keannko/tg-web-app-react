import { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return <div className="App"></div>;
};

export default App;
