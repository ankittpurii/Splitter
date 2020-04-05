import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'

export const useLoading = () => {
 
    const loadingStatus = useSelector((state) => state.LoadingReducer.loadingStatus)
 
    if (loadingStatus)
        return [
            <View style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
            }}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.3
                }} />
                <ActivityIndicator color="red" size="large" />
            </View>
        ]
    else
        return []
}
