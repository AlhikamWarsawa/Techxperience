import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

const List = ({title, icon} : {title: string, icon: any}) => {
    return (
        <View style={tw`mt-5 bg-neutral-900 w-48 p-2 rounded-lg border-l-8 border-green-800`}>
            <View style={tw`flex-row items-center`}>
                <View style={tw`mr-2`}><Ionicons name={icon} size={28} color="white" style={tw`mr-2 bg-neutral-500 p-1 rounded-full`} /></View>
                <Text style={tw`text-white`}>{title}</Text>
            </View>
        </View>
    )
}

export default List

const styles = StyleSheet.create({})