import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { ButtonComponent } from "./ButtonComponent";

export const ShowMovie = (props) => {
    const { image, title, viewers, isHome, isRecommended, rating } = props;
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <View style={[styles.horizontalDataContainer,
        { flex: isHome ? null : 1 }]}>
            <Image
                style={styles.movieImage}
                source={image}
            />
            <View style={styles.horizontalTitleContainer}>
                <Text style={styles.horizontalTitle}>
                    {title}
                </Text>
            </View>
            {/* <View style={styles.viewersContainer}>
                <Icon
                    name="eye"
                    type="ionicon"
                    size={20}
                />
                <Text style={styles.viewersText}>
                    {numberWithCommas(viewers)}
                </Text>
            </View> */}
            {
                isRecommended ?
                    <View>
                        {
                            rating === 5 ?
                                <Image
                                    style={styles.ratingImage}
                                    source={require('../../assets/images/five-stars.png')}
                                />
                                :
                                rating === 4 ?
                                    <Image
                                        style={styles.ratingImage}
                                        source={require('../../assets/images/four-stars.png')}
                                    />
                                    :
                                    rating === 3 ?
                                        <Image
                                            style={styles.ratingImage}
                                            source={require('../../assets/images/three-stars.png')}
                                        />
                                        :
                                        rating === 2 ?
                                            <Image
                                                style={styles.ratingImage}
                                                source={require('../../assets/images/two-stars.png')}
                                            />
                                            :
                                            <Image
                                                style={styles.ratingImage}
                                                source={require('../../assets/images/star.png')}
                                            />
                        }
                    </View>
                    :
                    <View style={styles.viewersContainer}>
                        <Icon
                            name="eye"
                            type="ionicon"
                            size={16} />
                        <View style={styles.viewersText}>
                            <Text>{numberWithCommas(viewers)}</Text>
                        </View>
                    </View>
            }
            {
                isHome ?
                    null
                    :
                    <ButtonComponent
                        {...props}
                    />
            }
        </View>
    )
};

export const MovieExplanation = (props) => {
    const { name, value, isRating, rating } = props;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.generalFontSize}>{name}</Text>
            </View>
            <Text style={styles.generalFontSize}>: </Text>
            <View style={styles.valueContainer}>
                {
                    isRating ?
                        rating === 5 ?
                            <Image
                                style={styles.ratingImage}
                                source={require('../../assets/images/five-stars.png')}
                            />
                            :
                            rating === 4 ?
                                <Image
                                    style={styles.ratingImage}
                                    source={require('../../assets/images/four-stars.png')}
                                />
                                :
                                rating === 3 ?
                                    <Image
                                        style={styles.ratingImage}
                                        source={require('../../assets/images/three-stars.png')}
                                    />
                                    :
                                    rating === 2 ?
                                        <Image
                                            style={styles.ratingImage}
                                            source={require('../../assets/images/two-stars.png')}
                                        />
                                        :
                                        <Image
                                            style={styles.ratingImage}
                                            source={require('../../assets/images/star.png')}
                                        />
                        :
                        <Text style={styles.textValue}>{value}</Text>
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    // ShowMovie Styles
    horizontalDataContainer: {
        margin: 8,
        width: 180,
        alignItems: "center",
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16
    },

    horizontalTitleContainer: {
        marginTop: 8,
        marginBottom: 8
    },

    horizontalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center'
    },

    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    },

    viewersContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    viewersText: {
        marginLeft: 8
    },


    // MovieExplanation Styles
    mainContainer: {
        flexDirection: "row",
        margin: 8
    },
    nameContainer: {
        flex: 1
    },
    generalFontSize: {
        fontSize: 16
    },
    valueContainer: {
        flex: 3
    },
    textValue: {
        textAlign: "justify",
        fontSize: 16
    },
    ratingImage: {
        width: 100,
        height: 20
    },
})