
import './App.css';
import EmailSection from './EmailSection';
import Icons from './Icons';
import Recent from './Recent';
import './App.scss'


function App() {
  return (
    <div>
      <div className='sections'>
        <div className='line'>
          <Icons />
        </div>
        <EmailSection/>

        
        <Recent />
      </div>

    
    </div>
  );
}

export default App;
