import React, { Component } from 'react'
import { Container, Button, Text } from 'native-base'
import Auth0 from 'react-native-auth0'
import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Home from '../../Screens/Home/Home'

const auth0 = new Auth0({ domain: 'test-new.auth0.com', clientId: 'PFmPSI2W6Hmsi14OH8J5xBWXe9F5z5E6' });

class LoginScreen extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            loggedIn: null,
            profile: []
        }
    }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this.isLoggedIn()
    }
    

    componentWillUpdate() {
        this.navigate()
    }

    async isLoggedIn() {
        const response = await AsyncStorage.getItem('UserData')
        const profile = await response

        if (profile !== null) {
            this.setState({
                loggedIn: true
            })
        }
    }

    navigate() {
        this.props.navigation.navigate('Home')
    }

    render() {

        return(
            <Container style={{ display: 'flex', alignItems: 'center', alignContent: 'center', alignSelf: 'center', justifyContent: 'center', flexDirection: 'column'}}>

            {

               this.state.loggedIn === true ? this.navigate() :

                <Button onPress={ () =>     
                // authorize person with Auth0            
                auth0
                .webAuth
                .authorize({scope: 'openid profile email', audience: 'https://test-new.auth0.com/userinfo'})
                .then( (credentials, profile) => {
                    
                    // hit Auth0 endpoints here to get profile
                    axios.get('https://test-new.auth0.com/userinfo', {
                        headers: {'Authorization': "Bearer " + credentials.accessToken}
                    }).then( resp => {
                        this.setState({
                            profile: resp.data
                        })

                        // Adds to persistant storage on device
                        AsyncStorage.setItem('UserData', JSON.stringify(resp.data))

                        // posts profile to our server here which then creates a new session 
                        axios.post(`http://192.168.3.139:3005/api/login/`, {
                            profile: resp.data
                        }).then( resp => {
                            console.log( resp.data )
                        })

                        // posts profile to our database 
                        axios.post('http://192.168.1.26:3005/api/newuser/', {
                            profile: resp.data 
                        })
                    })



                    this.props.navigation.navigate('Home')
                    
                }) }><Text>Login</Text></Button>
            
            }

            </Container>
        )
    }
}

export default LoginScreen