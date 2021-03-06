import React, { useState } from "react";
import { Switch, Text, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessageScreen from "./app/screens/MessageScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return <ListingEditScreen />;
}
