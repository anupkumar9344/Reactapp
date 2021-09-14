import Navbar from './components/Navbar'
import './App.css';
import './components/scss/style.css'
import TextForm from './components/TextForm'
function App() {
  return (
    <div>
        <Navbar bname='TextUtils'/>
        <div className="container">
          <TextForm heading="Enter Text Here"/>
        </div>
    </div>
  );
}

export default App;
