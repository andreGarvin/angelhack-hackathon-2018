const snaptechAPI = require('../index')

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