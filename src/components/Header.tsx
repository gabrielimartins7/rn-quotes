import { StyleSheet, Text, View } from 'react-native';

import Button from './Button';

import { theme } from 'theme';

import { translate } from 'i18n';

type HeaderProps = {
  title: string;
  description: string;
  onPress: () => void;
};

export default function Header({ title, description, onPress }: HeaderProps) {
  return (
    <>
        <View style={styles.container}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            </View>

            <Button icon="add" title={translate('common.new')} onPress={onPress} />
        </View>
        <View style={styles.divider} />
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
    },
    textContainer: {
        gap: theme.spacing.gap.xs,
    },
    title: {
        color: theme.colors.purple.base,
        fontSize: theme.typography.title.lg.size,
        fontWeight: theme.typography.title.lg.weight,
    },
    description: {
        fontSize: theme.typography.text.sm.size,
        fontWeight: theme.typography.text.sm.weight,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray[300], 
    }
});
