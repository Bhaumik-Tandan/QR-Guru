import * as MediaLibrary from 'expo-media-library';

async function saveToGallery(uri) {
  try {
    // Create an asset from the local file URI
    const asset = await MediaLibrary.createAssetAsync(uri);

    // Replace 'YourAlbumName' with the desired album name
    const albumName = 'QR Generator';
    
    // Check if the album already exists
    const album = await MediaLibrary.getAlbumAsync(albumName);

    if (album === null) {
      // Album doesn't exist, create it first
      await MediaLibrary.createAlbumAsync(albumName, asset, false);
    } else {
      // Album already exists, add the asset to it
      await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
    }

    console.log('Image saved to gallery successfully!');
  } catch (error) {
    console.error('Error saving image to gallery:', error);
  }
}

export default saveToGallery;