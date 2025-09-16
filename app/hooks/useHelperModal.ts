import { useState } from "react";
import { ServiceMode } from "../constants/ServiceModes";

export interface HelperModalProps {
  serviceMode: ServiceMode;
  onNavigateToHelper: () => void;
}

export const useHelperModal = (
  serviceMode: ServiceMode,
  onNavigateToHelper?: () => void
) => {
  const [showHelperModal, setShowHelperModal] = useState(false);
  const [dontAskAgain, setDontAskAgain] = useState(false);
  const [isHelper, setIsHelper] = useState(false);

  const handleJoinHelper = () => {
    setShowHelperModal(false);
    setIsHelper(true);
    onNavigateToHelper?.();
  };

  const handleLater = () => {
    setShowHelperModal(false);
  };

  const shouldShowModal =
    showHelperModal && !dontAskAgain && !isHelper && serviceMode === "PW";

  return {
    showHelperModal,
    dontAskAgain,
    shouldShowModal,
    isHelper,
    setDontAskAgain,
    setIsHelper,
    handleJoinHelper,
    handleLater,
  };
};

export default useHelperModal;
