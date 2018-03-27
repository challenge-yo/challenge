import React from 'react'
import { Text, Button } from 'native-base';

export default function One() {
    return(
        <Button onPress={ () => this.props.navigation.navigate('Two') }><Text>Click Me</Text></Button>
    )
}