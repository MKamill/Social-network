import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route exact path="/users" render={() => <UsersContainer />} />
        <Route exact path="/news" render={() => <DialogsContainer />} />
        <Route exact path="/music" render={() => <DialogsContainer />} />
        <Route exact path="/settings" render={() => <DialogsContainer />} />
      </div>
    </div>
  );
};

export default App;
