import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from "theme";

type FilterProps = {
    onPress?: () => void;
};

export default function Filter({ onPress }: FilterProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialIcons name="tune" size={24} color={theme.colors.purple.base} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.gray[300],
        backgroundColor: theme.colors.gray[100],
        borderRadius: theme.spacing.radius.rounded,
        padding: theme.spacing.unit,
    }
});