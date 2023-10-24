import React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getOverviewCountry } from '../../../actions/countries';
import { extractCurrency, extractLanguage, extractRandomItemsFromArray } from '../../../helpers/data';
import numeral from 'numeral';
import styles from './styles';
import { getCelebrities } from '../../../actions/celebrities';

function App(props) {
    const [countryDetail, setCountryDetail] = useState();
    const [celebrities, setCelebrities] = useState([]);
    const {countryCode} = props.route.params;

    useEffect(() => {          
        if (countryCode in props.countryDetail) {
            setCountryDetail(props.countryDetail[countryCode])
        } else {
            fetchCountryDetail()
        }
        fetchCelebrities()
    }, [])

    const fetchCelebrities = async () => {
        const result = await getCelebrities(countryCode);
        const celebrities = extractRandomItemsFromArray(result, 3)
        setCelebrities(celebrities)
    }
    const fetchCountryDetail = async () => {
        try {
            const response = await props.getOverviewCountry(countryCode);
            setCountryDetail(response);
        } catch (error) {
            Alert.alert('An error occured while fetching data')
        }
    }
    if (!countryDetail) {
        return <ActivityIndicator />
    }
    return (
        <View style={styles.container}>
            <Text style={styles.city}>{countryDetail.flag}{countryDetail.name.common}</Text>
            <View style={styles.row}>
                <View style={styles.leftSection}>
                    <Text style={styles.title}>Capital</Text>
                    <Text style={styles.info}>🏛️ {countryDetail.capital[0]}</Text>
                </View>
                <View style={styles.rightSection}>
                    <Text style={styles.title}>Population</Text>
                    <Text style={[styles.info, styles.infoRight]}>🥷🏼 {numeral(countryDetail.population).format('0.00a')}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.leftSection}>
                    <Text style={styles.title}>Language(s)</Text>
                    {extractLanguage(countryDetail).map((item, index) => <Text key={index}style={styles.info}>🗣️ {item}</Text>)}
                </View>
                <View style={styles.rightSection}>
                    <Text style={styles.title}>Currency</Text>
                    {extractCurrency(countryDetail).map((item, index) => <Text key={index}style={[styles.info, styles.infoRight]}>💸 {item}</Text>)}
                </View>
            </View>
            <Text style={styles.title}>Celebrities</Text>
            {celebrities.map((item, index) => (
                <View key={index} style={styles.cellContainer}>
                    <Text key={index}style={styles.celebrityText}>💫 {item.name}</Text>
                </View>
            ))}
        </View>
    );
}

const mapStateToProps = (state) => ({
    countryDetail: state.overview.countriesDetails
});
const mapDispatchToProps = (dispatch) => ({
    getOverviewCountry: (countryCode) => dispatch(getOverviewCountry(countryCode))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);