import "./navbar.css";


function Navbar(){
    return(
        <> 
        <nav>
            <a className="navbar-brand logo-image" href="index.html"><img src={require('./images/logo.png')} alt="alternative"></img></a>
            <div>
                <ul id="navbar"className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link page-scroll" href="index.html">HOME</a></li>
                    <li className="nav-item"><a className="nav-link page-scroll" href="index.html">TECHQUICKIE</a></li>
                    <li className="nav-item"><a className="nav-link page-scroll" href="index.html">ABOUT</a></li>
                    <li className="nav-item"><a className="nav-link page-scroll" href="index.html">GET STARTED</a></li>
                    
                </ul>
                
                  
      
            </div>
         </nav>
        
        
        
        </>
    )
}
export default Navbar;