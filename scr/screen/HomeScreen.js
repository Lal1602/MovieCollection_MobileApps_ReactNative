import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { movieData } from '../../data/MovieData';
import { Icon } from 'react-native-elements';
import { ShowMovie } from '../components/MovieComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import DetailMoveScreen from './DetailMoveScreen';

const HomeScreen = (props) => {
    const [recommended, setRecommended] = useState([]);
    const [mostViewed, setMostViewed] = useState([]);
    const [allMostViewed, setAllMostViewed] = useState([]);
    const [allRecommended, setAllRecommended] = useState([]);
    const { navigation } = props;

    const compareRating = (a, b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;

        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }
    };

    const compareViewers = (a, b) => {
        const viewerA = a.viewers;
        const viewerB = b.viewers;

        if (viewerA > viewerB) {
            return -1;
        } else if (viewerA < viewerB) {
            return 1;
        } else {
            return 0;
        }
    };


    useEffect(() => {
        const threeRecommended = [];
        const threeMostViewed = [];

        // SORTING FLATLIST VERTICAL
        const sortedRecommended = [...movieData].sort(compareRating);
        setRecommended(sortedRecommended);

        // SORTING FLATLIST HORIZONTAL
        const sortedMostViewed = [...movieData].sort(compareViewers);
        setMostViewed(sortedMostViewed);

        // SORTING MOST VIEWED
        setAllMostViewed(sortedMostViewed);

        setRecommended(threeRecommended);
        setMostViewed(threeMostViewed);
        setAllRecommended(sortedRecommended);

        for (let i = 0; i < 3; i++) {
            threeRecommended.push(sortedRecommended[i]);
            threeMostViewed.push(sortedMostViewed[i]);
        };
    }, []);


    // useEffect(() => {

    // }, []);

    return (
        <View style={styles.mainContainer}>
            <FlatList
                // SELALU GUNAKAN PROPS YANG TELAH DIBUAT DARI ATAS (BARIS KE 7)!
                data={recommended}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}

                // ~~~~~~~~~Main Content~~~~~~~~~
                renderItem={({ item }) => {
                    return (
                        <View style={styles.dataContainer}>
                            <Image
                                style={styles.movieImage}
                                source={{ uri: item.imageLink }}
                            />
                            <View style={styles.movieDescription}>
                                <Text style={styles.title}>
                                    {item.title}</Text>
                                <View style={styles.yearContainer}>
                                    <Text>
                                        <Icon
                                            name="calendar"
                                            type="antdesign"
                                            size={20}
                                        />
                                        {item.year}</Text>
                                    {
                                        item.rating === 5 ?
                                            <Image
                                                style={{
                                                    width: 100,
                                                    height: 20
                                                }}
                                                source={require('../../assets/images/five-stars.png')}
                                            />
                                            :
                                            item.rating === 4 ?
                                                <Image
                                                    style={{
                                                        width: 100,
                                                        height: 20
                                                    }}
                                                    source={require('../../assets/images/four-stars.png')}
                                                />
                                                :
                                                item.rating === 3 ?
                                                    <Image
                                                        style={{
                                                            width: 100,
                                                            height: 20
                                                        }}
                                                        source={require('../../assets/images/three-stars.png')}
                                                    />
                                                    :
                                                    null
                                    }
                                </View>
                                <Text>{item.rating}</Text>
                                <ButtonComponent
                                    onPress={() =>
                                        navigation.navigate('DetailMovie', { item })
                                    }
                                />
                            </View>
                        </View>
                    )
                }}
                ListEmptyComponent={
                    <View style={{ alignItems: 'center' }}>
                        <Text>No Items in this category</Text>
                    </View>
                }

                // ~~~~~~~~~Header~~~~~~~~~
                ListHeaderComponent={
                    <View>
                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>
                                    Most Viewed
                                </Text>
                            </View>
                            <View style={styles.seeAllContainer}>
                                <TouchableOpacity onPress={
                                    () => navigation.navigate('MostViewedScreen', { allMostViewed })
                                }>
                                    <Text style={styles.seeAllText}>See All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <FlatList horizontal
                            data={mostViewed}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <ShowMovie
                                        image={{ uri: item.imageLink }}
                                        title={item.title}
                                        viewers={item.viewers}
                                        onPress={()=> navigation.navigate('DetailMovie', {item})}
                                        isHome={true}
                                    />
                                )
                            }}
                            contentContainerStyle={{ flex: mostViewed.length === 0 ? 1 : null }}
                            ListEmptyComponent={
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <Text>No items in this category</Text>
                                </View>
                            }
                        />
                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>
                                    Recommended
                                </Text>
                            </View>
                            <View style={styles.seeAllContainer}>
                                <TouchableOpacity onPress={() => navigation.navigate('Recommended', { allRecommended })}>
                                    <Text style={styles.seeAllText}>See All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }

            // ~~~~~~~~~Footer~~~~~~~~~
            // ListFooterComponent={
            //     <Text>
            //         An array of objects lets you store multiple values in a single variable. It stores a fixed size sequential collection of elements of the same type. An array is used to store a collection of data,but it is often more useful to think of an array as a collection of variables of the same type.
            //     </Text>
            // }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    flatListContainer: {
        padding: 8
    },

    movieImage: {
        width: 130,
        height: 180,
        borderRadius: 10
    },

    dataContainer: {
        margin: 8,
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row'
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    movieDescription: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8
    },

    yearContainer: {
        // margin: 8,
        // padding: 8
    },

    mainCategoryContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row'
    },

    categoryContainer: {
        flex: 1
    },

    categoryText: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    seeAllContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    seeAllText: {
        color: '#009688',
        textDecorationLine: 'underline'
    }
});

export default HomeScreen;