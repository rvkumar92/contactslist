import React, {Component} from 'react';

class Contact extends Component{

    render(){
        //const{contact} = this.props.contact;
        console.log(this.props.contact.name);
        return(
            <div className="row display-form">
                <div class="panel panel-default">
                    <div class="panel-body">
                    </div>
                     <table class="table">
                         <ul className="list-group">
                             <div className="col-md-3">
                                 <li className="list-group-item">{this.props.contact.name}</li>
                             </div>
                             <div className="col-md-3">
                                 <li className="list-group-item">{this.props.contact.mobile}</li>
                             </div>
                             <div className="col-md-3">
                                 <li className="list-group-item">{this.props.contact.email}</li>
                             </div>
                             <div className="col-md-3">
                                 <button className="btn btn-info">Edit</button>
                                 <button className="btn btn-danger">Delete</button>
                             </div>
                         </ul>
                    </table>
                </div>
            </div>
        )
    }
}

export default Contact;