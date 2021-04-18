import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState();

//         const onAddPost = () => {
//           let action = addPostActionCreator();
//           store.dispatch(action);
//         }

//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text)
//           store.dispatch(action);
//         }

//         return (
//           <MyPosts updateNewPostText={onPostChange} addPost={onAddPost} posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText} />
//         )
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispachToProps)(MyPosts);

export default MyPostsContainer;
