import { Platform } from 'react-native';

export default {
  default: Platform.OS === 'ios' ? 'BeVietnamPro-Regular' : 'Be Vietnam',
  regular: Platform.OS === 'ios' ? 'BeVietnamPro-Regular' : 'Be Vietnam',
  bold: Platform.OS === 'ios' ? 'BeVietnamPro-Bold' : 'Be Vietnam',
  semibold: Platform.OS === 'ios' ? 'BeVietnamPro-SemiBold' : 'Be Vietnam',
};
