import React from "react";
import { PhotoCard } from "../Cards/PhotoCard";
import img from '../../images/abc.png'

export const Deck = (props) => {
  return <>
   <PhotoCard clickable={props.clickable} photo={img} name="Mia Ayana" price="0.5" like={true} likes={10}/>
   <PhotoCard clickable={props.clickable} photo={img} name="Mia Ayana" price="0.5" like={true} likes={10}/>
   <PhotoCard clickable={props.clickable} photo={img} name="Mia Ayana" price="0.5" like={true} likes={10}/>
   <PhotoCard clickable={props.clickable} photo={img} name="Mia Ayana" price="0.5" like={true} likes={10}/>
   <PhotoCard clickable={props.clickable} photo={img} name="Mia Ayana" price="0.5" like={true} likes={10}/>
   <PhotoCard clickable={props.clickable} photo={img} name="Mia Ayana" price="0.5" like={true} likes={10}/>
   <PhotoCard clickable={props.clickable} photo={img} name="Mia Ayana" price="0.5" like={true} likes={10}/>
   <PhotoCard clickable={props.clickable} photo={img} name="Mia Ayana" price="0.5" like={true} likes={10}/>
  </>;
};
