import React, { useState } from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import AppContext from "./store";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "My React App", isOpen: false };
//   }

//   componentDidMount() {
//     console.log("I am App component");
//   }

//   componentDidUpdate() {
//     console.log("I am App and I am updated");
//   }

//   handleClick = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   };

//   //  Component LifeCycle

//   render() {
//     console.log("I am inside render");
//     return (
//       <>
//         <Header title={this.state.title} />
//         <div className="h-screen">
//           <div className="flex justify-center">
//             <div className="w-1/2">
//               <button
//                 className="bg-pink-600 p-2 rounded shadow text-white"
//                 onClick={this.handleClick}
//               >
//                 Toggle Me
//               </button>
//               {this.state.isOpen ? <Content /> : null}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }
// }

function App() {
  const [title] = useState("My React App");

  const [images, setimages] = React.useState([
    "https://images.unsplash.com/photo-1592421817004-876c579a18e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    "https://images.unsplash.com/photo-1592436259366-18ab6da5f195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1592407928465-e557fbbf4ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1592565277104-7b50f3396105?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1592509280917-c8e554d3c711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80",
    "https://images.unsplash.com/photo-1592496753124-b3b0a3903254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1592376995682-0cb77747c619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
    "https://images.unsplash.com/photo-1592510036678-04750c7ab958?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1592508908964-c9a7200b9115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1322&q=80",
  ]);

  function reducer(state, action) {
    return state;
  }

  const [state, dispatch] = React.useReducer(reducer, {
    name: "sarthak",
    email: "sarthak@bitfumes.com",
  });
  // const ACTION_UPDATE_EMAIL = {
  //   type: "UPDATE_EMAIL",
  //   payload: "sarthak1@bitfumes.com",
  // };
  // console.log(dispatch(ACTION_UPDATE_EMAIL));

  return (
    <>
      <Header title={title} />
      <div className="h-screen">
        <div className="flex justify-center">
          <div className="w-10/12 text-center mt-10">
            <AppContext.Provider value={[{ name: "sarthak" }]}>
              <Content images={images} setimages={setimages} />
            </AppContext.Provider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
