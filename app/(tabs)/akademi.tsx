import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Floating from "@/components/Floating";
import tw from 'twrnc';
import {SafeAreaView} from "react-native-safe-area-context";

const Akademi = () => {
    return (
        <SafeAreaView style={tw`p-4 bg-[#1e1e1e] flex-1`}>
            <ScrollView>
        <View style={tw`mb-4 px-4`}>
            <View style={tw`flex-row justify-between items-center mb-5 mt-8`}>
                <View style={tw`flex-row items-center gap-2`}>
                    <Ionicons name="book-outline" size={24} color="white" />
                    <Text style={tw`text-white text-xl font-bold`}>Akademi</Text>
                </View>
            </View>

            <View style={tw`flex-row flex-wrap justify-between gap-4`}>
                {[
                    require('@/assets/images/dkv.jpg'),
                    require('@/assets/images/tkj.jpg'),
                    require('@/assets/images/jaringan.jpg'),
                    require('@/assets/images/rpl.png'),
                    require('@/assets/images/dkv.jpg'),
                    require('@/assets/images/tkj.jpg'),
                    require('@/assets/images/jaringan.jpg'),
                    require('@/assets/images/rpl.png')
                ].map((img, index) => (
                    <View key={index} style={tw`w-[38%]`}>
                        <Floating
                            title="Modul Akademi"
                            img={img}
                            deskripsi="Belajar dari dasar sampai mahir"
                            icon="play"
                            route="details"
                        />
                    </View>
                ))}
            </View>
        </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Akademi;
