import logo from './logo.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {
  const user = {
    name: 'Mauricio',
    age: 49,
    role: 'Developer',
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWorld user={user} />
      </header>
    </div>
  )
}

export default App
