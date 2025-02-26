import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import runAllTicks = jest.runAllTicks;

const ButtonPrimary = ({title, warnaBtn, warnaText, route} : {title : string, warnaBtn : string, warnaText : string, route: () => void}) => {
    return (
        <TouchableOpacity style={tw`bg-${warnaBtn} px-[25%] py-4 rounded-lg`} onPress={route}>
            <Text style={tw`text-${warnaText} font-bold text-center`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonPrimary