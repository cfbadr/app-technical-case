import { StyleSheet } from "react-native"
import colors from "../../../constants/colors"
import { Spacing } from "../../../constants/spacing"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: Spacing.s05
    },
    city: {
        textAlign: 'center',
        color: colors.primary,
        fontSize: 36,
        marginBottom: Spacing.s06,
        textTransform: 'uppercase',
        fontWeight: '800'
    },
    title: {
        color: colors.primary,
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: '300',
        marginBottom: Spacing.s01,
    },
    info: {
        color: colors.primary,
        fontSize: 22,
        fontWeight: '600',
    },
    infoRight: {
        textAlign: 'right'
    },
    row: {
        flexDirection: 'row',
        marginBottom: Spacing.s06,
    },
    leftSection: {
        flex: 1,
    },
    rightSection: {
        flex: 1,
        alignItems: 'flex-end',
    },
    cellContainer: {
        backgroundColor: '#fff',
        padding: Spacing.s02,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        marginVertical: Spacing.s01
    },
    celebrityText: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'capitalize'
    }
})