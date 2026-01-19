import AccordionItem from "./AccordionItem";

export default function Accordion({data}){

    return (
      <div className="accordion">
        {data.map((ite,i) =><AccordionItem title={ite.title} text={ite.text} num={i} key={ite.title}/>)}
      </div>
    )
}