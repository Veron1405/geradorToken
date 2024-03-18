import { View, StyleSheet} from "react-native";

export function ModalTokens() {
    return (
        <View style={ESTILO.container}>
            <View style={ESTILO.content}>

            </View>
        </View>
    )
}
const ESTILO = StyleSheet.create({
    container: {
        backgroundColor: "rgba(25,25,25,0.6)",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 25,
        paddingBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    }

})