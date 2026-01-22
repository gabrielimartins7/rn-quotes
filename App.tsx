import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAppFonts } from './src/lib/fonts';
import AppNavigator from './src/app/AppNavigator';

export default function App() {
  const ready = useAppFonts();
  if (!ready) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
