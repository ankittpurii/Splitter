import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

import { useSelector } from 'react-redux'
import { LoadingComp } from '../components/reusableComp'
import config from '../utils/config'

/**
 * HOC for including reusable UI logic
 */

const HOC = (ChildComponent, params) => {
    function InnerHOC(props) {
        const loadingStatus = useSelector((state) => state.LoadingReducer.loadingStatus)
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: config.colors.BACKGROUND_COLOR
            }}>
                <ChildComponent />
                {loadingStatus ? <LoadingComp /> : null}
            </SafeAreaView>
        )
    }
    return InnerHOC
}
export default HOC;