import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom"

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path="/profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
        <Route exact path="/dialogs" render={() => <Dialogs store={props.store} messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs} />} />
        <Route path="/news" render={() => <Dialogs  store={props.store}  messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs} />} />
        <Route path="/music" render={() => <Dialogs  store={props.store}  messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs} />} />
        <Route path="/settings" render={() => <Dialogs  store={props.store}  messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs} />} />
      </div>
    </div>
  );
};

export default App;
