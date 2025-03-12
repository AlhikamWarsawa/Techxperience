import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { useFocusEffect } from "@react-navigation/native";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

const ReelItem = ({ videoId, title }: { videoId: string; title: string }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [likeCount, setLikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const likeScale = useSharedValue(1);

    const animatedLikeStyle = useAnimatedStyle(() => ({
        transform: [{ scale: likeScale.value }],
    }));

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));

        likeScale.value = withSpring(1.5, { damping: 2 }, () => {
            likeScale.value = withSpring(1);
        });
    };

    const handleComment = () => {
        alert("Buka komentar!");
    };

    const handleShare = () => {
        alert("Bagikan video!");
    };

    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&loop=1&playlist=${videoId}`;

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

            <View style={tw`absolute bottom-12 right-5 items-center mb-12`}>
                <TouchableOpacity onPress={handleLike} style={tw`mb-4 items-center`}>
                    <Animated.View style={animatedLikeStyle}>
                        <FontAwesome name={isLiked ? "heart" : "heart-o"} size={30} color="white" />
                    </Animated.View>
                    <Text style={tw`text-white text-sm mt-1`}>{likeCount}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleComment} style={tw`mb-4 items-center`}>
                    <FontAwesome name="comment-o" size={30} color="white" />
                    <Text style={tw`text-white text-sm mt-1`}>Comment</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleShare} style={tw`items-center`}>
                    <FontAwesome name="share" size={30} color="white" />
                    <Text style={tw`text-white text-sm mt-1`}>Share</Text>
                </TouchableOpacity>
            </View>

            <View style={tw`absolute bottom-12 left-5 mb-12`}>
                <Text style={tw`text-white text-lg font-bold`}>{title}</Text>
            </View>
        </View>
    );
};

export default ReelItem;