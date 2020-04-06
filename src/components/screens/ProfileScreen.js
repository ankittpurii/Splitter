import React from 'react'
import { Text, View } from 'react-native'

export default ProfileScreen = (props) => {

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#F1C100"
        }}>
            <Text style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold'
            }}>Profile screen</Text>
        </View>
    )
}