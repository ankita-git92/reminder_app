import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginNavigation from './LoginNavigation';
import FundmanagerNavigation from './FundmanagerNavigation';
import SplashNavigation from './SplashNavigation';
import Profile from '../screens/fundmanager/Profile';
import ViewFund from '../screens/fundmanager/Funds/ViewFund';
import ViewInvestmentFund from '../screens/investor/MyInvestment/ViewFund';
import ViewLead from '../screens/fundmanager/Funds/ViewLead';
import ViewActiveInvestor from '../screens/fundmanager/Funds/ViewActiveInvestor';
import ViewPortfolioCompany from '../screens/fundmanager/Funds/ViewPortfolioCompany';
import ViewInvestorUpdate from '../screens/fundmanager/Funds/ViewInvestorUpdate';
import Reports from '../screens/fundmanager/Reports';
import ViewInvestor from '../screens/fundmanager/Investors/ViewInvestor';
import ViewConversation from '../screens/shared/Conversation/ViewConversation';
import EditConversation from '../screens/shared/Conversation/EditConversation';
import ChangePassword from '../screens/login/ChangePassword';
import AddNAVUpdate from '../screens/fundmanager/Funds/AddNAVUpdate';
import ContactUs from '../components/ContactUs';
import AddTransaction from '../screens/fundmanager/Transaction/AddTransaction';
import PastInvestmentSummaryForm from '../screens/fundmanager/Profile/PastInvestmentSummaryForm';
import EditProfile from '../screens/fundmanager/Profile/EditProfile';
import CallForDrawdownForm from '../screens/fundmanager/Funds/CallForDrawdownForm';
import InvestorNavigation from './InvestorNavigation';
import ViewInvestorFund from '../screens/investor/Funds/ViewFund';
import InvestorReports from '../screens/investor/Reports';
import AddInvestorUpdate from '../screens/fundmanager/Funds/AddInvestorUpdate';
import AddPortfolioCompany from '../screens/fundmanager/Funds/AddPortfolioCompany';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InvestorViewInvestorUpdate from '../screens/investor/MyInvestment/ViewInvestorUpdate';
import FundStatus from '../components/FundStatus';
import AddTeamMember from '../components/AddTeamMember';
import AddTrackRecord from '../components/AddTrackRecord';
import { Colors } from '../constants/Theme';
import AddInvestorTransaction from '../screens/fundmanager/Funds/AddInvestorTransaction';
import GlobalAddInvestorTransaction from '../screens/investor/Transaction';

const Stack = createNativeStackNavigator();

const AppNavigator = props => {
  const [role, setRole] = React.useState(null);
  const isLoading = useSelector(state => state.auth.isLoading);
  const userToken = useSelector(state => state.auth.token);

  const dispatch = useDispatch();

  React.useEffect(() => {
    (async function () {
      setRole(await AsyncStorage.getItem('role'));
    })();
  });

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let token;

      try {
        token = await AsyncStorage.getItem('userData');
      } catch (e) {
        console.log(e);
      }
      dispatch({
        type: 'RESTORE_TOKEN',
        token: token ? token : null,
      });
    };

    bootstrapAsync();
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoading ? (
          // We haven't finished checking for the token yet
          <SplashNavigation />
        ) : userToken === null ? (
          // No token found, user isn't signed in
          <LoginNavigation />
        ) : (
          // User is signed in
          <Stack.Navigator
            screenOptions={{
              headerTintColor: Colors.primaryColor,
            }}
          >
            <Stack.Group>
              {role === 'fundmanager' ? (
                <Stack.Screen
                  name="FundmanagerDashboard"
                  component={FundmanagerNavigation}
                  options={{ headerShown: false }}
                />
              ) : (
                <Stack.Screen
                  name="InvestorDashboard"
                  component={InvestorNavigation}
                  options={{ headerShown: false }}
                />
              )}
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="Reports" component={Reports} />
              <Stack.Screen
                name="InvestorReports"
                component={InvestorReports}
                options={{ title: 'Reports' }}
              />
              <Stack.Screen
                name="ViewFund"
                component={ViewFund}
                options={{ title: 'View Fund' }}
              />
              <Stack.Screen
                name="ViewLead"
                component={ViewLead}
                options={{ title: 'Lead' }}
              />
              <Stack.Screen
                name="ViewActiveInvestor"
                component={ViewActiveInvestor}
                options={{ title: 'Active Investor' }}
              />
              <Stack.Screen
                name="ViewInvestor"
                component={ViewInvestor}
                options={{ title: 'Investor' }}
              />
              <Stack.Screen
                name="ViewConversation"
                component={ViewConversation}
                // options={{ title: 'Conversation' }}
                options={({ route }) => ({
                  title: route?.params?.name || 'Conversation',
                })}
              />
              <Stack.Screen
                name="EditConversation"
                component={EditConversation}
                options={{ title: 'Conversation' }}
              />
              <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{ title: 'Change Password' }}
              />
              <Stack.Screen
                name="ViewInvestmentFund"
                component={ViewInvestmentFund}
                options={{ title: 'View Fund' }}
              />
              <Stack.Screen
                name="ViewInvestorFund"
                component={ViewInvestorFund}
                options={{ title: 'View Fund' }}
              />
            </Stack.Group>
            <Stack.Group
              screenOptions={({ navigation }) => ({
                presentation: 'modal',
                headerStyle: { backgroundColor: 'transparent' },
              })}
            >
              <Stack.Screen
                name="ViewPortfolioCompany"
                component={ViewPortfolioCompany}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ViewInvestorUpdate"
                component={ViewInvestorUpdate}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InvestorViewInvestorUpdate"
                component={InvestorViewInvestorUpdate}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddNAVUpdate"
                component={AddNAVUpdate}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ContactUs"
                component={ContactUs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddTransaction"
                component={AddTransaction}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GlobalAddInvestorTransaction"
                component={GlobalAddInvestorTransaction}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="PastInvestmentSummaryForm"
                component={PastInvestmentSummaryForm}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CallForDrawdownForm"
                component={CallForDrawdownForm}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FundStatus"
                component={FundStatus}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddTeamMember"
                component={AddTeamMember}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddTrackRecord"
                component={AddTrackRecord}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddInvestorUpdate"
                component={AddInvestorUpdate}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddPortfolioCompany"
                component={AddPortfolioCompany}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddInvestorTransaction"
                component={AddInvestorTransaction}
                options={{ headerShown: false }}
              />
            </Stack.Group>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
