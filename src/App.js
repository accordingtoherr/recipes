import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {



  const getRecipe = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
   

    
    const data = await response.json();
  

    setRecipe(data.data.children);
  }



  return (
    <div className="App">
 



    </div>
  );
}

export default App;
