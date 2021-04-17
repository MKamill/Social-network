import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route exact path="/users" render={() => <UsersContainer />} />
        <Route exact path="/news" render={() => <DialogsContainer />} />
        <Route exact path="/music" render={() => <DialogsContainer />} />
        <Route exact path="/settings" render={() => <DialogsContainer />} />
        <Route exact path="/login" render={() => <Login />} />
      </div>
    </div>
  );
};

export default App;
