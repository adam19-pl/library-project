import './App.css';
import React, { useState, useEffect } from "react";
import axiosInstance from "../src/axios";
import StartApp from '../src/components/application/startPage/startPage';
import Application from '../src/components/application/application';

function App() {


  const [mounted, setMounted] = useState(false);
  const [dataBooks, setDataBooks] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState('');
  const userEmail = localStorage.getItem('authenticated_email');
  if (!mounted) {

    axiosInstance.get('books/').then((res) => {
      setIsAuthenticated(true);
      setDataBooks(res.data);
    }).catch((error) => {
      if (error.response?.status === 401) {
        console.log(error.response.data);
      }
      console.log(error.response);
    });
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (

    <div className="App">

      {isAuthenticated ? <div>
        <Application dataBooks={dataBooks} userEmail={userEmail} />
      </div> :
        <StartApp />}

    </div>
  );
}

export default App;