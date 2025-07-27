import { Modal } from "@/shared/ui/Modal/Modal.tsx";

interface ConfirmDenyModalProps {
  isOpen: boolean;
  setIsOpen: (payload: boolean) => void;
  denyDocument: () => void;
}

export const ConfirmDenyModal = (props: ConfirmDenyModalProps) => {
  const { setIsOpen, isOpen, denyDocument } = props;
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <h2 className="text-base font-ubuntu font-bold mb-4 text-[#1C1C1E]">Deny application</h2>
      <p className="font-ubuntu font-medium text-[#1A202C] mb-9">
        You exactly sure, you want to cancel this application?
      </p>
      <div className="flex justify-end gap-10">
        <button
          onClick={denyDocument}
          className="bg-[#D93737CC] block cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-all font-bold hover:opacity-50 disabled:opacity-50 text-white py-3 px-6 leading-none font-ubuntu rounded-lg"
        >
          Deny
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-[#003CFF] block cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-all font-bold hover:bg-[#7796C0] disabled:bg-[#7796C0] disabled:cursor-auto text-white py-3 px-6 leading-none font-ubuntu rounded-lg"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};
