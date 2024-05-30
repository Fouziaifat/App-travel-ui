import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayoutNav = () => {
  return (
   <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown: false}} />
   </Stack>
  )
}

export default RootLayoutNav;