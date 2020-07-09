import React, {Component} from 'react';
import './App.css';
import ConditionalSection from './sections/conditional';
import cars from './data/cars.json';

class CarItem extends Component{
  render() {
    const {id, car} = this.props;

    return(
      <li>
        {/* El prop key no es recuperable en el componente */}
        {/* <p>Key: {key}</p> */}
        {/* En caso de ser necesario debe ser enviada en otra propiedad */}
        <p>Id: {id}</p>
        <p><strong>Nombre:</strong>{car.name}</p>
        <p><strong>Marca:</strong>{car.company}</p>
      </li>
    );
  }
}

function App() {
  const numbers = [1, 1, 3, 4, 5];

  return (
    <div className="App">
      {/* <ConditionalSection /> */}
      {/* <h4>Trabajando con listas</h4> */}
      {/* {numbers.map((number, index) => <p key={index}>Soy el numero {number}</p>)} */}
      <h4>Trabajando conlistas con objetos</h4>
      <ul>
        {cars.map(car => {
          return <CarItem id={car.id} key={car.id} car={car}/>
        })}
      </ul>
    </div>
  );
}

export default App;
