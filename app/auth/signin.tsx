import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonSosmed from '@/components/ButtonSosmed'
import tw from 'twrnc'
import ButtonPrimary from '@/components/ButtonPrimary'
import {useRouter} from "expo-router";

const Signin = () => {

    const navigation = useRouter();

    return (
        <SafeAreaView style={tw`p-4 bg-[#1e1e1e] h-full w-full`}>
            <View style={tw`p-4 bg-[#1e1e1e] h-full w-full mt-35`}>
                <Image source={require('@/assets/images/techxperience.png')} style={tw`w-40 h-10`}></Image>
                <View style={tw`py-4 w-full`}>
                    <TextInput
                        placeholder='Masukkan Email'
                        style={tw`border border-gray-300 rounded-lg p-3 w-full mb-4 text-white`}
                        placeholderTextColor="#fff"
                    />
                    <TextInput
                        placeholder='Masukkan Password'
                        secureTextEntry
                        style={tw`border border-gray-300 rounded-lg p-3 w-full mt-2 text-white`}
                        placeholderTextColor="#fff"
                    />
                    <View style={tw`flex-row items-center mb-4 mt-4`}>
                        <TouchableOpacity style={tw`flex-row items-center`}>
                            <View style={tw`w-5 h-5 border border-white rounded mr-2`} />
                            <Text style={tw`text-white`}>Ingat saya</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`ml-auto`}>
                            <Text style={tw`text-blue-500`}>Lupa Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={tw`my-6`}>
                    <ButtonPrimary title='Masuk' warnaBtn='[#4285f4]' route={() => navigation.push('/(tabs)/home')} warnaText='[#fff]'/>
                </View>
                <View style={tw`mb-6 flex-row justify-center`}>
                    <Text style={tw`text-white`}>Belum Punya Akun?</Text><Text style={tw`text-[#4285f4]`}> Daftar dulu!</Text>
                </View>

                <Text style={tw`text-center text-white mb-4`}> Atau mau masuk melalui?</Text>

                <View style={tw`border-b border-neutral-600 mb-4`}/>

                <ButtonSosmed />

            </View>
        </SafeAreaView>
    )
}

export default Signin