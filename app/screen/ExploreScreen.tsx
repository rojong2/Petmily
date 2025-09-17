import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { headerStyles, homeScreenStyles } from "../styles/HomeScreenStyles";

const ExploreScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const exploreCategories = [
    {
      id: 1,
      title: "근처 산책로",
      emoji: "🌳",
      description: "주변 산책 코스 찾기",
    },
    {
      id: 2,
      title: "반려동물 카페",
      emoji: "☕",
      description: "펫 프렌들리 카페",
    },
    { id: 3, title: "동물병원", emoji: "🏥", description: "근처 병원 찾기" },
    {
      id: 4,
      title: "펜션 & 호텔",
      emoji: "🏨",
      description: "반려동물과 숙박",
    },
    { id: 5, title: "커뮤니티", emoji: "👥", description: "반려인들과 소통" },
    { id: 6, title: "이벤트", emoji: "🎉", description: "펫 관련 행사" },
  ];

  return (
    <SafeAreaView style={homeScreenStyles.root}>
      <View
        style={[
          headerStyles.header,
          { backgroundColor: "rgba(255, 255, 255, 0.95)" },
        ]}>
        <Text style={headerStyles.logo}>🔍 Explore</Text>
        <View style={headerStyles.headerRight}>
          <View style={headerStyles.searchBar}>
            <Text style={headerStyles.searchIcon}>🔍</Text>
            <TextInput
              style={headerStyles.searchInput}
              placeholder="장소나 서비스 검색"
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={setSearchQuery}
              returnKeyType="search"
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={homeScreenStyles.scrollContent}>
        <View style={homeScreenStyles.section}>
          <Text style={homeScreenStyles.sectionTitle}>탐색하기</Text>
          <Text style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
            반려동물과 함께할 수 있는 다양한 장소와 서비스를 찾아보세요
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 15,
            }}>
            {exploreCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={{
                  width: "48%",
                  backgroundColor: "white",
                  borderRadius: 15,
                  padding: 20,
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                  marginBottom: 15,
                }}
                onPress={() => console.log(`Selected: ${category.title}`)}>
                <Text style={{ fontSize: 32, marginBottom: 8 }}>
                  {category.emoji}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: 4,
                  }}>
                  {category.title}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#666",
                    textAlign: "center",
                  }}>
                  {category.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={homeScreenStyles.section}>
          <Text style={homeScreenStyles.sectionTitle}>인기 장소</Text>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 15,
              padding: 20,
              marginBottom: 20,
            }}>
            <Text style={{ fontSize: 16, color: "#333", textAlign: "center" }}>
              🚧 준비 중입니다
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#666",
                textAlign: "center",
                marginTop: 8,
              }}>
              곧 다양한 인기 장소들을 만나보실 수 있습니다
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;
