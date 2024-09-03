import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, Dimensions, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import booksData from '../data/bookData'; // Adjust the path as needed

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter books based on search term
  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderHorizontalBookItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Book', { book: item })}>
      <View style={styles.horizontalBookItem}>
        <Image source={item.image} style={styles.horizontalBookImage} />
        <View style={styles.horizontalBookDetails}>
          <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.bookDescription} numberOfLines={3}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderVerticalBookItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Book', { book: item })}>
      <View style={styles.verticalBookItem}>
        <View style={styles.verticalBookDetails}>
          <Text style={styles.bookTitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.bookDescription} numberOfLines={2}>{item.description}</Text>
          <Text style={styles.bookCategory}>{item.category}</Text> 
        </View>
        <Image source={item.image} style={styles.verticalBookImage} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.searchContainer}>
        <View style={styles.searchBoxContainer}>
          <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBox}
            placeholder="Search for books..."
            placeholderTextColor="#fff"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
      </View>
      <FlatList
        data={booksData}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
        renderItem={renderHorizontalBookItem}
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.title}
        renderItem={renderVerticalBookItem}
        numColumns={1} // Display one item per row
        contentContainerStyle={styles.verticalList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DC6D97',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
  },
  searchBox: {
    flex: 1,
    height: '100%',
    color: '#fff',
    fontFamily: 'Poppins-Semibold',
    fontSize: 14,
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  horizontalList: {
    paddingVertical: 10,
  },
  verticalList: {
    paddingVertical: 10,
  },
  horizontalBookItem: {
    backgroundColor: 'rgba(148, 193, 255, 1)',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 200, // Reduced to shrink card size
    width: width * 0.6, // Reduced width for a smaller card
    height: 200, // Reduced height for a smaller card
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  horizontalBookImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  horizontalBookDetails: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#DC6D97',
    width: '100%',
  },
  bookTitle: {
    fontSize: 16, // Slightly smaller font
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: '#FAFAFA',
    marginBottom: 9,
  },
  bookDescription: {
    fontSize: 14, // Slightly smaller font
    color: '#FAFAFA',
    fontFamily: 'Poppins-Regular',
  },
  bookCategory: {
    fontSize: 12, // Adjust the font size as needed
    color: '#fff', // Use a color that contrasts well with the background
    fontFamily: 'Poppins-Regular',
    marginTop: 8, // Add some spacing between the description and the category
  },
  verticalBookItem: {
    flexDirection: 'row',
    backgroundColor: '#DC6D97',
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  verticalBookDetails: {
    flex: 1,
    paddingRight: 10,
  },
  verticalBookImage: {
    width: width * 0.25, // Reduced width for a smaller image
    height: 100, // Reduced height for a smaller image
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default HomeScreen;
