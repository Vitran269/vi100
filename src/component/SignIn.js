import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import * as action from '../action/index'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : ""
        }
    }
    onChange = (e) =>{
        this.setState({
              [e.target.name] : e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault()
        this.props.onSubmit(this.state)
    }
   
    render(){
        
            return (
                <div className ="container">
                    <div className="row">
                        <div className="col-6">
                           
                            <form>
                                <div className="form-group">
                                    <label for ="exampleInputEmail">User name</label>
                                    <input type ="text"
                                            onChange = {this.onChange}
                                            name = "username"
                                            value = {this.state.username}
                                            class ="form-control" placeholder="Enter user name"
                                    ></input>
                                </div>
                                <div className ="form-group">
                                    <label for = "exampleInputPassword1">Password</label>
                                        <input type="text"
                                                value ={this.state.password}
                                                onChange ={this.onChange}
                                                name ="password"
                                                class="form-control" placeholder="Password"/>
                                      
                                    </div>
                                <button type="button" className="btn btn-primary" onClick = {this.onSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

const mapStateToProps = (state) =>{
    return {
        
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
       onSubmit : (data) =>{
            dispatch(action.login(data))
       }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);