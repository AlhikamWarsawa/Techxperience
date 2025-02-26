import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  tw from 'twrnc'

const Card = ({img, title, tgl, harga}: any) => {
    return (
        <View style={tw`bg-[#141414] p-3 h-36 rounded-xl w-90 shadow-lg mb-3`}>
            <View style={tw`flex-row items-center gap-3 flex-wrap`}>
                <View style={tw`w-30 h-30 rounded-lg overflow-hidden`}>
                    <Image source={img}  style={tw`w-full h-full`} />
                </View>


                <View style={tw`flex-1 min-w-[200px]`}>
                    <Text style={tw`text-green-600`}>{tgl}</Text>
                    <Text style={tw`text-lg font-bold text-white`}>{title}</Text>
                    <Text style={tw`text-md text-white`}>{harga}</Text>
                </View>
            </View>
        </View>
    )
}
export default Card

const styles = StyleSheet.create({})