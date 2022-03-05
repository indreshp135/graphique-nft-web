import {Button, Modal,Container, Image} from "react-bootstrap";
import image from "../lucas.png"

export const Modal1 = (props) =>   {
 
    return (

<<<<<<< HEAD
    <Modal centered open={true}  {...props} aria-labelledby="contained-modal-title-vcenter" style={{ borderRadius:"20px"}} >
=======
    <Modal  {...props} aria-labelledby="contained-modal-title-vcenter" style={{ borderRadius:"20px",width:"600px"}} >
>>>>>>> 71b29f0 (modal)
      <Modal.Header style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }} >
        <Modal.Title  style={{ fontFamily:"poppins", fontWeight:"600", fontSize:"24px", margin:"30px"}}>
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
            style={{ fontFamily:"poppins", fontWeight:"600", fontSize:"16px", margin:"30px , auto"}}
     
            >
              Item
            </div>
            <div
            style={{ fontFamily:"poppins", fontWeight:"600", fontSize:"16px", margin:"30px , auto"}}
          
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
            <div style={{ fontFamily:"poppins", fontWeight:"600", fontSize:"14px", margin:"4px 0"}}>Mia Ayana</div>
            <div style={{fontFamily:"poppins", fontWeight:"normal", fontSize:"14px", margin:"4px 0"}}>
              Abstract Smoke Red Blue  
            </div>
        </Container> 
        </div>
        <div  style={{
          display: "flex"}}>
            <div
            style={{ fontFamily:"poppins", fontWeight:"normal", fontSize:"16px", margin:"30px auto"}}     
            >
             4.5  
            </div>
         
            <div
            style={{ fontFamily:"poppins", fontWeight:"600", fontSize:"16px", margin:"30px auto"}}
            >
             {' '} ETH 
            </div>
        </div>
        </Container>
        <Container style={{
          display: "flex",
          justifyContent:"space-between",
         
        }} >
          <div
            style={{ fontFamily:"poppins", fontWeight:"600", fontSize:"16px", margin:"30px , auto"}}
     
            >
              Total
            </div>
        <div  style={{
          display: "flex"}}>
            <div
            style={{ fontFamily:"poppins", fontWeight:"normal", fontSize:"16px", margin:"30px , auto"}}     
            >
             4.5  
            </div>
            <div
            style={{ fontFamily:"poppins", fontWeight:"600", fontSize:"16px", margin:"30px , auto"}}
            >
             ETH 
            </div>
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
         <Button style={{
             fontWeight:"600",
             fontFamily:"poppins",
             borderColor:"#DA18A3",
             margin: "0px 10px",
             fontSize:"16px",
             width:"140px",
             height:"40px", 
             borderRadius: "10px",
             background: "linear-gradient(101.12deg, #EB1484 27.35%, #C91CC3 99.99%, #C81CC5 100%, #C81CC5 100%)"}}
            onClick={props.onHide}>Checkout</Button>    
         <Button style={{
             fontWeight:"600",
             fontFamily:"poppins",
             borderColor:"#DA18A3",
             margin: "0px 10px",
             fontSize:"16px",
             width:"140px",
             height:"40px", 
             borderRadius: "10px",
             background:"white",
             color: "#DA18A3"}}
<<<<<<< HEAD
             className="btn-bdr"
=======
>>>>>>> 71b29f0 (modal)
            onClick= {props.onHide}>Cancel</Button>    
      </Modal.Footer>
    </Modal>
    );
    
}
