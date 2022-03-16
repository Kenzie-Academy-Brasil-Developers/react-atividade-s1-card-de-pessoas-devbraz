import logo from './logo.svg';
import './App.css';
import DevCard from './components/Developer';

function App() {

  const devs = 
  {
    name: ['João', 'Maria', 'Mario'],
    age: ['18', '23', '28'],
    country: ['Estados Unidos', 'Canadá', 'Brasil']
  } 

  return (
    <div className="App">
      <div className="App-header">

        <DevCard name={devs.name[0]} age={devs.age[0]} country={devs.country[0]} />
        <DevCard name={devs.name[1]} age={devs.age[1]} country={devs.country[1]} />
        <DevCard name={devs.name[2]} age={devs.age[2]} country={devs.country[2]} />

      </div>
    </div>
  );
}

export default App;
