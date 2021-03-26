import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CharacterInfo from '../../app/components/character-info/CharacterInfo';
import CharacterList from '../../app/components/character-list/CharacterList';
import { Icon } from 'react-native-elements';
import { styles } from './style';

const Tab = createBottomTabNavigator();

const icon = (
  iconProps: { focused: boolean; color: string; size: number } | undefined,
  iconName: string
) => {
  return (
    <Icon
      type="ionicon"
      name={iconName}
      size={20}
      color={iconProps?.color ? iconProps.color : 'white'}
    />
  );
};

export default function MainBottomTabNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#1071FF',
          labelStyle: styles.tabBar__label,
          style: styles.tabBar__style,
        }}
      >
        <Tab.Screen
          name="CharacterList"
          component={CharacterList}
          options={{
            tabBarLabel: 'Список персонажей',
            tabBarIcon: (iconProps) => icon(iconProps, 'list'),
          }}
        />
        <Tab.Screen
          name="CharacterInfo"
          component={CharacterInfo}
          options={{
            tabBarLabel: 'Персонаж',
            tabBarIcon: (iconProps) => icon(iconProps, 'logo-react'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
