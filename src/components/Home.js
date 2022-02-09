import React from 'react'; 
import { Grid } from '@material-ui/core';
//import "./Home.css";
const Home = () => {
    return (
        
     <>
     <div className="container-fluid">
         <img src="https://www.w3schools.com/w3images/hamburger.jpg" alt='...' height={"450px"} width={"100%"}></img>
     </div>
     <div className="container">
         <div className="row">
             <div className="col secondary">
             <img
                    src="https://www.w3schools.com/w3images/tablesetting2.jpg"
                    alt='...'>
                </img>
             </div>
             <div className="col secondarytext">
                 <div className="row">
                     <h1>About Catering</h1>
                 </div>
                 <div className="row">
                     <h4>Tradition since 1889
</h4>
                 </div>
                 <div className="row">
                    <p><b>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.
                    </b></p>
                 </div>
                 <div className="row">
                     <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
                 </div>
             </div>
         </div>
     </div>
     </>

 
     

    )
}

export default Home;