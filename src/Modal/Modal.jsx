import {Button, Modal,Container, Image} from "react-bootstrap";
import image from "../lucas.png";
import classes from "./Modal.module.css"

export const Modal1 = (props) =>   {
    
    return (

    <Modal className={classes.modal} centered open={true}  {...props} style={{ borderRadius:"20px"}} >
      <Modal.Header style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }} >
        <Modal.Title  className={classes.modalTitle}>
            Check Out
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
      <Container style={{
          display: "flex",
          flexDirection:"column"
        }} > 
        <Container style={{
          display: "flex",
          justifyContent:"space-between"
        }} >
          <div
            className={classes.textTitle}
     
            >
              Item
            </div>
            <div
             className={classes.textTitle}
            >
              Subtotal
            </div>
      
        </Container>
        <Container style={{
          display: "flex",
          justifyContent:"space-between",
          margin:"35px 0"
        }} >
        <div style={{
          display: "flex"}}>
        <Image src={image}/>
        <Container style={{
          display: "flex",
          flexDirection:"column",
          padding:"15px"
        }}>
            <div   className={classes.cardTitle}>Mia Ayana</div>
            <div   className={classes.cardSub}>
              Abstract Smoke Red Blue  
            </div>
        </Container> 
        </div>
        <div  style={{
          display: "flex"}}>
            <p
            className={classes.num}    
            >
             4.5&nbsp;  
         
            <span
             className={classes.unit}    
            >
             ETH 
            </span>
          </p>
        </div>
        </Container>
        <Container style={{
          display: "flex",
          justifyContent:"space-between",
         
        }} >
          <div
           className={classes.textTitle}
     
            >
              Total
            </div>
         <div  style={{
          display: "flex"
          }}>
            <p
            className={classes.num}    
            >
             4.5&nbsp;  
         
            <span
             className={classes.unit}    
            >
             ETH 
            </span>
          </p>
       </div>
        </Container>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding:"30px"
        }}>
         <Button 
            className={classes.buttonConfirm}
            onClick={props.onHide}>Checkout</Button>    
         <Button className={classes.buttonCancel}
            onClick= {props.onHide}>Cancel</Button>    
      </Modal.Footer>
    </Modal>
    );
    
}
