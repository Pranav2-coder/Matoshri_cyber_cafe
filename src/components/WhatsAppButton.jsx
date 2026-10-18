import { buildWhatsAppUrl, defaultMessage, serviceMessage } from "../utils/whatsapp";
import { MessageCircle } from "lucide-react";

/**
 * WhatsApp button component.
 * Props:
 *   - serviceName: optional, to pre-fill a service-specific message
 *   - label: button text
 *   - size: "sm" | "md" (default)
 *   - className: additional CSS classes
 */
export default function WhatsAppButton({
  serviceName = null,
  label = "Enquire on WhatsApp",
  size = "md",
  className = "",
}) {
  const message = serviceName ? serviceMessage(serviceName) : defaultMessage();
  const url = buildWhatsAppUrl(message);

  if (!url) {
    return (
      <span className="wa-disabled" title="WhatsApp not configured yet">
        <MessageCircle size={14} />
        <span>WhatsApp (setup pending)</span>
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-btn ${size === "sm" ? "wa-btn-sm" : ""} ${className}`}
      aria-label={serviceName ? `Enquire about ${serviceName} on WhatsApp` : "Contact on WhatsApp"}
    >
      <MessageCircle size={size === "sm" ? 14 : 16} aria-hidden="true" />
      {label}
    </a>
  );
}
