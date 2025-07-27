import { Modal } from "@/shared/ui/Modal/Modal.tsx";
import { useNavigate } from "react-router";

interface SuccessDenyModalProps {
  isOpen: boolean;
  setIsOpen: (payload: boolean) => void;
}

export const SuccessDenyModal = (props: SuccessDenyModalProps) => {
  const { isOpen, setIsOpen } = props;
  const navigate = useNavigate();
  const goHome = () => {
    setIsOpen(false);
    navigate("/");
  };
  return (
    <Modal isOpen={isOpen} onClose={goHome}>
      <h2 className="text-base font-ubuntu font-bold mb-4 text-[#1C1C1E]">Deny application</h2>
      <p className="font-ubuntu font-medium text-[#1A202C] mb-9">Your application has been deny!</p>
      <div className="flex justify-end gap-10">
        <button
          onClick={goHome}
          className="bg-[#003CFF] block cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-all font-bold hover:bg-[#7796C0] disabled:bg-[#7796C0] disabled:cursor-auto text-white py-3 px-6 leading-none font-ubuntu rounded-lg"
        >
          Go home
        </button>
      </div>
    </Modal>
  );
};
