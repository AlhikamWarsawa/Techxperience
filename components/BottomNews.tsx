import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const NewsMenu2 = ({ title, time }: { title: string; time: string }) => {
    return (
        <View style={tw`flex-row gap-4 items-center p-3 bg-[#1a1a1a] rounded-lg`}>
            <Image source={require("@/assets/images/dkv.jpg")} style={tw`w-12 h-12`}/>
            <View style={tw`flex-1`}>
                <Text style={tw`text-[#0086FF] text-lg font-semibold`}>{title}</Text>
                <Text style={tw`mt-1 text-[#909090] text-sm`}>{time}</Text>
            </View>
        </View>
    );
};

export default NewsMenu2;
