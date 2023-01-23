import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, useFonts } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { Loading } from './src/components/Loading';
import './src/lib/dayjs';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoading] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if (!fontsLoading) {
    return <Loading />
  }

  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}
