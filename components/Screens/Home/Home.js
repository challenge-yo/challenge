import React, { Component } from 'react'
import { Container } from 'native-base';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ domain: 'test-new.auth0.com', clientId: '2C7eSJXY0-S5jUiT_S9D-vRD55ki2gJy' });

class Home extends Component {
    render() {

        const loggedIn = true

        return(
            <Container>

                { !loggedIn ? 

                 auth0
                    .webAuth
                    .authorize({scope: 'openid profile email', audience: 'https://test-new.auth0.com/userinfo'})
                    .then( credentials => {
                        // hit our server endpoint here
                        console.log( credentials )
                    })
                    .catch( err => {
                        console.err( err )
                    })
                

                : null
                }
            </Container>
        )
    }
}

export default Home