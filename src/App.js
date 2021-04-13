import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <h1>Timely</h1>
          <p className="secondary">Do tasks with in time slot.</p>
        </header>
        <div className="grid">
          <input type={Text} autoFocus></input>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gridColumnGap: '0.8rem' }}>
          <button className="btnSecondary">10 min</button>

            <button className="btnSecondary">30 min</button>
            <button className="btnSecondary">1 hour</button>
          </div>
          

          <button className="addButton" disabled={true}>Start task</button>
        </div>
      </main>
    </div>
  );
}

export default App;
