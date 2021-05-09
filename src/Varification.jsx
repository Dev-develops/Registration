import React from 'react';
import "./bootstrap/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import  Upload from './Upload';


const Varification = () => {

  const form_submitted = () => {
    alert("Thanks for Applying.Your Form Submitted SUCCESSFULLY !!");
  }

    <Switch>
  <Route exact path="/Upload" component={Upload}/>
  </Switch>
  
  const showMail = () =>{
     var mail = document.getElementById('var-mail');
     var display = mail.classList.contains('d-none');
       if(display === true){
         mail.classList.remove('d-none')
       }
       else(
         mail.classList.add('d-none')
       )
  }
  const showNum = () =>{
    var Num = document.getElementById('var-Num');
    var display = Num.classList.contains('d-none');
      if(display === true){
        Num.classList.remove('d-none')
      }
      else(
        Num.classList.add('d-none')
      )
 }
 const showGovt = () =>{
  var Govt = document.getElementById('var-Govt');
  var display = Govt.classList.contains('d-none');
    if(display === true){
      Govt.classList.remove('d-none')
    }
    else(
      Govt.classList.add('d-none')
    )
}

    return (
              <>
              <div className="Varification_container">
                <h1 className="varification_id">Varification : </h1>
                   <div id="varification_btns"> 
                <button className="varify_m mx-1 my-3" onClick={showMail}>Varify Mail</button>
                    <div id="var-mail" class=" d-none">
                    <div class="col-md-4 my-1">
                    <input type="email" placeholder="Enter You email" class="varify_input col-md-9" id="inputEmail4"></input>
                    <button className="send_code">Send Code</button>
                    </div>
                    <div class="col-sm-1 my-2 varify_sec">
                    <input type="email" class="varify_code col-sm-10" id="inputEmail4"></input>
                    <button className="varify_btn">Varify</button>
                    </div></div>

                <button className="varify_m mx-1 my-3" onClick={showNum}>Varify Mobile No.</button>
                    <div id="var-Num" class=" d-none">
                    <div class="col-md-4 my-1">
                    <input type="number" placeholder="Enter You Mobile Number" class="varify_input col-md-9" id="inputEmail4"></input>
                    <button className="send_code">Send Code</button>
                    </div>
                    <div class="col-sm-1 my-2 varify_sec">
                    <input type="email" class="varify_code col-sm-10" id="inputEmail4"></input>
                    <button className="varify_btn">Varify</button>
                    </div></div>

                <button className="varify_m mx-1 my-3" onClick={showGovt}>Varify Govt. Id</button>
                    <div id="var-Govt" class=" d-none">
                    <div class="col-md-4 my-1">
                    <input type="email" placeholder="Enter You Govt. Id" class="varify_input col-md-9" id="inputEmail4"></input>
                    <button className="send_code">Send Code</button>
                    </div>
                    <div class="col-sm-1 my-2 varify_sec">
                    <input type="email" class="varify_code col-sm-10" id="inputEmail4"></input>
                    <button className="varify_btn">Varify</button>
                    </div></div>
                    </div>


                <div class="d-grid gap-5 my-5">
                <a href="/Upload" className="previos_professional"><button class="Bswitch_btn" type="button">Previos</button></a>
                 <button class="submit_btn" onClick={form_submitted}>Submit Form</button> 
                </div>
                </div>
              </>

    );
}
export default Varification;