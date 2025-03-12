import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { useFocusEffect } from "@react-navigation/native";
import tw from "twrnc";

const { height, width } = Dimensions.get("window");

const ReelItem = ({ videoId, title }: { videoId: string; title: string }) => {
    const [isVisible, setIsVisible] = useState(true);
    const embedUrl = `https://www.tiktok.com`;

    useFocusEffect(
        React.useCallback(() => {
            setIsVisible(true);
            return () => {
                setIsVisible(false);
            };
        }, [])
    );

    return (
        <View style={[tw`relative`, { height, width }]}>
            {isVisible && (
                <WebView
                    source={{ uri: embedUrl }}
                    style={{ height, width }}
                    allowsInlineMediaPlayback
                    javaScriptEnabled
                />
            )}

            <View style={tw`absolute bottom-12 left-5`}>
                <Text style={tw`text-white text-lg font-bold`}>{title}</Text>
            </View>
        </View>
    );
};

export default ReelItem;