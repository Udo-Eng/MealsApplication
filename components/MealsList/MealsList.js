import {View,StyleSheet,FlatList}  from "react-native";
import MealItem from "./MealItem";

const MealsList = ({mealsList}) => {
    function renderMealItem(itemData) {
        return <MealItem item={itemData.item} />;
      }

      return (
        <View style={styles.container}>
          <FlatList
            data={mealsList}
            dataExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 14,
    },
  });
  


export default MealsList;