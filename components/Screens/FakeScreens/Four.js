import React from 'react'
import { Text, Button, Container } from 'native-base';

export default function Four() {
    return(
        <Container>
        <Button onPress={ () => this.props.navigation.navigate('Two') }><Text>Click Me</Text></Button>
        </Container>
    )
}