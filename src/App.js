// import "./styles.css";

// export default function App() {
//   const name = "Moni";
//   const surname = "<b>gangane</b>";
//   return (
//     <>
//       <h1>
//         Hello {name} {surname}
//       </h1>
//       <nav>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </nav>
//       <div className="container">
//         <p>Lorem helooo knskjdwnjfeqjn jwbfdjewqf </p>
//       </div>
//     </>
//   );
// }

import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route } from "react-router-dom";

import "./styles.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

export default function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutile-dark mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "install textUtils now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "Textutile-light mode";
    }
  };
  return (
    <>
      {/* <Navbar title="Hello how are you" about="about us" /> */}

      <Navbar mode={Mode} toggleMode={toggleMode} />
      {/* <Alert alert="This is alert" /> */}
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={Mode}
        />
        <About />

        {/* <Routes>
          <Route
            path="/"
            element={<Navbar mode={Mode} toggleMode={toggleMode} />}
          >

            
          <Route
            index
            element={
              <TextForm
                exact
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={Mode}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={<About mode={Mode} toggleMode={toggleMode} />}
          />
          </Route>
        </Routes> */}
      </div>
    </>
  );
}
