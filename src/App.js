import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import './components/Calculator.css';

function App() {
  return (
    <div>
      <div className="top-bar">
        <h1>Math Magicians</h1>
        <nav className="links">
          <Link to="/">Home</Link>
          <Link to="/Calculator">Calculator</Link>
          <Link to="/quote">Quote</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<CalculatorPage />} />
      </Routes>
      <div className="footer">
        <p>&copy; Math magicians 2022</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <main className="main-container">
        <h2>Welcome to Our page!</h2>
        <p>
          It iDummuy text changed into mpre dummiero using Content here, content here, making it
          look like readable English.
        </p>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English.
        </p>
      </main>
    </>
  );
}

function CalculatorPage() {
  return (
    <>
      <main>
        <div className="calculator-container">
          <h2>Let&apos;s do some math</h2>
          <Calculator />
        </div>
      </main>
    </>
  );
}

function Quote() {
  return (
    <>
      <main>
        <div className="quote-container">
          <p>
            Today&apos; s scientists have substituted mathematics for
            experiments, and they wander off through equation after equation,
            and eventually build a structure which has no relation to reality.
          </p>
          <span>Nicholas Tesla</span>
        </div>
      </main>
    </>
  );
}

export default App;
