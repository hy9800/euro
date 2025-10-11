"use client";

import { usePopupStore } from "@/store/popup-store";
import dynamic from "next/dynamic";
import AlertPopup from "./alert";

// ✅ Dynamic imports with loading states - reduces initial bundle by ~55KB
const ContactPopup = dynamic(() => import("./contact"), {
  loading: () => null,
  ssr: false,
});

const DownloadPopup = dynamic(() => import("./download"), {
  loading: () => null,
  ssr: false,
});

const InquirePopup = dynamic(() => import("./inquire"), {
  loading: () => null,
  ssr: false,
});

const JoinPopup = dynamic(() => import("./join"), {
  loading: () => null,
  ssr: false,
});

const RegisterPopup = dynamic(() => import("./register"), {
  loading: () => null,
  ssr: false,
});

export default function PopupProvider() {
  const {
    isContactOpen,
    isDownloadOpen,
    isInquireOpen,
    isJoinOpen,
    isRegisterOpen
  } = usePopupStore();

  return (
    <>
      {isContactOpen && <ContactPopup />}
      {isDownloadOpen && <DownloadPopup />}
      {isInquireOpen && <InquirePopup />}
      {isJoinOpen && <JoinPopup />}
      {isRegisterOpen && <RegisterPopup />}
      <AlertPopup />
    </>
  );
}
