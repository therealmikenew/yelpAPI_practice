import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("hi there");
    try {
      const response = await yelp.get("/search", {
        params: {
          //parameters come from here: "https://www.yelp.com/developers/documentation/v3/business_search"
          limit: 50,
          //ES2015 syntax: for when key and value are the same!
          // term,
          term: searchTerm,

          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  //Call searchApi when component is first rendered
  //searchApi("pasta");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={(term) => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
