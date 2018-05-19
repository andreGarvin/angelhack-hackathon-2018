import snaptechAPI from '../index';

import RNFetchBlob from 'react-native-fetch-blob';

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs

class upload extends snaptechAPI {

    uploadPhoto(sessionId, username, photo) {

        this.send(sessionId, {
            message: firebasePhotoUrl,
            timestamp: Date(),
            type: 'image',
            username,
        })
    }
    uploadVideo(sessionId, username, video) {
        this.send(sessionId, {
            message: firebasePhotoUrl,
            timestamp: Date(),
            type: 'video',
            username,
        })
    }
}