import { useState } from "react"
import './App.css';
import { PostCreator } from "./components/postCreater";

// build app function to sun our functional components. 
const App = () => {
  const [user, setUser] = useState();
  const [list, setList] = useState([]);
  const [postContent, setPostContent] = useState();

  // create submit handler to prevent page rerendering and add user input to list array.
  const submitHandler = (e) => {
    e.preventDefault();
    if (postContent) {
      setList([...list, postContent])
    }
  }

  return (
    <div className="App">
      {/* if user exists display welcome message, else ask for log in */}
      {user ? <h1> Welcome {user}</h1> : <h1> Please log in </h1>}
      {/* take input and update value of user */}
      <input onChange={(e) => setUser(e.target.value)}/>
      {/* use PostCreator functional component and set props */ }
      <PostCreator setPostContent={setPostContent} list={list} submitHandler={submitHandler}/>
      <div>
        {/* map over list array, using the index as a key to give each element a degree of uniqueness*/}
        {list.map((item, index) => <h2 key={index}>{item}</h2>)}
      </div>
    </div>
  );
}

export default App;