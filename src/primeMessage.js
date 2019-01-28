import React, { Component } from 'react';
import { Messages } from 'primereact/messages';
import { Button } from 'primereact/button';

export class PRMessage extends Component {
    constructor() {
        super();
        this.showSuccess = this.showSuccess.bind(this);
    }
    showSuccess() {
        this.messages.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    }
    render() { 
        return (
            <div>
            <Messages ref={(el) => this.messages = el}></Messages>
            <Button onClick={this.showSuccess} label="Message Demo" className="p-button-success" />
            </div>
        )
    }
}