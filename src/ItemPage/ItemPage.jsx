import { Col, Container, Image, Row} from "react-bootstrap";
import classes from "./Item.module.css";
import image from "../lucas.jpg";
import girl from "../girl.png";
import { useState } from "react";
import { CheckModal } from "../Modal/Modal";
import { PaymentModal } from "../Modal/PaymentModal";

export const ItemPage = ({ dark }) => {
  const [index, setIndex] = useState(1);
  const [openCheck, setOpenCheck] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);

  const pay = () => {
    setOpenPayment(true);
    setOpenCheck(false);
  };

  const onClick = (index) => setIndex(index);
  return (
    <Container>
      <Row xxl={12}>
        <Col className="d-flex justify-content-evenly my-5 align-items-center">
          <Image
            width="575px"
            fluid
            className="br-20 width-575px"
            style={{ borderRadius: "20px", maxWidth: "350px" }}
            src={image}
          />
        </Col>
        <Col className="br-20 my-5 ">
          <p className={classes.textTitle}>Abstact Smoke Red Blue</p>
          <p className={classes.textSub}>
            From &nbsp;
            <span className={classes.textSubBold}>4.5 ETH &nbsp;</span>
            20 of 25 available
          </p>
          <p className={classes.textMini}>Creator</p>

          <div
            style={{
              display: "flex",
            }}
          >
            <Image className={classes.girl} src={girl} />
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <p className={classes.textSubBold}>Mia Ayana</p>
            </Container>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexFlow: "nowrap",
              gap: "25px",
              marginTop: "26px",
            }}
          >
            <p
              onClick={() => onClick(1)}
              className={classes.p}
              style={{ fontWeight: "600" }}
            >
              Details
            </p>
            <p onClick={() => onClick(2)} className={classes.p}>
              Offers
            </p>
            <p onClick={() => onClick(3)} className={classes.p}>
              History
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <div className={index === 1 ? classes.line : classes.lineOff} />
            <div className={classes.lineGap} />
            <div className={index === 2 ? classes.line : classes.lineOff} />
            <div className={classes.lineGap} />
            <div className={index === 3 ? classes.line : classes.lineOff} />
            <div className={classes.lineSelect} />
          </div>
          <p className={classes.p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "30px",
              gap: "25px",
            }}
          >
            <button
              onClick={() => setOpenCheck(true)}
              className={`${classes.buttonCancel} btn-primary`}
            >
              {" "}
              Buy for 4.5 ETH
            </button>
            <button className={`${classes.buttonCancel} btn-btn`}>
              Cancel
            </button>
          </div>
        </Col>
      </Row>
      <CheckModal
        dark={dark}
        show={openCheck}
        onOpen={() => pay()}
        onHide={() => setOpenCheck(false)}
      />
      <PaymentModal
        dark={dark}
        show={openPayment}
        onHide={() => setOpenPayment(false)}
      />

    </Container>
  );
};
