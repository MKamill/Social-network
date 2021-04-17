import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState();

//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageCreator());
//         }

//         let onNewMessageChange = (body) => {
//           store.dispatch(updateNewMessageBodyCreator(body));
//         }

//         return (
//           <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={state.messagesPage} />
//         )
//       }}
//     </StoreContext.Consumer>
//   );
// };


const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
