import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import ButtonPrimary from "@/components/ButtonPrimary";
import {useRouter} from "expo-router";

const index = () => {

    const navigation = useRouter();
    return (
        <SafeAreaView style={tw`bg-[#1e1e1e] h-full w-full p-4`}>
            <View>
                <View style={tw`flex flex-col items-center mt-30 mb-30`}>
                    <Image source={require('@/assets/images/techxperience.png')} style={tw`w-full h-20`}></Image>
                </View>

                <View style={tw`flex-col items-center`}>
                    <Text style={tw`text-white text-2xl font-bold text-center mt-4`}>Belajar Technology</Text>
                    <Text style={tw`text-white text-2xl font-bold text-center`}> & Dapatkan Pengalamannya</Text>
                    <Text style={tw`text-white mt-4 text-center`}>Belajar di Techxperience ini kamu dapat belajar</Text>
                    <Text style={tw`text-white text-center`}>berbagai bidang teknologi seperti pemrograman,</Text>
                    <Text style={tw`text-white text-center mb-30`}>desain grafis, dan jaringan.</Text>
                </View>

                <TouchableOpacity
                    style={tw`flex-col items-center mb-4 border border-white rounded-lg p-4`}
                    onPress={() => navigation.push('/auth/signup')}
                >
                    <Text style={tw`text-white text-center`}>Mulai Belajar Sekarang</Text>
                </TouchableOpacity>

                <ButtonPrimary title="Masuk" warnaBtn="[#4285f4]" warnaText="[#fff]" route={() => navigation.push('/auth/signin')}/>

                <View>
                    <Text style={tw`text-white text-center mt-4`}>#Dari 1 Baris Pertama, Sampai 1 Project Pertama</Text>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default index