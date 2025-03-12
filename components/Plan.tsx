import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'

const Plan = ({ range, price, pricePer, bgDiskon }: any) => {
    const [selected, setSelected] = useState(false);

    return (
        <TouchableOpacity
            onPress={() => setSelected(!selected)}
            style={tw`w-full bg-white h-20 px-5 py-4 rounded-2xl shadow-lg ${
                selected ? "border-2 border-blue-500" : "border border-gray-700"
            }`}
        >
            <Text style={tw`font-bold text-lg`}>{range}</Text>
            <View style={tw`flex-row justify-between items-center mt-1`}>
                <Text style={tw`text-base`}>Rp {price}</Text>
                <Text style={tw`text-sm`}>Rp {pricePer} / minggu</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Plan;
