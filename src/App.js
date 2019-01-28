import React, { Component } from 'react';
import { Growl } from 'primereact/growl';
import { Button } from 'primereact/button';
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PRMessage } from './primeMessage';
import { ReactForm } from './ReactForm';
class App extends Component {
  constructor() {
    super();
    this.showSuccess = this.showSuccess.bind(this);
  }

  showSuccess() {
    this.growl.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Growl ref={(el) => this.growl = el}></Growl>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. Oh really !! It is amazing ..
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="p-col-6 p-md-3">
                            <Button onClick={this.showSuccess} label="Growl Demo" className="p-button-success" />
                        </div>
           <br />
        <div className="p-col-6 p-md-3">
        < PRMessage />
        < ReactForm />
        </div>
        </header>
      
      </div>
    );
  }
}

export default App;
