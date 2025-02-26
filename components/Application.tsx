import {Image, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {Link} from "expo-router";

const Application = ({ title, img }: { title: string, img: any }) => {
    return (
        <TouchableOpacity
            style={tw`w-20 items-center m-2 bg-[#141414] rounded-lg px-2 py-2 shadow-sm`}
        >
            <Link href="/(tabs)/home">

                <Image
                    source={img}
                    style={tw`w-100% h-10 mb-1`}
                    resizeMode="contain"
                />
                <Text style={tw`text-xs text-justify text-white`}>{title}</Text>
            </Link>

        </TouchableOpacity>  )
}
export default Application