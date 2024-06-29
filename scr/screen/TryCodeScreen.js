import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { userData } from "../../data/TryCodeData";

const TryCodeScreen = () => {
    return (
        <View style={styles.mainView}>

            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={userData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={
                            [
                                styles.bgView,
                                {
                                    backgroundColor:
                                        item.gender.toLowerCase() === 'male' ?
                                            'moccasin'
                                            :
                                            'lavender'
                                }
                            ]
                        }>
                            <Image
                                source={{ uri: item.imageLink }}
                                style={styles.imgStyle}
                            />
                            <Text>{item.name}</Text>
                            <Text>{item.gender}</Text>
                            <Text>{item.age}</Text>
                            {item.age >= 6 && item.age <= 12 ?
                                <Text>
                                    Child
                                </Text>
                                :
                                item.age >= 13 && item.age <= 17 ?
                                    <Text>
                                        Teen
                                    </Text>
                                    :
                                    item.age >= 18 && item.age <= 64 ?
                                        <Text>
                                            Adult
                                        </Text>
                                        :
                                        null
                            }
                        </View>
                    )
                }}

            />

        </View>

    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },

    bgView: {
        margin: 8,
        borderWidth: 1,
        alignItems: "center"
    },

    imgStyle: {
        width: 100,
        height: 100
    },

    contentContainerStyle: {
        padding: 8
    }
});

export default TryCodeScreen;