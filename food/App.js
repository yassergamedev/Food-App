import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/Screens/SearchScreen";
import ResultsShowScreen from "./src/Screens/ResultsShowScreen";
const navigation = createStackNavigator({
  search : SearchScreen,
  result : ResultsShowScreen
},
{
  initialRouteName : 'search',
  defaultNavigationOptions : {
    title : 'Business Search'
  }
})

export default createAppContainer(navigation)