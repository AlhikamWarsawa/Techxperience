import { Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Card = ({title, icon}:any) => {
    return (
        <View style={tw`flex-row bg-blue-500 rounded-xl my-2 shadow-lg w-45`}>
            <View style={tw`w-2 bg-blue-500 rounded-l-xl`}></View>
            <View style={tw`flex-1 bg-gray-700 flex-row rounded-r-xl rounded-l-xl items-center p-4`}>
                <View style={tw`me-5`}>
                    {icon}
                </View>
                <Text style={tw`text-base font-medium text-white ml-2`}>{title}</Text>

            </View>
        </View>    )
}

export default Card