import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({data}){
  const[curOpen,setCurOpen] = useState(null)
    return (
      <div className="accordion">
        {data.map((ite,i) =><AccordionItem curOpen={curOpen} onOpen={setCurOpen} title={ite.title} num={i} key={ite.title}>{ite.text}</AccordionItem>)}
      </div>
    )
}