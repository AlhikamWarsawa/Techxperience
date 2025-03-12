import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import ButtonPrimary from "@/components/ButtonPrimary";
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

const detail = () => {
    const tabs = [
        { title: 'Fundamental for Frontend Dev', duration: '30 Minutes' },
        { title: 'Crafting the Perfect Web With HTML CSS', duration: '1 hour 20 Minutes' },
        { title: 'Using Rust for Interaction Website', duration: '45 Minutes' },
        { title: 'Using Framework for build website SPAs', duration: '1 hour 3 Minutes' },
    ];
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-[#1e1e1e] flex-1`}>
            <ScrollView>
                <View style={tw`flex-row justify-between py-4 px-6`}>
                    <AntDesign name="arrowleft" size={24} color="white"/>
                    <Text style={tw`text-white text-lg font-semibold`}>Details</Text>
                    <Text style={tw`text-white`}></Text>
                </View>
                <WebView
                    source={{ uri: "https://www.youtube.com/embed/aXvqdENtQLI" }}
                    style={tw`w-full h-60`}
                    allowsFullscreenVideo
                />
                <View style={tw`w-full p-4 px-6`}>
                    <Text style={tw`text-white text-xl font-semibold`}>
                        Mahir jadi Frontend
                    </Text>
                    <Text style={tw`text-white text-base mt-2 leading-5`}>
                        Bergabung dengan kelas mahir menjadi frontend dev, maka
                        kamu sudah mendapatkan fundamental menjadi seorang
                        programmer. Pada kelas ini kamu akan mendalami itu.
                    </Text>
                    <View style={tw`w-2/3 flex-row justify-between items-center mt-4`}>
                        <AntDesign name="star" size={20} color="yellow"/>
                        <Text style={tw`text-sm text-gray-400`}>
                            4.5 (823)</Text>
                        <Text style={tw`text-sm text-gray-400`}>4 Module</Text>
                        <Text style={tw`text-sm text-gray-400`}>Programmer</Text>
                    </View>
                    <View style={tw`mt-6 mb-4 w-full gap-y-4 bg-gray-800 rounded-2xl p-6`}>
                        {tabs.map((item, index) => (
                            <View key={index} style={tw`flex-row gap-5 items-center`}>
                                <View style={tw`rounded-2xl h-12 w-12 bg-gray-700`}></View>
                                <View>
                                    <Text style={tw`text-white`}>{item.title}</Text>
                                    <Text style={tw`mt-1 text-gray-400`}>{item.duration}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    <ButtonPrimary
                        title="Ikut Kelas"
                        warnaText="white"
                        warnaBtn="[#4285f4]"
                        route={() => false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default detail;
