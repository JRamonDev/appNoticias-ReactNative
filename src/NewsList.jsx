import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const NewsList = ({ navigation }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                params: {
                    country: 'us',
                    apiKey: '909afc7391a44165b4c582a617fa9da7'
                },
            });
            setNews(response.data.articles);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={news}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.newsItem}
                        key={item.id}
                        onPress={() => navigation.navigate('NewsDetail', { newsItem: item })}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id?.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#332F2C'
    },
    newsItem: {
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: '#61DBFB',
        borderRadius: 5,
    },
    description: {
        fontSize: 14,
        color: 'white',
    },
});

export default NewsList;