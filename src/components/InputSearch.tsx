import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { translate } from "i18n";
import { colors } from "theme/colors";
import { spacing } from "theme/spacing";
import { typography } from "theme/typography";

type InputSearchProps = {
    icon?: keyof typeof MaterialIcons.glyphMap;
};

export default function InputSearch({ icon }: InputSearchProps) {
    return (
        <View style={styles.container}>
            <MaterialIcons name={icon} size={20} color={colors.gray[500]} />
            <Text style={styles.text}>{translate('common.search')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: colors.gray[400],
        paddingVertical: 12,
        paddingHorizontal: spacing.md,
        marginTop: spacing.lg,
    },
    text: {
        marginLeft: spacing.sm,
        fontSize: typography.title.md.size,
        color: colors.gray[500],
    }
});