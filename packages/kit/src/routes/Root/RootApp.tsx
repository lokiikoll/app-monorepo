import { useEffect } from 'react';

import { Stack } from 'expo-router';
import { useIntl } from 'react-intl';
import { Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';

export const RootApp = () => {
  const intl = useIntl();
  useEffect(() => {
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
      KeyboardManager.setEnableDebugging(false);
      KeyboardManager.setKeyboardDistanceFromTextField(10);
      KeyboardManager.setLayoutIfNeededOnUpdate(true);
      KeyboardManager.setEnableAutoToolbar(true);
      KeyboardManager.setToolbarDoneBarButtonItemText(
        intl.formatMessage({ id: 'action__done' }),
      );
      KeyboardManager.setToolbarPreviousNextButtonEnable(false);
      KeyboardManager.setKeyboardAppearance('default');
      KeyboardManager.setShouldPlayInputClicks(true);
    }
  }, [intl]);

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default RootApp;
