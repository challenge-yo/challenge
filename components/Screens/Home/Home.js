import React, { Component } from 'react'
import { Container, Button, Text } from 'native-base'
import Auth0 from 'react-native-auth0'
import axios from 'axios'

const auth0 = new Auth0({ domain: 'test-new.auth0.com', clientId: 'PFmPSI2W6Hmsi14OH8J5xBWXe9F5z5E6' });

class Home extends Component {
    constructor() {
        super()

        this.state = {
            loggedIn: null
        }
    }

    render() {
        return(
            <Container>

            {

                this.state.loggedIn ? null :

                <Button onPress={ () =>                 
                auth0
                .webAuth
                .authorize({scope: 'openid profile email', audience: 'https://test-new.auth0.com/userinfo'})
                .then( (credentials, profile) => {
                    // hit our server endpoint here
                    axios.get('https://test-new.auth0.com/userinfo', {
                        headers: {'Authorization': "Bearer " + credentials.accessToken}
                    }).then( resp => {
                        console.warn( resp.data )
                    })
                    this.props.navigation.navigate('Home')
                }) }><Text>Click Me</Text></Button>
            
            }

            <Button onPress={ () => 
                                    auth0.client.userInfo(this.state.accessToken, (err, profile) => {
                                        if (profile) {
                                        console.warn( profile )
                                        }
                                        cb(err, profile);
                                    })
            }><Text>Hello</Text></Button>

            </Container>
        )
    }
}

export default Home