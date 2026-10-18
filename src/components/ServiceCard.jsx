import { Link } from "react-router-dom";
import {
  FileText, MapPin, IndianRupee, FileCheck, Home, CreditCard,
  BookOpen, Plane, Briefcase, GraduationCap, ClipboardList,
  PenSquare, Upload, ScanLine, Printer, Square, FileUser,
  Mail, Vote, IdCard
} from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

// Icon map — maps string names from services data to Lucide components
const iconMap = {
  FileText,
  MapPin,
  IndianRupee,
  FileCheck,
  Home,
  CreditCard,
  BookOpen,
  Plane,
  Briefcase,
  GraduationCap,
  ClipboardList,
  PenSquare,
  Upload,
  ScanLine,
  Printer,
  Square,
  FileUser,
  Mail,
  Vote,
  IdCard,
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || FileText;

  return (
    <article className="service-card" aria-label={service.title}>
      <div className="service-card-header">
        <div className="service-card-icon" aria-hidden="true">
          <IconComponent size={22} />
        </div>
        <div className="service-card-meta">
          <h3 className="service-card-title">{service.title}</h3>
        </div>
      </div>

      <p className="service-card-description">{service.shortDescription}</p>

      <div className="service-card-footer">
        <Link
          to={`/services/${service.slug}`}
          className="btn btn-secondary"
          aria-label={`View details for ${service.title}`}
        >
          View Details
        </Link>
        <WhatsAppButton
          serviceName={service.title}
          label="WhatsApp"
          size="sm"
        />
      </div>
    </article>
  );
}
