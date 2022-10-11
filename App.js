import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from './app/routes/AppNavigator'
//const AuthContext = React.createContext();

export default function App() {

  return (
    // <AuthContext.Provider value={{ user, setUser }}>
      // <NavigationContainer>
        <AppNavigator />
      // </NavigationContainer>
      // </AuthContext.Provider>
  );
}