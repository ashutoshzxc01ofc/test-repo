interface cardsProps {
  text_content: string;
  text_heading: string;
  icon: any;
}

const Card: React.FC<cardsProps> = (props) => {
  return (
    <div className="w-full h-auto sm:h-[380px] gap-2.5 p-6 sm:p-[20px] rounded-large flex flex-col items-start overflow-hidden backdrop-blur-[26.4px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(26.4px)_brightness(100%)] [background:linear-gradient(180deg,rgba(52.17,48.88,102,0.17)_0%,rgba(41.22,38.61,83.94,0.78)_49.65%,rgba(27.04,24.82,66.94,0.71)_100%)] border border-solid border-transparent hover:border-orange-500 hover:overflow-hidden">
      <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-auto h-[80px] mt-[-12.00px] ml-[-10px]"
          alt="Ract"
          src={props.icon}
        />

        <div className="flex flex-col my-4 items-start gap-[5px] relative w-full flex-[0_0_auto]">
          <div className="relative mt-[-1.00px] font-opensans font-semibold text-white text-xl tracking-[0] leading-[normal]">
            {props.text_heading}
          </div>

          <p className="relative font-opensans font-thin text-left text-white text-sm tracking-[0] leading-loose">
            {props.text_content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
