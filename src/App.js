import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, BrowserRouter } from "react-router-dom"

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/profile" render={() => <Profile posts={props.state.profilePage.posts} />} />
          <Route exact path="/dialogs" render={() => <Dialogs messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs} />} />
          <Route path="/news" render={() => <Dialogs messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs} />} />
          <Route path="/music" render={() => <Dialogs messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs} />} />
          <Route path="/settings" render={() => <Dialogs messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs} />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
