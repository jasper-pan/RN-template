import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { SearchBar, Header, Input,ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const DetailPage: any = (props: any) => {
    const [search, setSearch] = useState('world')
    const updateSearch = (search: any) => {
        setSearch(search);
    };
    const list = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        }
        
      ]
    return (
        <View  >
            
            <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
            <Input
                placeholder='INPUT WITH ICON'
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            />

            <Input
                placeholder='INPUT WITH CUSTOM ICON'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
            />
            {
    list.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider
      />
    ))
  }
        </View>
    );
}
export interface navigationProps {
    navigation: navigationOptionType
}
export interface navigationOptionType {
    [x: string]: any;
    getParam: (a: string, b?: string) => void

}
DetailPage.navigationOptions = (props: navigationProps) => {

    return {
        title: '飞行'
    }

};

export default DetailPage;