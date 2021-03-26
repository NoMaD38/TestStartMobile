import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { IAppState } from '../../../store/app/app-reducer';
import { ICharacter } from '../../../utils/Api';
import { getCharacter } from '../../../utils/utils';
import { CustomHeader } from '../common/CustomHeader';
import { styles } from './style';

interface IProps {
  character: ICharacter | undefined;
}

class CharacterInfo extends Component<IProps> {
  render(): JSX.Element {
    const { character } = this.props;
    return (
      <View style={styles.container}>
        <CustomHeader title="Персонаж" />
        <View style={styles.wrapper__content}>
          {character ? (
            <View>
              <View style={styles.wrapper__image}>
                <Image style={styles.image} source={{ uri: character.image }} />
              </View>
              <View style={styles.wrapper__info__text}>
                <Text style={styles.font__first}>
                  Имя: {<Text style={styles.font__last}>{character.name}</Text>}
                </Text>
                <Text style={styles.font__first}>
                  Пол: {<Text style={styles.font__last}>{character.gender}</Text>}
                </Text>
                <Text style={styles.font__first}>
                  Статус: {<Text style={styles.font__last}>{character.status}</Text>}
                </Text>
                <Text style={styles.font__first}>
                  Локация: {<Text style={styles.font__last}>{character.location.name}</Text>}
                </Text>
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.font__last}>{`Упс, вы ничего не выбрали :(`}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  character: getCharacter(state),
});

export default connect(mapStateToProps, {})(CharacterInfo);
