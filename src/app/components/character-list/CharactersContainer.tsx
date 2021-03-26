import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Image, Text, Pressable, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { ICharacter } from '../../../utils/Api';
import { getCharacters } from '../../../utils/utils';
import { styles } from './style';

interface IProps {
  characters: ICharacter[];
  currentElement: string | null;
  countPages: number;
  setCurrentElement: (id: string) => void;
}

interface IState {
  page: number;
  loadingCharacters: boolean;
}

export default class CharactersContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      page: 1,
      loadingCharacters: false,
    };
  }

  public shouldComponentUpdate(nextProps: IProps): boolean {
    return (
      nextProps.characters.length !== this.props.characters.length ||
      nextProps.countPages !== this.props.countPages ||
      nextProps.currentElement !== this.props.currentElement
    );
  }

  private loadNewCharacters(distanceFromEnd: number) {
    const { page, loadingCharacters } = this.state;
    const { countPages } = this.props;

    if (!loadingCharacters && distanceFromEnd > 0 && countPages > page) {
      const newPage = page + 1;
      this.setState({ loadingCharacters: true, page: newPage });
      getCharacters(newPage).then(() => this.setState({ loadingCharacters: false }));
    }
  }

  private renderFooter = () => {
    if (!this.state.loadingCharacters) {
      return null;
    }
    return <ActivityIndicator animating size="large" color="#1071FF" />;
  };

  render(): JSX.Element {
    const { characters, currentElement, setCurrentElement } = this.props;

    return (
      <FlatList
        data={[...characters]}
        renderToHardwareTextureAndroid
        scrollEventThrottle={16}
        initialNumToRender={15}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={this.renderFooter}
        onEndReachedThreshold={0.5}
        onEndReached={({ distanceFromEnd }) => this.loadNewCharacters(distanceFromEnd)}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setCurrentElement(item.id.toString())}
            style={styles.wrapper__card__character}
          >
            <View style={styles.wrapper__image__avatar}>
              <Image style={styles.image__avatar} source={{ uri: item.image }} />
              <View style={styles.wrapper__text}>
                <Text>{item.name}</Text>
              </View>
            </View>
            {currentElement === item.id.toString() && (
              <Icon type="ionicon" name="checkbox" size={20} color={'#1071FF'} />
            )}
          </Pressable>
        )}
      />
    );
  }
}
