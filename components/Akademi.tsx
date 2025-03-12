import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRouter } from 'expo-router';

const Card4 = ({img, title, desc, rating, jurusan, harga, warna}: any) => {
    const navigation = useRouter();

    return (
        <View style={tw`bg-transparent rounded-lg  my-1 h-[120px] w-full`}>
            <View style={tw`flex-row`}>
                <View style={tw`relative`}>
                    <Image
                        source={img}
                        style={tw`w-40 h-[120px] rounded-xl`}
                    />
                    <View style={[tw`absolute bottom-2 right-2 px-2 py-1 rounded-full`, {backgroundColor: warna}]}>
                        <Text style={tw`text-black text-xs`}>{harga}</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.push('/details')} style={tw`flex-1 p-2`}>
                    <View style={tw``}>
                        <Text style={tw`text-xs text-neutral-400`}>{jurusan}</Text>

                        <Text style={tw`text-white`}>{title}</Text>
                        <Text style={tw`text-neutral-400 text-xs`}>{desc}</Text>
                    </View>
                    <Text style={tw`text-neutral-200 text-xs mt-6`}>{rating}</Text>


                </TouchableOpacity>

            </View>
        </View>    )
}
export default Card4

const styles = StyleSheet.create({})