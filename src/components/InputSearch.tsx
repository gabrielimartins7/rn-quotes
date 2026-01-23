import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { translate } from 'i18n';
import { theme } from 'theme';

type InputSearchProps = {
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export default function InputSearch({ icon }: InputSearchProps) {
  return (
    <View style={styles.container}>
      {icon ? (
        <MaterialIcons name={icon} size={20} color={theme.colors.gray[400]} />
      ) : null}

      <TextInput
        style={styles.input}
        placeholder={translate('common.search')}
        placeholderTextColor={theme.colors.gray[400]}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="search"
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 48,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: theme.spacing.radius.md,
    borderColor: theme.colors.gray[300],
    paddingVertical: 12,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.gray[100],
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing.sm,
    fontSize: theme.typography.title.md.size,
    flex: 1,
    height: '100%',
    paddingVertical: 0,
    color: theme.colors.gray[700],
    textAlignVertical: 'center',
  },
});
