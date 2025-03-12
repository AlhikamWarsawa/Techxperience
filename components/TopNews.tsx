import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const TopNews = ({title, time}:any) => {
    return (
        <View style={tw `w-80 mt-4 `}>
            <Image source={require("@/assets/images/dkv.jpg")} style={tw`w-12 h-12`} />
            <Text style={tw`text-[#0086FF] mt-2 text-[4.2]`}>
                { title }
            </Text>
            <Text style={tw`text-[#909090] mt-1 text-[3]`}>{ time }</Text>
        </View>
    );
}

export default TopNews