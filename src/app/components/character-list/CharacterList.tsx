import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { IAppState } from '../../../store/app/app-reducer';
import { ICharacter } from '../../../utils/Api';
import { CustomHeader } from '../common/CustomHeader';
import { styles } from './style';
import { appSetCurrentElement } from '../../../store/app/app-actions';
import CharactersContainer from './CharactersContainer';

interface IProps {
  characters: ICharacter[];
  currentElement: string | null;
  countPages: number;
  appSetCurrentElement: typeof appSetCurrentElement;
}

class CharacterList extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  private setCurrentElement = (id: string) => this.props.appSetCurrentElement(id);

  render() {
    const { characters, currentElement, countPages } = this.props;
    return (
      <View style={styles.container}>
        <CustomHeader title="Список" />
        {characters.length < 1 ? (
          <ActivityIndicator style={styles.activityindicator__style} size="large" color="#1071FF" />
        ) : (
          <CharactersContainer
            characters={characters}
            currentElement={currentElement}
            countPages={countPages}
            setCurrentElement={this.setCurrentElement}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ characters, currentElement, countPages }: IAppState) => ({
  characters,
  currentElement,
  countPages,
});

export default connect(mapStateToProps, { appSetCurrentElement })(CharacterList);
