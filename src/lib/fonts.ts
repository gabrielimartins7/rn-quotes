import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
export function useAppFonts() {
  const [loaded] = useFonts({ Lato_400Regular, Lato_700Bold });
  return loaded;
}
