import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

interface IProps {
  title: string;
}
/**
 * @param title string
 */

export const CustomHeader: FC<IProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={[styles.header__wrapperText]}>
        <Text style={styles.header__text} ellipsizeMode="tail" numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  );
};
