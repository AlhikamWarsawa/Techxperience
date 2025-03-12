import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Access from '@/components/Access';
import Plan from '@/components/Plan';
import ButtonPrimary from '@/components/ButtonPrimary';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Membership() {
    const access = [
        { image: require('@/assets/images/dkv.jpg'), text: 'Akses ke Semua Modul Pembelajaran' },
        { image: require('@/assets/images/dkv.jpg'), text: 'Jalur yang dirancang oleh mentor' },
        { image: require('@/assets/images/dkv.jpg'), text: 'Mentoring Sebulan 4x Pertemuan' },
        { image: require('@/assets/images/dkv.jpg'), text: 'Mendapatkan Sertifikat dan Lainnya' },
    ];

    const plan = [
        { range: '12 Bulan', price: '599.000,00', pricePer: '12.475,00', image: require('@/assets/images/dkv.jpg') },
        { range: '4 Bulan', price: '260.000,00', pricePer: '16.250,00', image: require('@/assets/images/dkv.jpg') },
        { range: '1 Bulan', price: '85.000,00', pricePer: '21.250,00', image: require('@/assets/images/dkv.jpg') },
    ];

    return (
        <SafeAreaView style={tw`bg-[#1e1e1e] flex-1`}>
            <ScrollView>
                <View style={tw`p-6 pt-8`}>
                    <TouchableOpacity style={tw`self-end p-2 rounded-full bg-[#1e1e1e]`}>
                        <Ionicons name="close" size={20} color="white" />
                    </TouchableOpacity>
                    <Text style={tw`text-center text-white font-bold text-2xl mt-2`}>
                        Start Your 7-Free Trial Today!
                    </Text>
                    <Text style={tw`text-center text-gray-400 text-sm mt-1`}>
                        Buka Fitur Eksklusif dengan Techxperience Membership
                    </Text>
                </View>
                <View style={tw`bg-[#DDD] rounded-t-3xl px-6 py-8 mt-10`}>
                    <Text style={tw`text-lg text-center font-semibold`}>Kamu Akan Mendapatkan:</Text>
                    <View style={tw`mt-6 space-y-6`}>
                        {access.map((item, index) => (
                            <Access key={index} text={item.text} image={item.image} />
                        ))}
                    </View>
                    <View style={tw`mt-10 space-y-4 mb-6`}>
                        <View
                            style={tw`absolute top-0 right-0 px-2 py-1 bg-[#4285f4] rounded-lg z-10`}
                        >
                            <Text style={tw`text-xs text-white font-medium`}>Diskon 42%</Text>
                        </View>
                        {plan.map((item, index) => (
                            <Plan
                                key={index}
                                range={item.range}
                                price={item.price}
                                pricePer={item.pricePer}
                            />
                        ))}
                    </View>
                    <ButtonPrimary warnaBtn="[#4285f4]" title="Ikut Kelas" warnaText="white" route={() => false} />
                    <View style={tw`flex-row justify-center space-x-4 mt-3 mb-10`}>
                        <Text style={tw`text-sm`}>Syarat & Ketentuan   </Text>
                        <Text style={tw`text-sm`}>Kebijakan Privasi</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}