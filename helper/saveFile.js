import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
const saveFile = async (uri, filename, mimetype) => {
    if (Platform.OS === 'android') {
        const permissions =
            await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
        if (permissions.granted) {
            const base64 = await FileSystem.readAsStringAsync(uri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            await FileSystem.StorageAccessFramework.createFileAsync(
                permissions.directoryUri,
                filename,
                mimetype,
            )
                .then(async (uri) => {
                    await FileSystem.writeAsStringAsync(uri, base64, {
                        encoding: FileSystem.EncodingType.Base64,
                    });
                })
                .catch((e) => console.log(e));
        } else {
            Sharing.shareAsync(uri);
        }
    } else {
        Sharing.shareAsync(uri);
    }
};

export default saveFile;