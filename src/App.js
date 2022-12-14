import logo from './logo.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {
  const user = {
    name: 'Mauricio',
    age: 49,
    role: 'Developer',
  }

  const greeting = (name) => {
    console.log('Hello World! ' + name)
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
        <HelloWorld user={user} fn={greeting} />
      </header>
    </div>
  )
}

export default App
