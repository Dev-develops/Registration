import React from 'react';
import  Professional from './Professional';
import  Personal from './Personal';
import  Upload from './Upload';
import  Varification from './Varification';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import "./bootstrap/bootstrap.min.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';



const App = () => {


    
       
        
    

    return (
              <>
                   <div className="markee">
               <h1 className="main-caption text-center my-5"><marquee behavior="alternate">Helpworx Technology Private Limited</marquee></h1>
               
               <div className="socialMedia mb-2">
               <button className="fb"><FacebookIcon/></button>
               <button  className="twit"><TwitterIcon/></button>
               <button  className="ig"><InstagramIcon/></button>
               <button  className="wp"><WhatsAppIcon/></button>
               </div></div>
                     <div className="container mx-auto my-5">
                       <h3 className="start-cap">Fill following Details for Registering :-</h3>
                         <div className="row_btns" id="navbar">

                 <div class="btn-group my-5" role="group" aria-label="Basic outlined example">
                   <a href="/Personal"><button type="button" class="btn btn-outline-primary mrg_btns">Personal Details</button></a>
                   <a href="/Professional"><button type="button" class="btn btn-outline-primary mrg_btns">Professional Details</button></a>
                   <a href="/Upload"><button type="button" class="btn btn-outline-primary mrg_btns">Upload Sample</button></a>
                   <a href="/Varification"><button type="button" class="btn btn-outline-primary mrg_btns">Varification of Information</button></a>
</div>
                        
                         
                         
                    </div>
                    
                    </div>
                 

               
                <Switch>
                    <Route exact path="/Personal" component={Personal}/>
                    <Route exact path="/Professional" component={Professional}/>
                    <Route exact path="/Upload" component={Upload}/>
                    <Route exact path="/Varification" component={Varification}/>
                </Switch>
               
              </>

    );
}
export default App;