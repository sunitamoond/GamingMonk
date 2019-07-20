
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';


export default class MovieItemComponent extends React.Component {

    constructor(props) {
        super(props);
        
        var movie = this.props.item;
        var bool = false;
        var color = 'grey';
        if(this.props.item != undefined && this.props.item.isLiked != undefined) {
            bool = this.props.item.isLiked;
            if(bool) {
                color = 'red';
            }
        }
        this.state = {
            myDynamicColor: color,
            boolValue: bool
        }
    }

changeColor(bool){
  if(bool === false)
  {
    this.setState({
      myDynamicColor: 'red',
      boolValue: !bool
    })
  }if(bool === true)
  {
    this.setState({
      myDynamicColor: 'grey',
      boolValue: !bool,
    })
  }
  this.props.addOrRemoveFromLikes(this.props.item, !bool);
}
   

  _addToLike() {
    this.changeColor(this.state.boolValue);
  }
    render() { 
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.item.title}</Text>
                <Image style={styles.image} source={{uri: "http://image.tmdb.org/t/p/w185/"+this.props.item.poster_path}}/>
                <Text style={styles.overview}>{this.props.item.overview}</Text>
                <TouchableOpacity onPress={this._addToLike.bind(this)}>
                    <Image source={require('./../assets/images/heart-icon.png')} style={[styles.heartImage, {tintColor: this.state.myDynamicColor}]} />
                </TouchableOpacity>
            </View>
           
        )
    }
    static defaultProps = {
        item: {}
    }
}


const styles = ({
    container: {
        justifyContent: 'center',
        paddingTop: 10,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'black',
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        fontFamily: 'Verdana',
        fontSize: 18,
        marginBottom: 10
    },
    overview: {
        color: 'black'
    },
    image: {
        height: 400,
        marginBottom: 10,
        resizeMode: 'cover'
    },
    heartImage: {
        backgroundColor: 'transparent', 
        height: 40,
        width: 40,
        marginTop: 5,
        marginLeft:5,
        justifyContent: 'center',
        resizeMode: 'contain'
  }
});