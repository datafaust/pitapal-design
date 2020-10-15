import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert,
        ActivityIndicator, TouchableOpacity,
         Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import upload from '../assets/file_upload.png';
import ignoreWarnings from 'react-native-ignore-warnings';

ignoreWarnings('Setting a timer');
class previewScreen extends Component {

    componentDidMount() {
        console.log('fetching test api...')
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))  
       }

    //data.append('file', this.state.selectedFile);
    //data.append('filename', this.state.selectedFile.name);

    handleUploadImage=(photo)=> {
        console.log('attempting to send...',photo.uri)
        const data = new FormData();
        //data.append('name', 'testName.jpg'); // you can append anyone.
        data.append('photo', {
        uri: photo.uri,
        type: 'image/jpg', // or photo.type
        name: 'testPhotoName.jpg'
        });
        console.log(data);
        fetch('https://plateimage.metis-data.site/upload', {
        method: 'post',
        body: data
        }).then(res => {
        console.log(res)
        });
    }
    
    render() {
        //console.log(this.props.reducer.scan);
        //console.log('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fplatescanner-f49a8785-f3ac-4e4e-b8b5-d301d3f66403/Camera/22866dc7-dba2-4dae-92f6-331b00e2eae5.jpg')
        const data = this.props.navigation.getParam('data');

        //console.log(data.uri);
        return (
            <View >
                <Image 
                    style={{width: '100%', height: '100%'}}
                    source={{
                        uri: data.uri
                        //require('../assets/flip.png')
                    }}/>
                <View style={{position: 'absolute',
                              marginTop: '130%',
                              marginLeft: '45%'
                              }}>
                    <TouchableOpacity 
                        onPress={()=>this.handleUploadImage(data)}
                            style={{
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:35,
                            height:35,
                            backgroundColor:'#fff',
                            borderRadius:50
                            }}>
                        <Image source={upload}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    const { reducer } = state
    return { reducer }
};

const mapDispachToProps = dispatch => {
    return {
      pullUser: () => dispatch({ type: "GET_USER_DATA", value: false}),
    };
};
  
export default connect(mapStateToProps,mapDispachToProps)(
    previewScreen
    )