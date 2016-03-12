import React, {Component} from 'react';

class AddContact extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onSubmit(e){
        e.preventDefault();
        let contact = {
            name: this.refs.name.value.trim(),
            mobile: this.refs.mobile.value.trim(),
            email: this.refs.name.value.trim()
        };
        this.props.addContact(contact);
    }
    render(){
        return(
            <div className="well">
                <h3 className="text-center text-uppercase">Add Contact</h3>
                <form onSubmit={this.onSubmit.bind(this)} className="form-group">
                    <label>Name</label><input ref="name" type="text" placeholder="Enter a name..." className="form-control"/>
                    <label>Mobile</label><input ref="mobile" type="number" placeholder="Provide number..." className="form-control"/>
                    <label>Email</label><input ref="email" type="email" placeholder="Specify email..." className="form-control"/>
                    <hr />
                    <button className="btn btn-info btn-block">AddContact</button>
                </form>
            </div>
        )
    }
}

export default AddContact;