import React, { useState } from 'react';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { Colors } from '../../constants/Theme';
import Upcoming from './Upcoming';
import Past from './Past';
import All from './All';

const Reminder = ({ navigation }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = React.useState([
    { key: 'upcoming', title: 'Upcoming' },
    { key: 'past', title: 'Past' },
    { key: 'all', title: 'All' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled={true}
      indicatorStyle={{
        backgroundColor: Colors.primaryColor,
        borderBottomColor: Colors.white,
      }}
      style={{ backgroundColor: Colors.white }}
      renderLabel={({ route: childRoute, focused, color }) => (
        <Text
          style={
            ({
              color: focused ? Colors.black : Colors.grayColor3,
            },
            styles.tabBarText)
          }
        >
          {childRoute.title}
        </Text>
      )}
    />
  );

  const renderScene = ({ route: childRoute }) => {
    switch (childRoute.key) {
      case 'upcoming':
        return <Upcoming />;
      case 'past':
        return <Past />;
      case 'trackRecord':
        return <All />;

      default:
        return null;
    }
  };
  return (
    <TabView
      lazy
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ backgroundColor: Colors.appBackground }}
    />
  );
};

const styles = StyleSheet.create({
  tabBarText: { margin: 0, padding: 0 },
});

export default Reminder;
