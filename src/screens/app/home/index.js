import React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { connect } from 'react-redux';
import { getDreamInfluenceCountry } from '../../../actions/countries';
import List from '../../../components/List';
import { sortArrayOfObjects } from '../../../helpers/data';
import styles from './styles';

const App = (props) => {
    const [countriesAvailable, setCountriesAvailable] = useState(props.countries);
    const [order, setOrder] = useState('ascending')
    useEffect(() => {
        if (!props.countries) {
            fetchCountries()
        }
    }, [])

    const changeOrder = () => {
        let newOrder = '';
        if (order === 'ascending') newOrder = 'descending';
        else  newOrder = 'ascending';
        const newArraySorted = sortArrayOfObjects(countriesAvailable, "name", newOrder === 'ascending')
        setCountriesAvailable(newArraySorted);
        setOrder(newOrder);
      } 

    const fetchCountries = async () => {
        try {
            const response = await props.getCountries();
            const responseSorted = sortArrayOfObjects(response, "name", true)
            setCountriesAvailable(responseSorted)
        } catch (error) {
            Alert.alert('An error occured');
        }
    }

    return (
      <View style={styles.container}>
        {
            countriesAvailable ? (
                <List
                    order={order}
                    onChangeOrderPress={() => changeOrder()}
                    countries={countriesAvailable} 
                    onPress={(countryCode) => props.navigation.navigate('Overview', { countryCode })} 
                />)
                : <ActivityIndicator />
            }
      </View>
    );
}

const mapStateToProps = (state) => ({
    countries: state.countries.countries
});
const mapDispatchToProps = (dispatch) => ({
    getCountries: () => dispatch(getDreamInfluenceCountry())

});

export default connect(mapStateToProps, mapDispatchToProps)(App);