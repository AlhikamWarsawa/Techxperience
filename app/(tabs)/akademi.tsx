import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import Akademi from '@/components/Akademi'
import { Ionicons } from '@expo/vector-icons'
const akademi = () => {
    return (
        <SafeAreaView style={tw`p-4 bg-[#1e1e1e] flex-1`}>
            <ScrollView>
                <View style={tw`flex-row justify-between items-center mt-8`}>
                    <View style={tw`flex-row items-center gap-2`}>
                        <Ionicons name="book-outline" size={24} color="white" />
                        <Text style={tw`text-white text-xl font-bold`}> Akademi</Text>
                    </View>
                </View>
                <View style={tw`pt-2 gap-2 mb-12`}>
                    <Akademi img={require('@/assets/images/dkv.jpg')} jurusan='Keuangan Bisnis' title='Introduction of Financial Statement' desc='4 Module' rating='⭐ 4.5 (1000)' harga='Free' warna='#d2aaae' />
                    <Akademi img={require('@/assets/images/dkv.jpg')} jurusan='Investasi Usaha' title='Introduction of Venture Capital' desc='4 Module' rating='⭐ 4.5 (823)' harga='Pro' warna='#ffcc00' />
                    <Akademi img={require('@/assets/images/dkv.jpg')} jurusan='Branding' title='Importance of Branding' desc='5 Module' rating='⭐ 4.5 (26783)' harga='Pro' warna='#ffcc00' />
                    <Akademi img={require('@/assets/images/dkv.jpg')} jurusan='Marketing' title='How to Use Sales Promotion' desc='5 Module' rating='⭐ 4.5 (351)' harga='Pro' warna='#ffcc00'/>
                    <Akademi img={require('@/assets/images/dkv.jpg')} jurusan='Keuangan Bisnis' title='Introduction of Financial Statement II' desc='4 7892' rating='⭐ 4.5 (7892)' harga='Pro' warna='#ffcc00'/>
                    <Akademi img={require('@/assets/images/dkv.jpg')} jurusan='Keuangan Pribadi' title='Personal Finance Management' desc='4 Module' rating='⭐ 4.5 (254)' harga='Pro' warna='#ffcc00'/>
                </View>
            </ScrollView>
        </SafeAreaView>  )
}

export default akademi