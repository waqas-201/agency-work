import { MessageSquareIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  phoneNumber: string; // e.g., "923001234567"
  message?: string;
};

const WhatsAppFloatingButton = ({ phoneNumber, message = "" }: Props) => {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${phoneNumber}${message ? `?text=${encodedMessage}` : ""}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed lg:bottom-10 lg:right-10 bottom-6 right-6 z-50 text-white rounded-full  "
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="https://o5z7skcwee.ufs.sh/f/dKulMi8a7hxKsNXf09nH3KzkuwZCTdOJRl2EXpW6i0mA1UQs"
        alt="WhatsApp Icon"
        height={40}
        width={40}

      />
    </a>
  );
};

export default WhatsAppFloatingButton;
