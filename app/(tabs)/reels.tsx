import React from "react";
import { View, FlatList } from "react-native";
import ReelItem from "@/components/ReelItem";
import tw from "twrnc";

const reelsData = [{ id: "1", videoId: "aXvqdENtQLI", title: "Reels 1" }];

const Reels = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <FlatList
        data={reelsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReelItem videoId={item.videoId} title={item.title} />
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Reels;
