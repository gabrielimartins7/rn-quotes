import { StyleSheet, Text, View } from 'react-native';

import Button from './Button';

import { colors } from 'theme/colors';
import { typography } from 'theme/typography';
import { spacing } from 'theme/spacing';

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
        gap: spacing.gap.xs,
    },
    title: {
        color: colors.purple.base,
        fontSize: typography.title.lg.size,
        fontWeight: typography.title.lg.weight,
    },
    description: {
        fontSize: typography.text.sm.size,
        fontWeight: typography.text.sm.weight,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[400], 
    }
});
