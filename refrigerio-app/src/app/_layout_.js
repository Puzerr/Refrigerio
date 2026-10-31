import { Tabs } from "expo-router";
import { Ionicons } from "@react-native-vector-icons/ionicons";

const tabBar =
  (name) =>
  ({ color, size }) => {
    <Ionicons name={name} color={color} size={size} />;
  };

function BottomTabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarLabel: "inicio",
          tabBarIcon: tabBar('home')
        }}
      />
    </Tabs>
  );
}

export default BottomTabsLayout;
