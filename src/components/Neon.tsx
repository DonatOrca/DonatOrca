import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Neon = ({ children }: Props) => {
  return <span className="text-neon">{children}</span>;
};

export default Neon;
