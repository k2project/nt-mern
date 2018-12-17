import React, { Component } from 'react';

class Contact extends Component {
    handleSubmit = async e => {
       e.preventDefault();
        console.log('cliked')
       const response = await fetch('/mail/send', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             name: 'John Doe',
             mail: 'egzample@mail.com',
             mobile: '0123456789',
          }),
       });

       console.log(response)
     };
    render() {
        return (
            <div className="Contact">
                 contact page
                 <form onSubmit={this.handleSubmit}>
                  <button type="submit">Let's Chat</button>
                </form>
            </div>
        );
    }
}
export default Contact;
