import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React, { Component } from 'react';
import { View, Text, FlatList, Button} from 'react-native';
import {fetchMoreMovies} from './../actions/index';
import MovieItem from './movieItem.component';

class MoviesComponent extends React.Component {

  constructor(props) {
        super(props);

        this.props.fetchMoreMovies(1);
        this.state={
          page: 1
        }
        
    }

_addOrRemoveFromLikes(item, isAdd) {
  this.props.Movies.map(function(movie) {
    if(movie.id == item.id) {
      movie.isLiked = isAdd;
      return movie;
    }
  })
}

  renderMovieItem = (item) => {
    return <MovieItem addOrRemoveFromLikes={this._addOrRemoveFromLikes.bind(this)} item={item}/>
  }
 handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.props.fetchMoreMovies(this.state.page);
    });
  };
   // <Button
            //     onPress={this.handleLoadMore}
            //     title="Next"
            //     color="#223322"
            //   />
    render() {
      alert("a");
        return (

           	<View style={styles.container}>
           
                <FlatList
                  data={this.props.Movies}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) =>
                  <MovieItem addOrRemoveFromLikes={this._addOrRemoveFromLikes.bind(this)} item={item}/>
                
                  }
                  keyExtractor={item => ""+item.id}
                  onEndReached={this.handleLoadMore}
                
        /> 

            </View>  
        );
    }
}

function mapStateToProps({Movies}) {
	return {
		Movies
	}
}

function mapDispatchToPrpos(dispatch) {
    return bindActionCreators({fetchMoreMovies}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPrpos)(MoviesComponent);

const styles = ({
    container:{
        flex: 1,
        backgroundColor: 'transparent'
    }
});