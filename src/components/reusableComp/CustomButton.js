import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'


export const CustomButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                height: 50,
                width: 180,
                borderRadius: 10,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={props.onPress}>
            <Text style={{
                color: 'white'
            }}>{props.title}</Text>
        </TouchableOpacity>
    )
}