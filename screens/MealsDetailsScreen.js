import { View, Text, StyleSheet, Image, ScrollView ,Button} from "react-native";
import { MEALS } from "../data/dummy_data";
import MealDetails from "../components/MealDetails";
import SubTilte from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect,useContext } from "react";
import IconButton from "../components/IconButton";
import {FavouritesContext}  from "../store/context/favorites-context";

const MealsDetailsScreen = ({ route,navigation }) => {

const FavoritesCtx = useContext(FavouritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);


  const mealIsFavorite =  FavoritesCtx.ids.includes(mealId);


  function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
          FavoritesCtx.removeFavorite(mealId);
        }else{
          FavoritesCtx.addFavorite(mealId);
        }
  }
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: () => { return <IconButton  onPress={changeFavoriteStatusHandler} icon={mealIsFavorite ? "star" : "star-outline"} color="white" /> },
    })
  },[changeFavoriteStatusHandler,navigation,mealIsFavorite])

  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View  style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
        <SubTilte>indgredients</SubTilte>
        <List data={selectedMeal.ingredients} />
        <SubTilte>Steps</SubTilte>
        <List data={selectedMeal.steps} />
      </View>
      </View>
    
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    marginBottom: 32
  },
  text: {
    color: "white",
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    margin: 8,
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer:{
    width:"100%",
    alignItems: "center",
  },
  listContainer:{
    width: "80%",
  }
});
