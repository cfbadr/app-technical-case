import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { logout } from '../../../actions/auth';
import Button from '../../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';

import styles from './styles';

function App(props) {
    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 50}}>Welcome {props.user?.email}</Text>
            <Button onPress={props.logout}>Logout</Button>
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