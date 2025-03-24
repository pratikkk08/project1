
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'

function App() {
  return (
    <>
      <Navbar title="Project1" about="About Project1" />
      
      <div className="container" my-5>
         <TextForm heading="Enter the text to Analyze"/>

      </div>
    </>
  );
}

export default App;
