import { Col, Container, Image, Row, Button } from "react-bootstrap";
import classes from "./Item.module.css";
import image from "../lucas.png";
import girl from "../girl.png";

export const ItemPage = () => {

    return (
        <Container>
            <Row>
            <Col className='d-flex justify-content-evenly'>
                <Image width="575px" fluid className='m-5 br-20 width-575px' src={image}/>
            </Col>
            <Col className='m-5 br-20 '>
                <p className={classes.textTitle}>Abstact Smoke Red Blue</p>
                <p className={classes.textSub}>From &nbsp;
                <span className={classes.textSubBold}>4.5 ETH &nbsp;</span>
                20 of 25 available
                </p>
                <p className={classes.textMini}>Creator</p>
                
                <div style={{
                display: "flex"}}>
            <Image className={classes.girl} src={girl}/>
                <Container style={{
                display: "flex",
                flexDirection:"column",
                textAlign:"center"
                }}>
                    <p className={classes.textSubBold}>
                        Mia Ayana</p>
                    </Container>
                </div>
             
                <div style={{
                display: "flex",
                flexDirection:"row",
                flexFlow:"nowrap",
                gap: "25px",
                marginTop:"26px",
                }}>
               <p className={classes.p} style={{fontWeight:"600"}}>Details</p> 
               <p className={classes.p}>Offers</p> 
               <p className={classes.p}>History</p> 
         
            </div>
            <div style={{
          display: "flex",
          flexDirection:"row",
          marginBottom:"30px"
          }}>
            <div className={classes.line}/>
            <div className={classes.lineSelect}/>
            </div>
            <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>  
            <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding:"30px"
        }}>
         <Button 
            className={classes.buttonConfirm}
            > Buy for 4.5 ETH</Button>    
         <Button className={classes.buttonCancel}
         >Cancel</Button>  
            </div>
            </Col>

            </Row>
        </Container>
    )
}