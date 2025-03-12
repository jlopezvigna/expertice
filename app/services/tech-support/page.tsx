import { ServiceFeature } from "@/app/services/_components/ServiceFeature";
import { ServiceHeader } from "@/app/services/_components/ServiceHeader";
import { Headphones, Server, Shield } from "lucide-react";

export default function TechSupportPage() {
  return (
    <main>
      <ServiceHeader
        title="Comprehensive Tech Support"
        description="At Expertice, we offer a range of technology infrastructure support solutions designed to ensure high quality, multi-skilled expertise, fast response times, and the best value for your investment."
        tag="TECH SUPPORT"
      />

      <ServiceFeature
        title="Operations Support"
        description="Our Operations Support Service guarantees the seamless daily operation of your IT infrastructure, following industry best practices. This service includes:"
        imageSrc="/services/woman-call-center.jpg"
        imageAlt="Help desk support interface"
        icon={<Headphones className="w-7 h-7 text-primary" />}
        checkList={[
          "24/7 Remote Monitoring – Continuous system surveillance to detect and resolve issues proactively.",
          "Real-Time Alerts & Reporting – Immediate notifications and detailed reports for full transparency.",
          "Full Administrator Coverage – Handles all tasks typically managed by an in-house administrator.",
        ]}
      />

      <ServiceFeature
        title="Consulting for Projects & Planned Tasks"
        description="Expert guidance for critical IT operations, including:"
        imageSrc="/services/people-discussing-meeting.jpg"
        imageAlt="System operations dashboard"
        icon={<Server className="w-7 h-7 text-blue-500" />}
        reversed
        checkList={[
          "Production Deployments & Migrations – Ensuring smooth transitions with minimal disruption.",
          "Patch Installation & Performance Optimization – Enhancing system efficiency and security.",
          "Specialized Expertise – Our consultants bring in-depth knowledge of IBM, Oracle, Microsoft, Unix/Linux, RedHat, and more to handle installations, configurations, migrations, and system tuning.",
        ]}
      />

      <ServiceFeature
        title="Professional IT Services & Outsourcing"
        description="We provide access to a highly qualified team of certified IT consultants, ensuring:"
        imageSrc="/services/man-working-computer.jpg"
        imageAlt="Incident management system"
        icon={<Shield className="w-7 h-7 text-blue-500" />}
        checkList={[
          "Top-tier technical expertise to handle your most complex support needs.",
          "Business continuity assurance, so your operations run smoothly without interruptions.",
          "A cost-effective alternative to maintaining an in-house IT support team.",
        ]}
      />
    </main>
  );
}
