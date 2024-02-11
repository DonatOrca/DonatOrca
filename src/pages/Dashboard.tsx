import { useOutletContext } from "react-router-dom";

import Bylaws from "../components/Constitution";

function Dashboard() {
  const [setModal, setModalVisible] = useOutletContext();

  return (
    <div className="m-4">
      <button
        className="rounded-md bg-txc p-6 font-bebas text-4xl text-bgc"
        onClick={() => {
          setModal({
            header: "CONSTITUTION AND BY-LAWS",
            children: <Bylaws />,
          });
          setModalVisible(true);
        }}
      >
        Bylaws and Constitution
      </button>
    </div>
  );
}

export default Dashboard;
