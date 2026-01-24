import React from 'react';
import { Modal, Pressable, View, StyleSheet, Animated, ViewStyle } from 'react-native';
import { theme } from '../theme';

type BottomSheetProps = {
  visible: boolean;
  onClose: () => void;
  height: number;
  sheetStyle?: ViewStyle;
  children: React.ReactNode;
};

export default function BottomSheet({
  visible,
  onClose,
  height,
  sheetStyle,
  children,
}: BottomSheetProps) {
  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <Animated.View style={[styles.sheet, { height }, sheetStyle]}>
          <View style={styles.handle} />
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end' },
  backdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.35)' },

  sheet: {
    backgroundColor: theme.colors.gray[100],
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.lg,
  },

  handle: {
    width: 44,
    height: 4,
    borderRadius: 999,
    backgroundColor: theme.colors.gray[300],
    alignSelf: 'center',
    marginBottom: theme.spacing.md,
  },
});
