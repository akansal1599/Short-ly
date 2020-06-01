import React from 'react';
import './App.css';
import Input from "./components/Input/Input";
import InputContextProvider from "./context/InputContext";
import Layout from "./components/Layout/Layout";

function App() {

  return (
    <div className="App">
        <InputContextProvider>
        <Layout>
            <Input/>
        </Layout>
        </InputContextProvider>
    </div>
  );
}

export default App;
