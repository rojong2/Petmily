import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../index";
import { headerStyles, homeScreenStyles } from "../styles/HomeScreenStyles";

type SettingsScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const [pushNotifications, setPushNotifications] = useState(true);
  const [locationServices, setLocationServices] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  const settingSections = [
    {
      title: "계정 설정",
      items: [
        {
          title: "프로필 편집",
          icon: "👤",
          action: () => console.log("프로필 편집"),
        },
        {
          title: "반려동물 정보",
          icon: "🐕",
          action: () => console.log("반려동물 정보"),
        },
        {
          title: "비밀번호 변경",
          icon: "🔒",
          action: () => console.log("비밀번호 변경"),
        },
      ],
    },
    {
      title: "알림 설정",
      items: [
        {
          title: "푸시 알림",
          icon: "🔔",
          hasSwitch: true,
          value: pushNotifications,
          onToggle: setPushNotifications,
        },
        {
          title: "마케팅 수신",
          icon: "📧",
          hasSwitch: true,
          value: marketingEmails,
          onToggle: setMarketingEmails,
        },
      ],
    },
    {
      title: "개인정보 및 보안",
      items: [
        {
          title: "위치 서비스",
          icon: "📍",
          hasSwitch: true,
          value: locationServices,
          onToggle: setLocationServices,
        },
        {
          title: "개인정보 처리방침",
          icon: "📋",
          action: () => console.log("개인정보 처리방침"),
        },
        {
          title: "이용약관",
          icon: "📝",
          action: () => console.log("이용약관"),
        },
      ],
    },
    {
      title: "지원",
      items: [
        {
          title: "고객센터",
          icon: "💬",
          action: () => console.log("고객센터"),
        },
        { title: "FAQ", icon: "❓", action: () => console.log("FAQ") },
        { title: "앱 정보", icon: "ℹ️", action: () => console.log("앱 정보") },
      ],
    },
  ];

  const handleLogout = () => {
    Alert.alert("로그아웃", "정말 로그아웃하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "로그아웃",
        style: "destructive",
        onPress: () => {
          navigation.navigate("Login");
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={homeScreenStyles.root}>
      <View
        style={[
          headerStyles.header,
          { backgroundColor: "rgba(255, 255, 255, 0.95)" },
        ]}>
        <Text style={headerStyles.logo}>⚙️ Settings</Text>
      </View>

      <ScrollView contentContainerStyle={homeScreenStyles.scrollContent}>
        {settingSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={homeScreenStyles.section}>
            <Text style={homeScreenStyles.sectionTitle}>{section.title}</Text>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 15,
                marginBottom: 20,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
              }}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 16,
                    borderBottomWidth:
                      itemIndex < section.items.length - 1 ? 1 : 0,
                    borderBottomColor: "#f0f0f0",
                  }}
                  onPress={item.action}
                  disabled={item.hasSwitch}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                    }}>
                    <Text style={{ fontSize: 20, marginRight: 12 }}>
                      {item.icon}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#333",
                        fontWeight: "500",
                      }}>
                      {item.title}
                    </Text>
                  </View>

                  {item.hasSwitch ? (
                    <Switch
                      value={item.value}
                      onValueChange={item.onToggle}
                      trackColor={{ false: "#ccc", true: "#4CAF50" }}
                      thumbColor={item.value ? "#fff" : "#fff"}
                    />
                  ) : (
                    <Text style={{ fontSize: 16, color: "#999" }}>&gt;</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* 로그아웃 버튼 */}
        <View style={homeScreenStyles.section}>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF6B6B",
              borderRadius: 12,
              padding: 16,
              alignItems: "center",
              marginBottom: 20,
            }}
            onPress={handleLogout}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
              }}>
              로그아웃
            </Text>
          </TouchableOpacity>
        </View>

        {/* 앱 버전 정보 */}
        <View style={{ alignItems: "center", marginBottom: 40 }}>
          <Text style={{ fontSize: 12, color: "#999" }}>Petmily v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
