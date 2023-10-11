import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';

import Loading from '../../../components/Loading';
import Button from '../../../components/Button';
import styles from './styles';

function App(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.loggedIn ? 'Logged in' : 'Not logged in'}</Text>
            {props.error && <Text style={styles.error}>{props.error}</Text>}
            {props.loading ? (
                <Loading />
            ) : (
                <Button onPress={props.login}>Login</Button>
            )}
        </View>
    );
}

const mapStateToProps = (state) => ({
    loggedIn: state.auth.loggedIn,
    loading: state.auth.loading,
    error: state.auth.error,
});
const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);