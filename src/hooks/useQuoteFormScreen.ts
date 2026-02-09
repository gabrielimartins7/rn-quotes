import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'QuoteForm'>;

export function useQuoteFormScreen() {
  const navigation = useNavigation<NavigationProp>();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return { onBack };
}
