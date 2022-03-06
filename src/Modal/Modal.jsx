import { Modal, Container, Image } from "react-bootstrap";
import React from "react";
import image from "../lucas.png";
import classes from "./Modal.module.css";

export const CheckModal = props => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  });
  return (
    <Modal
      className={classes.modal}
      centered={!isMobile}
      id={!isMobile ? "" : "checkModalMobile"}
      open={true}
      onHide={props.onHide}
      show={props.show}
      style={{
        borderColor: "transparent",
        backgroundColor: "transparent",
        borderRadius: "20px",
      }}
    >
      <Modal.Header
        className={props.dark ? classes.dark_modal : ""}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Modal.Title className={classes.modalTitle}>Check Out</Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={props.dark ? `${classes.dark_modal} show-grid` : "show-grid"}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className={classes.textTitle}>Item</div>
            <div className={classes.textTitle}>Subtotal</div>
          </Container>
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "35px 0",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <Image src={image} />
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "15px",
                }}
              >
                <div className={classes.cardTitle}>Mia Ayana</div>
                <div className={classes.cardSub}>Abstract Smoke Red Blue</div>
              </Container>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <p className={classes.num}>
                4.5&nbsp;
                <span className={classes.unit}>ETH</span>
              </p>
            </div>
          </Container>
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className={classes.textTitle}>Total</div>
            <div
              style={{
                display: "flex",
              }}
            >
              <p className={classes.num}>
                4.5&nbsp;
                <span className={classes.unit}>ETH</span>
              </p>
            </div>
          </Container>
        </Container>
      </Modal.Body>
      <Modal.Footer
        className={props.dark ? classes.dark_modal : ""}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <button
          onClick={props.onOpen}
          className={`${classes.buttonCancel} btn-primary`}
        >
          {" "}
          Checkout
        </button>
        <button
          onClick={props.onHide}
          className={`${classes.buttonCancel} btn-btn`}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};
