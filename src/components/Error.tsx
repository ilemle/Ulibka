

import React from 'react';
import {
    Text,
    TextStyle,
} from 'react-native'

interface IError {
    error: string | null
    style: TextStyle
}

const Error = (props: IError) => {

    const { error, style } = props

    return (<Text style={style}>
        {error}
    </Text >)

}

export default Error