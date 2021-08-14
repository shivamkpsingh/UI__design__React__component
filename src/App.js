import "./App.css";
import ChannelDevice from "./Component/ChannelDevice";
// import AddDevice from "./Component/AddDevice";
// import Login from "./Component/Login";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Rooms from "./Component/Rooms";


function App() {
  return (
    <div className="App">
    <ChannelDevice/>
    {/* <AddDevice/> */}
      {/* <Router>
        <Switch>
        <Route path="/rooms">
         <Rooms/>
        </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
