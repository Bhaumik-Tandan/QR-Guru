import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-root-toast';

const copyToClipBoard = (text, message) => {
    Clipboard.setString(text);
    Toast.show(message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM
    });
};

export default copyToClipBoard;
