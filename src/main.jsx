import React from "react";
import ReactDOM from "react-dom/client";
import {ChakraProvider} from "@chakra-ui/react";

import customTheme from "../theme";

import Nav from "./components/nav";
import Footer from "./components/footer";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Nav />
      <App />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>,
);
