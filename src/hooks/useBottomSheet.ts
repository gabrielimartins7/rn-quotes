import { useCallback, useMemo, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

type UseBottomSheetParams = {
  height: number;
};

export function useBottomSheet({ height }: UseBottomSheetParams) {
  const translateY = useRef(new Animated.Value(height)).current;
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => {
    setVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  const close = useCallback(() => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 180,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) setVisible(false);
    });
  }, [height, translateY]);

  const sheetAnimatedStyle = useMemo(
    () => ({ transform: [{ translateY }] }),
    [translateY]
  );

  return {
    visible,
    open,
    close,
    sheetAnimatedStyle,
  };
}
