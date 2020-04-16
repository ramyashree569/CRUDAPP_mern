import React from 'react';
//import logo from './logo.svg';
import './App.css';
import PostMessages from './components/PostMessages';
import PostMessageForm from './components/PostMessageForm';
import {Provider} from "react-redux";
import {store} from "./actions/store";
import {Container, AppBar,Typography} from '@material-ui/core';
import { typography } from '@material-ui/system';
import ButterToast ,{POS_CENTER,POS_BOTTOM} from "butter-toast";



function App() {
  return (
    <div>
    <Provider store={store}>
    <Container maxWidth ="lg">
      <AppBar position="static" color="inherit">
        <Typography
        variant="h2"
        align="center">
          Post Box
        </Typography>
      </AppBar>
    <PostMessages/>
    <ButterToast position={{vertical:POS_BOTTOM,horizontal:POS_CENTER}}></ButterToast>
    </Container>
    </Provider>
    
    </div>
  );
}

export default App;
