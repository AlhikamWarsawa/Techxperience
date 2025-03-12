import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const Access = ({image, text}:any) => {
    return (
        <View style={tw`flex-row gap-4 items-center w-80`}>
            <Image source={image} style={tw`w-12 h-12 rounded-full`}/>
            <Text style={tw `text-sm`}>{text}</Text>
        </View>
    )
}

export default Access