import { Stack } from 'expo-router';

export default function MainLayoult(){
  return(
    <Stack>
      <Stack.Screen
      name='index'
      options={{headerShown: false}}
      />
      <Stack.Screen
      name='(auth)/singup/page'
      options={{headerShown: false}}
      />
      <Stack.Screen
      name='(panel)/profile/page'
      options={{headerShown: false}}
      />
    </Stack>
  )
}