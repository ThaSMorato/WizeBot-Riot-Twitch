import React, { useState } from 'react';
import {Card, Modal, Button, InputGroup, FormControl, Form, Popover , OverlayTrigger} from 'react-bootstrap'

import './styles/LoginViewStyle.css'
import RiotLogo from '../assets/riot.jpg'
import TwitchLogo from '../assets/twitch.png'
import WizeBotLogo from '../assets/wizebot.png'

export default function LoginView(){
    /**
     * TODO:
     * Validar aqui o email e a senha
     * Abrir Modal no click das imagens
     * Gravar um Video explicando como pegar as keys
     * Remember-me
     */
    const [show, setShow ] = useState(false);

    const handleClose= () => setShow(false);
    const handleShow= () => setShow(true);

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">How to get?</Popover.Title>
            <Popover.Content>
                Click on the Wize Bot Icon to watch a video about it
            </Popover.Content>
        </Popover>
    );

    return (
        <div id='login-page'>
            <div className='content-wrapper'>

                <div className="logos">
                    <a href="#">
                        <img src={RiotLogo} alt='Riot Logo' className="logo-image" />
                    </a>
                    <a href="#">
                        <img src={WizeBotLogo} alt='WizeBot Logo' className="logo-image" />
                    </a>
                    <a href="#">
                        <img src={TwitchLogo} alt='Twitch Logo' className="logo-image" />
                    </a>
                </div>

                <main className='d-none d-lg-block'>
                    <h1>Lorem Ipsulum dolor sit amet, consect</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate quis illum at a optio similique. 
                    Veniam, totam sapiente voluptatem modi minus expedita. 
                    Tempora vero, optio corrupti suscipit officia eos aliquid!
                    </p>
                </main>

                <aside className='panel-login'>
                    <Card className='p-2'>
                        <Card.Title>Login</Card.Title>
                        <Card.Body>
                            <InputGroup className='mb-2'>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className="login-input-group">Login</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl placeholder="Email"></FormControl>
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className="login-input-group">Password</InputGroup.Text>
                                </InputGroup.Prepend>
                            <FormControl placeholder="********" type="password"></FormControl>
                            </InputGroup>

                            <Form.Group className="mt-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember-me" />
                            </Form.Group>

                            <Button className="float-right mt-1" variant='success'>Login</Button>
                            <Button onClick={handleShow} className="float-Left mt-1" variant='primary'>Sing Up</Button>
                        </Card.Body>
                    </Card>
                </aside>

            </div>

            <Modal 
            show={show} 
            onHide={handleClose}
            backdrop="static"
            centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sing Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className='mb-2'>
                        <InputGroup.Prepend>
                            <InputGroup.Text className="login-input-group">Login</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="Email"></FormControl>
                    </InputGroup>
                    <InputGroup className='mb-2'>
                        <InputGroup.Prepend>
                            <InputGroup.Text className="login-input-group">Password</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="********" type="password"></FormControl>
                    </InputGroup>
                    <InputGroup className='mb-2'>
                        <InputGroup.Prepend>
                            <InputGroup.Text className="login-input-group">Confirm</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="********" type="password"></FormControl>
                    </InputGroup>
                    <InputGroup className='mb-2'>
                        <OverlayTrigger trigger="hover" placement="left" overlay={popover}>
                            <InputGroup.Prepend>
                                <InputGroup.Text className="login-input-group">WizeBot Api</InputGroup.Text>
                            </InputGroup.Prepend>
                        </OverlayTrigger>
                        <FormControl placeholder="API KEY"></FormControl>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save 
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}