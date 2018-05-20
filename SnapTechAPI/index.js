const firebase = require('firebase')
const uuid = require('uuid')

class SnaptechAPI {
    constructor() {
        this.firebase = firebase.initializeApp({
            apiKey: "AIzaSyCKw_XMEYF8d8TEvmONTWu4zCZmmveJulU",
            authDomain: "snaptech-91b08.firebaseapp.com",
            databaseURL: "https://snaptech-91b08.firebaseio.com",
            projectId: "snaptech-91b08",
            storageBucket: "snaptech-91b08.appspot.com",
            messagingSenderId: "158948839723"
        })
    }
    async createSession(username) {
        const sessionId = uuid()
        const firebaseUrl = `/sessions/${sessionId}`
        this.firebase.database().ref(firebaseUrl).set({
            sessionId,
            username,
            companyName: '',
            inittime: Date(),
            activity: 'pending'
        })
    }
    async send(sessionId, message) {
        const firebaseUrl = `/sessions/${sessionId}/messages`
        message =  {
            timestamp: Date(),
            ...message,
            uuid: uuid()
        }

        if (message.technician) {
            await this.upadateSession(sessionId, 'active')
        }
        return await this.firebase.database().ref(firebaseUrl).push(message)   
    }
    on(sessionId) {
        return new Promise(resolve => {
            const firebaseUrl = `/sessions/${sessionId}/messages`
            this.firebase.database().ref(firebaseUrl).on('value', message => {
                message = Object.values(message.val())
                return resolve(message)
            })
        })
    }
    getSession() {
        return new Promise(resolve => {
            const firebaseUrl = `/sessions/${sessionId}`
            this.firebase.database().ref(firebaseUrl).on('value', session => {
                session = Object.values(session.val())
                return resolve(session)
            })
        })
    }
    sessions(type, name) {
        return new Promise(resolve => {
            this.firebase.database().ref('/sessions').on('value', sessions => {
                let sessions = Object.values(sessions.val())
                    .filter(i => {
                        if (type === 'company') {
                            return i.companyName === name
                        } else if (type === 'user') {
                            return i.username === name
                        }
                    })
                return resolve(sessions)
            })
        })
    }
    async upadateSession(sessionId, activity) {
        const firebaseUrl = `/sessions/${sessionId}`
        await this.firebase.database().ref(firebaseUrl).set({
            activity,
        })
    }
    getCompanies(){
        return new Promise(resolve => {
            this.firebase.database().ref('/companies').on('value', company => {
                company = Object.values(company.val())
                return resolve(company)
            })
        })
    }
}

module.exports = new SnaptechAPI

// snaptechAPI.companies('fv2r321rfef')
// .then(console.log).catch(console.error)
/*
const snaptechAPI = require('snaptechAPI')

snaptechAPI.send('ehu23h0irn', {
    messsage: 'antoher one',
    username: '',
    timestamp: Date()
}).catch(console.log)

snaptechAPI.on('ehu23h0irn')
.then(console.log).catch(console.error)


snaptechAPI.getSession()
snaptechAPI.upload()

const message = {
    timestamp: '',
    uuid: '',
    message: '',
    type: '', // 'text' 'image' 'video', link
    isUser: true
}

const db = {
    companies: {
        csico: {

        }
    },
    sessions: {
        ye12y89eru390u09: {
            messages: [
                {
                    message: '',
                    type: 'text'
                }
            ],
            inittime: '',
            techcnican: '',
            username: '',
            activity: ''
        }
    }
}
*/


// const storageRef = firebase.storage().ref(`uploads/${fileObj.file_name}`).put(fileObj.file)
// storageRef.on('state_changed', storageObj => {
//     var progressBar = document.getElementById('progressBar')
//     progressBar.style.cssText = `width: ${(storageObj.bytesTransferred / storageObj.totalBytes) * 100}%`
//     progressBar.innerHTML = (storageObj.bytesTransferred / storageObj.totalBytes) * 100;
// },
//     (err) => reject(err),
//     () => {
//         const date = new Date,
//             // formatting thes current time
//             current_time = `${date.getMonth() + 1 === 13 ? date.getMonth() : date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.toLocaleTimeString()}`;

//         firebase.database().ref(`/${new_aliasName}`).set({
//             file_name: fileObj.file_name,
//             type: fileObj.type,
//             size: fileObj.size,
//             terminate,
//             upload_date: current_time,
//             oid: Math.random().toString(36).slice(2),
//             downloadURL: storageRef.snapshot.downloadURL
//         })
//         return resolve(new_aliasName)
//     })