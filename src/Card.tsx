interface cardsProps {
    text_content : string;
    text_heading : string;    
    icon : any;  
}
  
const Card : React.FC<cardsProps>= (props) => {
    return (
      <div className="w-[32%] h-2/12 gap-2.5 p-[25px]  rounded-large flex flex-col items-start  overflow-hidden backdrop-blur-[26.4px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(26.4px)_brightness(100%)] [background:linear-gradient(180deg,rgba(52.17,48.88,102,0.17)_0%,rgba(41.22,38.61,83.94,0.78)_49.65%,rgba(27.04,24.82,66.94,0.71)_100%)]">
        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-auto h-[74px] mt-[-12.00px] ml-[-12.00px]"
            alt="Ract"
            src={props.icon}
          />
  
          <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal]">
              {props.text_heading}
            </div>
  
            <p className="relative self-stretch [font-family:'Open_Sans-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[26px]">
              {props.text_content}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
