import Neon from "../components/Neon";
import officersText from "../assets/images/officers_text.png";

const Officers = () => {
  return (
    <div className="py-5">
      {/* Header */}
      <div className="w-full text-center font-lovelo">
        <div className="tracking-widester mx-auto max-w-5xl text-5xl">
          <Neon>CURRENT</Neon>
        </div>
        <div className="my-4 bg-[#1D1432] p-5">
          <img src={officersText} className="mx-auto w-[750px]" />
        </div>
        <div className="tracking-widester mx-auto max-w-5xl text-3xl">
          SCHOOL YEAR 2023-2024
        </div>
      </div>

      {/* Body */}
    </div>
  );
};

export default Officers;
