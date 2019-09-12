import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Loading,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: true,
    refresh: false,
    page: 1,
  };

  async componentDidMount() {
    this.load();
  }

  load = async (page = 1) => {
    const { stars } = this.state;
    const {
      navigation: { getParam },
    } = this.props;
    const { login } = getParam('user');

    const { data } = await api.get(`users/${login}/starred`, {
      params: { page },
    });

    this.setState({
      stars: [...stars, ...data],
      page,
      loading: false,
      refreshing: false,
    });
  };

  loadMore = () => {
    let { page } = this.state;
    this.load(++page);
  };

  refreshList = async () => {
    this.setState({ refreshing: true, stars: [] }, this.load);
  };

  handleNavigate = repository => {
    const {
      navigation: { navigate },
    } = this.props;

    navigate('Repository', { repository });
  };

  render() {
    const {
      navigation: { getParam },
    } = this.props;
    const user = getParam('user');
    const { stars, loading, refreshing } = this.state;
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <Loading />
        ) : (
          <Stars
            onRefresh={this.refreshList}
            refreshing={refreshing}
            data={stars}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleNavigate(item)}>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
