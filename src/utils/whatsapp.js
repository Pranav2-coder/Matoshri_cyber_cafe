// ============================================================
// WhatsApp utility — builds click-to-chat URLs safely
// ============================================================

import { business } from "../data/business";

/**
 * Builds a WhatsApp click-to-chat URL.
 * @param {string} message - Pre-filled message text (plain text, will be encoded).
 * @returns {string|null} - WhatsApp URL or null if not configured.
 */
export function buildWhatsAppUrl(message = "") {
  if (!business.isWhatsappConfigured || !business.whatsappNumber) {
    return null;
  }
  const number = business.whatsappNumber.replace(/\D/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Default greeting message.
 */
export function defaultMessage() {
  return `Hello ${business.name}, I would like to inquire about your services. Please let me know how I can proceed.`;
}

/**
 * Context-aware message for a specific service.
 * @param {string} serviceName
 */
export function serviceMessage(serviceName) {
  return `Hello ${business.name}, I need assistance with ${serviceName}. Please share the current document requirements and next steps.`;
}
