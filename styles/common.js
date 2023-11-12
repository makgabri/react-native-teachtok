import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        width: '100%',
        height: 80,
        display: 'flex',
        position: 'absolute',
        backgroundColor: 'transparent',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 30,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    question: {
        color: 'white',
        fontSize: 22
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 9999,
        borderColor: 'white',
        borderWidth: 2
    },
    addition: {
        width: 20,
        height: 20,
        backgroundColor: 'green',
        borderRadius: 10,
        position: 'absolute',
        bottom: -5,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        verticalAlign: 'middle',
        alignItems: 'center',
        overflow: 'hidden'
    },
    questionBox: {
        backgroundColor: 'rgba(200,200,200,0.8)',
        maxWidth: '100%',
        overflow: 'hidden',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mcqAnswer: {
        color: 'white',
        fontSize: 18,
        textShadowColor:'#585858',
        textShadowRadius:3
    }
})

export default commonStyles