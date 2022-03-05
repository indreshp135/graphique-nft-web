import React from "react";
import { Container, Image, Form, Button } from "react-bootstrap";
import image from "./img.svg";
import './page.css'

export const LastPage = () => {
    return (
        <Container style={{maxWidth:"500px"}}>
            <h1 className="h1">Create New Item</h1>
            <Form>
            <h4 className="h3 mt-4">Upload File</h4>
            <Container className='c1 d-flex flex-column align-items-center'>
                
                <div className="t1 text-center">
                    JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.
                </div>
                <Image src={image} style={{width:"8em", height:"8em"}} fluid />
                <div className="t1 d-flex flex-column align-items-center">
                    Drag and Drop File <br/>
                    <div>
                    <span className="sp-1">or </span> 
                    browse media on your device
                    </div>
                </div>
                
            </Container >
            
                <Form.Group className="mb-5 mt-4" controlId="formBasic">
                    <Form.Label className="h3">Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-5 mt-4" controlId="formBasic">
                    <Form.Label className="h3">Password</Form.Label>
                    <textarea className="form-control" rows="5" placeholder="Description of your team"></textarea>
                </Form.Group>
                <Form.Group className="mb-5 mt-4" controlId="formBasicEmail">
                    <Form.Label className="h3">Price</Form.Label>
                    <Form.Control type="email" placeholder="Enter price" />
                </Form.Group>
                <div className="d-flex justify-content-end mb-3">
                <Button variant="primary" type="submit">
                    Create Item
                </Button>
                </div>
            </Form>
        </Container>
    );
}
