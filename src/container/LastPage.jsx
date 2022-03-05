import React from "react";
import { Container, Image, Form, Button } from "react-bootstrap";
import image from "./img.svg";
import imageDark from "./img-dark.svg";
import "./page.css";

export const LastPage = ({ dark }) => {
  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h1 className="h1">Create New Item</h1>
      <Form>
        <h4 className="h3 mt-4">Upload File</h4>
        <input type="file" id="imgupload" style={{ display: "none" }} />
        <Container
          onClick={() => document.getElementById("imgupload").click()}
          className="c1 d-flex flex-column align-items-center"
        >
          <div className="t1 text-center">
            JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.
          </div>
          <Image
            src={dark ? imageDark : image}
            style={{ width: "8em", height: "8em" }}
            fluid
          />
          <div className="t1 d-flex flex-column align-items-center">
            Drag and Drop File <br />
            <div>
              <span className="sp-1">or </span>
              browse media on your device
            </div>
          </div>
        </Container>
        <Form.Group className="mb-5 mt-4" controlId="formBasic">
          <Form.Label className="h3">Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-5 mt-4" controlId="formBasic">
          <Form.Label className="h3">Password</Form.Label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Description of your team"
          ></textarea>
        </Form.Group>

        <Form.Label className="h3">Price</Form.Label>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control bd-r"
            aria-label="Text input with dropdown button"
            placeholder="Enter Price"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary dropdown-toggle drop-btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              ETH
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Dollar
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Rupees
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Yen
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-end mb-3">
          <Button variant="primary" type="submit">
            Create Item
          </Button>
        </div>
      </Form>
    </Container>
  );
};
