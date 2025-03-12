import React from "react";
import { View, Text, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import tw from "twrnc";

const { height, width } = Dimensions.get("window");

const ReelItem = ({ videoId, title }: { videoId: string; title: string }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playsinline=1`;

    return (
        <View style={[tw`relative`, { height, width }]}>
            <WebView
                source={{ uri: embedUrl }}
                style={{ height, width }}
                allowsInlineMediaPlayback
                javaScriptEnabled
            />

            <View style={tw`absolute bottom-12 left-5`}>
                <Text style={tw`text-white text-lg font-bold`}>{title}</Text>
            </View>
        </View>
    );
};

export default ReelItem;
