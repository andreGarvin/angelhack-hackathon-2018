import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TextInput,
    ListView,
} from 'react-native'
import {
    Button,
    Icon,
    Avatar,
} from 'react-native-elements'

import snapTechAPI from 'snaptechapi';

const { width, height } = Dimensions.get('window')

// const messages = [
//             {
//                 sessionId: "123456",
//                 username: "Reni",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: true,
//                 message: "I NEED HELP!",
//             }, 
//             {
//                 sessionId: "123456",
//                 username: "Reni",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: true,
//                 message: "I NEED HELP!",
//             }, 
//             {
//                 sessionId: "123456",
//                 username: "Reni",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: true,
//                 message: "I NEED HELP!",
//             }, 

//             {
//                 sessionId: "123456",
//                 username: "TECH GUY",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: false,
//                 message: "What can I help you with?"
//             },
// {
//                 sessionId: "123456",
//                 username: "TECH GUY",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: false,
//                 message: "What can I help you with?"
//             },
//             {
//                 sessionId: "123456",
//                 username: "Reni",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: true,
//                 message: "I NEED HELP!",
//             }, 


//         ]

// CREATES THE LIST VIEW
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
class Chat extends Component {
            constructor(props) {
        super(props)
        this.state = {
            dataSource: ds.cloneWithRows(messages)
        }

        this.renderChatOptions = this.renderChatOptions.bind(this)
    }

    render() {
        return (
            <ListView
                style={{ flex: 1, marginTop: 25 }}
                dataSource={this.state.dataSource}
                renderRow={(data) => <RenderChat {...data} />}
                renderFooter={() => this.renderChatOptions()}
            />
        )
    }

    // ALL CHAT OPTIONS TOOLS
    renderChatOptions() {
        return (
            <View style={ styles.toolBox }>
                <View style={ styles.chatBox }>
                    {<Icon type="ionicon" name="md-camera" size={25} />}
                    <TextInput
                        editable = {true}
                        maxLength = {72}
                        multiline={true}
                        numberOfLines={2}
                        style={{ width: width*.80, padding: 10 }}
                    />
                    {<Icon type="ionicon" name="md-send" size={25} />}
                </View>
            </View>
        )
    }
}

// WILL RENDER THE STYLES
const styles = StyleSheet.create({
    toolBox: {
        // FLEX PROPS
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',

        // DIMENSION PROPS
        height: height * .37,
    },

    chatBox: {
        // FLEX PROPS
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

        // COLOR PROPS
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },

    userChat: {
        alignSelf: 'flex-end',
        padding: 5,
    },

    techChat: {
        alignSelf: 'flex-start',
        padding: 5,
    },

    messageBubbleTech: {
        width: width * .40,
        borderRadius: 9,
        padding: 5,
        backgroundColor: '#428bca',
        color: '#222',
        fontWeight: 'bold'
    },

    messageBubbleUser: {
        width: width * .40,
        borderRadius: 9,
        padding: 5,
        backgroundColor: '#5bc0de',
        color: '#222',
        fontWeight: 'bold'
    },
})

// WILL RENDER THE CHAT
const RenderChat = (props) => (
    <View style={ props.isUser ? styles.userChat : styles.techChat }>
        <Text style={ props.isUser ? styles.messageBubbleUser : styles.messageBubbleTech }>{ props.message }</Text>
        <Avatar
            small
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
            containerStyle={ props.isUser ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' } }
        />
    </View>
)


export default Chat
