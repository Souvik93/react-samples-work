import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';

export class ReactForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: null,
            flavor: null  };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log('Hey There !! From Handle Change');
        console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value
          });
        
    }

    handleSubmit(event) {
    
          alert('A form was submitted: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Pick your favorite flavor:
                        <select name="flavor" value={this.state.flavor} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}