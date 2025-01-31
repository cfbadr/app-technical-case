import { StyleSheet } from "react-native"
import { Spacing } from "../../../constants/spacing"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginBottom: Spacing.s05,
        fontSize: 16,
        fontWeight: 'bold'
    },
    error: {
        marginBottom: Spacing.s05,
        color: 'red'
    }
})