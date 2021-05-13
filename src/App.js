import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import "./index.css";
import "./App.css";
import { Header } from "./components/organisms/layout/Header";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Header/>
        <Router  />
      </BrowserRouter>
    </ChakraProvider>
  );
}
