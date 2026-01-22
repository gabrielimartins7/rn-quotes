import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../components/Header';
import InputSearch from 'components/InputSearch';

import { theme } from '../theme';
import { translate } from 'i18n';

export default function QuotesListScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {
      paddingTop: insets.top + theme.spacing.md,
      paddingBottom: insets.bottom + theme.spacing.md,
    }]}>
      <Header
        title={translate('common.budget')}
        description={translate('common.sketch')}
        onPress={() =>{}}
      />
      <InputSearch icon="search" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
  },
});