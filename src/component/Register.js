import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as action from '../action/index'
import {Redirect} from 'react-router-dom'

class Register extends Component {
    constructor(props){
        super(props);
        this.state ={
            uername : '',
            password :'',
            
        }
    }
    onChange =(e)=>{
        // let isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(e.target.value)
       this.setState({
           [e.target.name] : e.target.value
       })
    }
   
    render (){
        
        
        // const errMessage = "Minimum eight character, at least one uppercase letter, one lowercase letter, one number and one special character"
       
        return (
            <div className="col-md-4 col-md-offset-4" id="login">
              <section if ="inner-wrapper" className="login">
             <article>
                 <form>
                     <div className="form-group">
                         <div classname="input-group">
                             <span className="input-group-addon"><i className ="fa fa-user"></i></span>
                             <input
                             onchange ={this.oneChange}
                             name ="username"
                             value ={this.state.username}
                             type ="text"
                             className ="form-control" placeholder="Name"
                              />
                         </div>
                     </div>
                  <div className="form-group">
                    <div className ="input-group">
                    <span className="input-group-addon"><i className ="fa fa-envelope"></i></span>
                             <input
                             onchange ={this.oneChange}
                             name ="password"
                             value ={this.state.password}
                             type ="password"
                             className ="form-control" placeholder="Password"
                              />
                    </div>
                    
                  </div>
                  <button type ="button" className="btn btn-success btn-block" >Submit</button>
                 </form>
             </article>
              </section>
           </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {

    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {

    }
}
export default connect (mapStateToProps,mapDispatchToProps)(Register);