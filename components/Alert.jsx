import { View, Text } from 'react-native'
import React from 'react'

const Alert = ({ msg, color, bgc }) => {
    return (
        <View style={{
            padding: 10,
            backgroundColor: bgc,
            borderRadius: 6,
            width:'100%'
        }}>
            <Text style={{
                color: color,
                textAlign: 'center'
            }}>{msg}</Text>
        </View>
    )
}

export default Alert