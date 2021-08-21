import "./App.css";
// import Login22 from "./Component/Login2/Login22";
import Login from "./Component/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rooms from "./Component/Rooms";
import AddRoom from "./Component/AddRoom";
import ConnectDevice from "./Component/ConnectDevice";
import ChannelDevice from "./Component/ChannelDevice";
import AddDevice from "./Component/AddDevice";
import DeviceEdit from "./Component/DeviceEdit";
import Bar4 from "./Component/Bar4";
function App() {
  const user = localStorage.getItem("user-info");
  console.log("line 15", user);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/rooms">
            <Rooms />
          </Route>
          <Route path="/addroom">
            <AddRoom />
          </Route>
          <Route path="/connectdevice">
            <ConnectDevice />
          </Route>
          <Route path="/channel">
            <ChannelDevice />
          </Route>
          <Route path="/adddevice">
            <AddDevice />
          </Route>
          <Route path="/edit">
            <Bar4 />
            <DeviceEdit />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
