import React, { useEffect, useState } from 'react';
import {
    StatusBar
} from 'react-native';
import { Modal } from '../../components/oj-toast/toast'
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
const HomeScreen = (props: any) => {
    const [isShowing, setShow] = useState(false)
    const toggle = () => {
        setShow(!isShowing)
    }
    console.log(isShowing)
    return (
        <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => props.navigation.navigate("Details")}>
            <Text>Chat With People</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => props.navigation.navigate("My")}>
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
}

HomeScreen.navigationOptions = {
    title: '首页',
};

export default HomeScreen;