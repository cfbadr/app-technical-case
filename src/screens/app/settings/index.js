import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import Button from '../../../components/Button';
import styles from './styles';

function App(props) {
    return (
        <View style={styles.container}>
            <Text>Settings {props.user?.email}</Text>
            <Button style={styles.button} onPress={props.logout}>Logout</Button>
        </View>
    );
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);