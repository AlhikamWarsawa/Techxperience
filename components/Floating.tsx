import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons'

const Floating = ({title, img, deskripsi, icon}:any) => {
    return (
        <View style={tw`bg-gray-800 rounded-xl overflow-hidden shadow-md w-43 `}>
            <Image
                source={img}
                style={tw`w-full h-32`}
            />
            <View style={tw`p-3 rounded-xl`}>
                <Text style={tw`text-base font-bold mb-2 text-white`}>{title}</Text>
                <Text style={tw`text-xs text-gray-600 mb-3 text-white`}>
                    {deskripsi}
                </Text>
                <View style={tw`flex-row justify-end items-center`}>
                    <Text style={tw`text-white`}>Mulai Belajar</Text>
                    <Ionicons name={icon} size={24} color="white" />
                </View>      </View>
        </View>
    )
}
export default Floating