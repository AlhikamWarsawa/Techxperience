import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import TopNews from '@/components/TopNews';
import BottomNews from '@/components/BottomNews';

export default function NewsScreen() {
    const [search, setSearch] = useState('');

    const topNews = [
        { title: 'India Sebar Developernya Keseluruh Dunia, Dengan Bayaran Murah', time: '23 Februari 2025' },
        { title: 'India Sebar Developernya Keseluruh Dunia, Dengan Bayaran Murah', time: '23 Februari 2025' },
        { title: 'India Sebar Developernya Keseluruh Dunia, Dengan Bayaran Murah', time: '23 Februari 2025' },
    ];

    const bottomNews = [
        { title: 'Inggris, Sebar Developernya Keseluruh Dunia, Dengan Bayaran Murah', time: '30 Maret 2045' },
        { title: 'Inggris, Sebar Developernya Keseluruh Dunia, Dengan Bayaran Murah', time: '5 Agustus 2045' },
        { title: 'Inggris, Sebar Developernya Keseluruh Dunia, Dengan Bayaran Murah', time: '18 November 2045' },
    ];

    return (
        <SafeAreaView style={tw`flex-1 bg-[#1e1e1e]`}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={tw`px-6 py-4`}>
                    <Text style={tw`text-3xl font-bold text-white`}>News</Text>

                    <View style={tw`mt-6 bg-[#1a1a1a] rounded-xl p-3 flex-row items-center`}>
                        <TextInput
                            value={search}
                            onChangeText={setSearch}
                            placeholder="Mau Cari berita Apa Hari Ini?"
                            placeholderTextColor="#7a7a7a"
                            style={tw`text-white flex-1`}
                        />
                        {search.length > 0 && (
                            <TouchableOpacity onPress={() => setSearch('')}>
                                <Text style={tw`text-red-500`}>✖</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-6`}>
                        <View style={tw`flex-row gap-4`}>
                            {topNews.map((news, index) => (
                                <TopNews key={index} title={news.title} time={news.time} />
                            ))}
                        </View>
                    </ScrollView>

                    <View style={tw`mt-8 mb-10`}>
                        {bottomNews.map((news, index) => (
                            <BottomNews key={index} title={news.title} time={news.time} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
