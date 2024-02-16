import Neon from "../components/Neon";
import officersText from "../assets/images/officers_text.png";

interface Person {
  name: string;
  picture: string;
  position: string;
  quote?: string;
}

interface HeaderProps {
  title?: string;
  description?: string;
}

interface BodyProps {
  people: Person[];
}

/* List of officers */
const OFFICERS: Person[] = [
  {
    name: "NAME NAME NAME NAME",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
    quote:
      "Lorem ipsum dollar sit a a ame, consectetur adipiscing elit sed do eiustempor.",
  },
  {
    name: "NAMAE NAMAE NAMAE NAMAE",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
    quote:
      "gwikakshdfc9woeafcj9w7oe8hrf9ub r13q8iwdhsd812 qgrf9cwo 3yrfj29o8ery fu9w8efhaksjf",
  },
  {
    name: "NAMIE NAMIE NAMIE",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
    quote:
      "e qwasiYFdcge79f fg9eayf ef qrlaguwfd9wt7e fgogh294 gfwu gfsl hf2iwf g9w8f y2y 3hr8",
  },
  {
    name: "NAME NAME NAME NAME",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
    quote:
      "zxzxzxzxz xz x zx zx z x zx z xzx z x z x z x z  zx z xzhxiusgdisagd iwefhe uifhwiehf",
  },
  {
    name: "NAME NAME NAME NAME",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
    quote:
      "Lorem ipsum dollar sit a a ame, consectetur adipiscing elit sed do eiustempor.",
  },
  {
    name: "NAME NAME NAME NAME",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
    quote:
      "Lorem ipsum dollar sit a a ame, consectetur adipiscing elit sed do eiustempor.",
  },
];

const ARCHIVED: Person[] = [
  {
    name: "NAME NAME NAME NAME",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
  },
  {
    name: "NAME NAME NAME NAME",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
  },
  {
    name: "NAME NAME NAME NAME",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
  },
  {
    name: "NAME NAME NAME NAME",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
  },
  {
    name: "NAME NAME NAME NAME",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
  },
  {
    name: "NAME NAME NAME NAME",
    picture: "src/assets/images/picture.png",
    position: "POSITION",
  },
];

const Officers = () => {
  return (
    <div className="py-5">
      {/* Current officers */}
      <Header title="CURRENT" description="SCHOOL YEAR 2023-2024" />
      <Body people={OFFICERS} />

      {/* Add some space in between */}
      <div className="py-6"></div>

      {/* Archived Officers */}
      <Header title="ARCHIVED" />
      <Body people={ARCHIVED} />
    </div>
  );
};

const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className="w-full text-center font-lovelo">
      {title && (
        <div className="mx-auto max-w-5xl text-5xl tracking-widester">
          <Neon>{title}</Neon>
        </div>
      )}
      <div className="my-4 bg-[#1D1432] p-5">
        <img src={officersText} className="mx-auto w-[1000px]" />
      </div>
      {description && (
        <div className="mx-auto max-w-5xl text-3xl tracking-widester">
          {description}
        </div>
      )}
    </div>
  );
};

const Body = ({ people }: BodyProps) => {
  return (
    <div className="mx-auto max-w-[1000px] text-center">
      {people.map((person) => (
        <Card
          name={person.name}
          picture={person.picture}
          position={person.position}
          quote={person.quote}
        />
      ))}
    </div>
  );
};

const Card = ({ name, picture, position, quote }: Person) => {
  return (
    <div className="m-4 inline-block w-full max-w-[300px] overflow-hidden align-top">
      <div className="bg-ter rounded px-2 py-5">
        <img className="w-full rounded border-4 border-black" src={picture} />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 font-bebas text-2xl font-bold tracking-widester">
          {name}
        </div>
        <div className="mb-2 font-bebas text-xl tracking-widester">
          {position}
        </div>
        {quote && (
          <p className="text-left font-kollektif text-lg font-bold">
            &ldquo;{quote}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
};

export default Officers;
