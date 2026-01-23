import { View, Text, StyleSheet } from "react-native";
import StatusBadge from "./StatusBadge";

import { QuoteStatus } from '../types/quote';
import { theme } from "theme";

type CardProps = {
  title?: string;
  description?: string;
  status?: QuoteStatus;
  amount?: string;
};

export default function Card({ title, description, status, amount }: CardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>

            <View style={styles.contentStatus}>
                {status ? <StatusBadge status={status} /> : null}
                <Text style={styles.amount}>{amount}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray[100],
        borderWidth: 1,
        borderColor: theme.colors.gray[300],
        borderRadius: theme.spacing.radius.sm,
        flexDirection: 'row',
        padding: theme.spacing.md,
        justifyContent: 'space-between',
    },
    content:{
        gap: theme.spacing.gap.sm,
        marginTop: theme.spacing.margin.sm
    },
    title: {
        fontSize: theme.typography.title.md.size,
        fontWeight: theme.typography.title.md.weight,
    },
    description: {
        fontSize: theme.typography.text.sm.size,
        fontWeight: theme.typography.text.sm.weight,
        color: theme.colors.gray[600],
    },
    contentStatus: {
        gap: theme.spacing.xl
    },
    amount: {
        fontSize: theme.typography.title.md.size,
        fontWeight: theme.typography.title.md.weight,
    },
});