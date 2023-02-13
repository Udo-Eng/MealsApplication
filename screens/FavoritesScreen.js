import MealsList from "../components/MealsList/MealsList";
import { useContext} from "react";
import { FavouritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy_data";
import {View,Text,StyleSheet}  from "react-native";

const FavoritesScreen = () => {
    
  const FavoritesCtx = useContext(FavouritesContext);

  const FavoritesIds = FavoritesCtx.ids;

  const favoriteMeals = MEALS.filter(meal => FavoritesIds.includes(meal.id));


if(favoriteMeals.length === 0){
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.textStyle}>
                No Favorite Meals found 
            </Text>
        </View>
    );
}

  return <MealsList mealsList={favoriteMeals} />;

};

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    textStyle:{
        fontSize: 24,
        fontWeight:"bold",
        fontColor:"white"
    }
});


export default FavoritesScreen;
