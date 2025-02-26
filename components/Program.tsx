import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import {Ionicons} from "@expo/vector-icons";

interface CardProps {
    iconName: string;
    iconColor: string;
    label: string;
}

const Program = ({iconName, iconColor, label}: any) => {
    return (

        <View
            style={tw`bg-[#1e1e1e] w-40 h-40 rounded-lg border-r-4 border-blue-500 flex items-center justify-center p-4 mx-2`}
        >
            <Ionicons name={iconName} size={48} color={iconColor}/>
            <Text style={tw`text-white text-center mt-4`}>{label}</Text>
        </View>    );
}

export default Program;