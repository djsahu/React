import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import './trystyle.css';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid'

class Try extends React.Component{
    render(){
        return(
            <div className='contain-all'>
                <AppBar style={{height:40, borderRadius: '1px'}} position="static">
                    <Toolbar>
                    <Typography style={{marginBottom:20}} variant="h6" noWrap>
                        Chat Room
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Container fluid className='contain-rows'>
                <div class="bg-image"></div>
                <Row>
                    <Col className='search-bar' sm={3} lg={3}>
                    <form>
                    <input className='search' type="text" name="search" placeholder=' Search...'/>
                    </form>
                    </Col>
                    <Col style={{ fontSize: 18, textAlign:"center", marginBottom: '20px', paddingTop: '10px'}} sm={9} lg={9}><b>User-Room</b></Col>
                </Row>
                <Row>
                    <Col style={{height:425}} className='room-list' sm={3} lg={3}>
                        <div className='room-content'>
                        <div>1 of 1</div>
                        <div>1 of 2</div>
                        <div>1 of 3</div>
                        </div>
                    </Col>
                <Col className='chat-view' sm={8}lg={9} >
                    <div className='sender'>
                    <div class="talk-bubble tri-right round right-in">
                        <div class="talktext">
                            <p className='user'><b>Aindil</b></p>
                            <p>Moving our way back up the right side indented. Uses .round and .right-in</p>
                            <p style={{fontSize: 12, float:'right', right: 5, marginBottom: 5}}>10:00pm</p>
                        </div>
                    </div>
                    </div>
                    <div class='reciever'>
                    <div class="talk-bubble tri-right round right-in">
                        <div class="talktext">
                            <p className='user'><b>Devraj</b></p>
                            <p>This talk-bubble uses .left-in class to show a triangle on the left slightly indented. Still a blocky square.</p>
                            <p style={{fontSize: 12, float:'right', right: 5, marginBottom: 5}}>10:05pm</p>
                        </div>
                        </div>
                    </div>
                    <div className='sender'>
                    <div class="talk-bubble tri-right round right-in">
                        <div class="talktext">
                            <p className='user'><b>Aindil</b></p>
                            <p>Moving our way back up the right side indented. Uses .round and .right-in</p>
                            <p style={{fontSize: 12, float:'right', right: 5, marginBottom: 5}}>10:00pm</p>
                        </div>
                    </div>
                    </div>
                    <div class='reciever'>
                    <div class="talk-bubble tri-right round right-in">
                        <div class="talktext">
                            <p className='user'><b>Devraj</b></p>
                            <p>This talk-bubble uses .left-in class to show a triangle on the left slightly indented. Still a blocky square.</p>
                            <p style={{fontSize: 12, float:'right', right: 5, marginBottom: 5}}>10:05pm</p>
                        </div>
                        </div>
                    </div>
                </Col>
                </Row>
                <Row>
                    <Col className='room-form' sm={3} lg={3}>
                        <Button style={{width: '100%', height: 50}} variant="outlined" color="primary">
                            CreateRoom +
                        </Button>
                    </Col>
                    <Col xs={8} sm={8} className='chat-message'>
                        <div>
                            <textarea style={{width: '100%', borderRadius: 20, borderColor: 'rgb(103, 103, 235)'}} name="message-to-send" id="message-to-send" placeholder ="   Type your message...." rows="2"></textarea>
                        </div> 
                    </Col>
                    <Col class='send-message' xs={2} sm={1}><Button style={{marginTop: 8}} type='submit' value='Send' color="primary" variant="contained" >
                        Send
                    </Button>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }

}

export default Try;