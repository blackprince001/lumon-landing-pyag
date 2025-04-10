import { useState } from "react";
import { Button } from "./ui/button";

const TallyFormModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center p-4 backdrop-blur-md">
      <div className="bg-white rounded-lg relative w-[95vw] md:w-[90vw] lg:w-[85vw] h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg text-3xl text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>
        <div className="absolute inset-0 opacity-30" onClick={onClose}></div>
        <iframe
          src="https://tally.so/r/n9pAx1"
          className="w-full h-full rounded-lg"
          style={{ height: '100%', border: 'none' }}
          title="Tally subscription form"
        />
      </div>
    </div>
  );
};

export default function BudgeAIForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Button
        className="rounded-full bg-green-700 hover:bg-green-600"
        size="lg"
        onClick={() => setIsModalOpen(true)}
      >
        Get Early Access
      </Button>

      <TallyFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
