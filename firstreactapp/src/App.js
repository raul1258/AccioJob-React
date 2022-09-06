import React from 'react';
import './App.css';
import Card from './components/Card'

function App() {
  return (

    <div className='App'>
    <Card
    title = 'Rahul'
    imageUrl ='https://images2.alphacoders.com/459/thumb-1920-459511.jpg'
    body = 'Pará is a state of Brazil, located in northern Brazil and traversed by the lower Amazon River. It borders the Brazilian states of Amapá, Maranhão, Tocantins, Mato Grosso, Amazonas and Roraima. To the northwest are the borders of Guyana and Suriname, to the northeast of Pará is the Atlantic Ocean. The capital and largest city is Belém, which is located at the mouth of the Amazon. The state, which is home to 4.1% of the Brazilian population, is responsible for just 2.2% of the Brazilian GDP.'
    footer = 'Click Here'
    />
  
   <Card
    title = 'Vivek'
    imageUrl ='http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg'
    body = 'Pará is a state of Brazil, located in northern Brazil and traversed by the lower Amazon River. It borders the Brazilian states of Amapá, Maranhão, Tocantins, Mato Grosso, Amazonas and Roraima. To the northwest are the borders of Guyana and Suriname, to the northeast of Pará is the Atlantic Ocean. The capital and largest city is Belém, which is located at the mouth of the Amazon. The state, which is home to 4.1% of the Brazilian population, is responsible for just 2.2% of the Brazilian GDP.'
    footer= 'Click Here'
    />
    <Card
    title = 'OmRaj'
    imageUrl ='https://hddesktopwallpapers.in/wp-content/uploads/2015/09/nice-images.jpg'
    body = 'Pará is a state of Brazil, located in northern Brazil and traversed by the lower Amazon River. It borders the Brazilian states of Amapá, Maranhão, Tocantins, Mato Grosso, Amazonas and Roraima. To the northwest are the borders of Guyana and Suriname, to the northeast of Pará is the Atlantic Ocean. The capital and largest city is Belém, which is located at the mouth of the Amazon. The state, which is home to 4.1% of the Brazilian population, is responsible for just 2.2% of the Brazilian GDP.'
    footer= 'Click Here'
    />
      
    </div>
  );
}

export default App;
