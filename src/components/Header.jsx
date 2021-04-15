import {useState} from 'react';


const Header = () => {

    const [darkMode,setDarkMode ] = useState(false);

    const handleClick = () =>{
      setDarkMode(!darkMode);
    }
    
    
        return (
            <div className="Header" >
                
                <div><h1>React hooks</h1></div>
                <button type="button" onClick= {handleClick}> {darkMode ? 'darkMode' : 'ligthMode'} 
                 </button>
            </div>
        );
    }


export default Header;