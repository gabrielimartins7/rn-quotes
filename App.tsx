import { StatusBar } from 'expo-status-bar';
import { useAppFonts } from './src/lib/fonts';
import AppNavigator from './src/app/AppNavigator';

export default function App() {
  const ready = useAppFonts();
  if (!ready) return null;
  return (
    <>
      <StatusBar style="dark" />
      <AppNavigator />
    </>
  );
}
