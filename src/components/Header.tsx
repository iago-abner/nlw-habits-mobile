import { Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'
import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <View className='w-full flex-row items-center justify-between bg-background'>
      <Logo />

      <TouchableOpacity activeOpacity={0.7} className='flex-row items-center h-11 px-4 border-2 rounded-lg border-violet-500'>
        <Feather name='plus' color={colors.violet[500]} size={20} />
        <Text className='ml-2 text-white text-base font-semibold'> Novo </Text>
      </TouchableOpacity>

    </View>
  )
}