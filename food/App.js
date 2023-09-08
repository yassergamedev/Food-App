import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/Screens/SearchScreen";
const navigation = createStackNavigator({
  search : SearchScreen
},
{
  initialRouteName : 'search',
  defaultNavigationOptions : {
    title : 'Business Search'
  }
})

export default createAppContainer(navigation)