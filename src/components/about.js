import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h1 className="title">How does it works?</h1>
            <p>
                This project was created as a simple sample to reproduce the use of react-router. <br/>
                The project uses a free API of Fortnite game and you'll need to get an API key to run the project.<br/>
                
                <br/>
                <strong>Get your API key</strong><br/>
                <ul>
                    <li>Access the <a href="https://fortniteapi.com/" target="_blank">API website</a> and Create an Account</li>
                    <li>From the <a href="https://console.fortniteapi.com/dashboard" target="_blank">dashboard</a>, create a default project</li>
                    <li>Copy the project's Authorization token</li>
                    <li>Substitute the value of the const apiKey inside the files <small>items.js</small> and <small>item-detail.js</small></li>
                </ul>
            </p>
        </div>
    );
}

export default About;