import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuotesListScreen from '../screens/QuotesListScreen';
import QuoteFormScreen from '../screens/QuoteFormScreen';
import QuoteDetailsScreen from '../screens/QuoteDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuotesList" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="QuotesList" component={QuotesListScreen} />
        <Stack.Screen name="QuoteForm" component={QuoteFormScreen} />
        <Stack.Screen name="QuoteDetails" component={QuoteDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
