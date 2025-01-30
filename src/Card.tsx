interface cardsProps {
    text_content : string;
    text_heading : string;    
    icon : any;  
}
  
const Card : React.FC<cardsProps>= (props) => {
    return (
      <div className="w-[27%] h-[10%] gap-2.5 p-[25px]  rounded-3xl flex flex-col items-start  overflow-hidden backdrop-blur-[26.4px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(26.4px)_brightness(100%)] [background:linear-gradient(180deg,rgba(52.17,48.88,102,0.17)_0%,rgba(41.22,38.61,83.94,0.78)_49.65%,rgba(27.04,24.82,66.94,0.71)_100%)]">
        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-auto h-[40px] mt-[-12.00px] ml-[-4px]"
            alt="Ract"
            src={props.icon}
          />
  
          <div className="flex flex-col items-start gap-[5px] relative min-h-28 w-full flex-[0_0_auto]">
            <div className="relative mt-[-1.00px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-white text-small tracking-[0] leading-[normal]">
              {props.text_heading}
            </div>
  
            <p className="relative  font-sans font-thin text-left text-white text-[11px] tracking-[0] leading-normal">
              {props.text_content}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
