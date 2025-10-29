import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/20 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg">Fraud Detection Model</div>
              <div className="text-sm text-primary-foreground/80">for Banking Security</div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/90 mb-2">
              &copy; {currentYear} Banking AI Research Lab. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/70">
              This project is for research and educational purposes.
              <br />
              Data privacy and security compliance maintained at all times.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;