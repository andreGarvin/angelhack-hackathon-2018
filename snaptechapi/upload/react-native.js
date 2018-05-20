import snaptechAPI from '../index';


import RNFetchBlob from 'react-native-fetch-blob';

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs

class upload extends snaptechAPI {

    async upload(sessionId, photo) {
        const imageRef = this.firebase.storage().ref(photo.type === 'jpg' ? 'images' : 'video').child('image_001')
        fs.readFile(uploadUri, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` })
            })
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                resolve(url)
            })
            .catch((error) => {
                reject(error)
            })
        this.send(sessionId, {
            message: firebasePhotoUrl,
            timestamp: Date(),
            type: 'image',
            username,
        })
    }
    async uploadVideo(sessionId, username, video) {
        this.send(sessionId, {
            message: firebasePhotoUrl,
            timestamp: Date(),
            type: 'video',
            username,
        })
    }
}

export default new upload