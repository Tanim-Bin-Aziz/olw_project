import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import footerLinks from "@/data/footerLinks";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] px-4 pt-8 md:px-6 md:pt-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-start gap-10 px-6 py-12 md:px-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr] lg:px-12 lg:py-16">
          <div className="max-w-[360px] self-start">
            <Link href="/" className="inline-flex items-start">
              <Image
                src="/images/footer logo.svg"
                alt="Logo"
                width={230}
                height={70}
                priority
                className="h-auto w-[170px] object-contain md:w-[190px]"
              />
            </Link>

            <p className="mt-10 max-w-[360px] text-[16px] leading-8 text-[#666666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis.
            </p>

            <div className="mt-8 flex items-center gap-5 text-[#111111]">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="transition hover:text-[#ff4f87]"
              >
                <FaTwitter size={18} />
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition hover:text-[#ff4f87]"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition hover:text-[#ff4f87]"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:text-[#ff4f87]"
              >
                <FaGithub size={18} />
              </Link>
            </div>
          </div>

          <div className="self-start">
            <h3 className="text-[20px] font-semibold text-[#111111]">
              Company
            </h3>

            <ul className="mt-8 space-y-5">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[16px] text-[#222222] transition hover:text-[#ff4f87]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-start">
            <h3 className="text-[20px] font-semibold text-[#111111]">Help</h3>

            <ul className="mt-8 space-y-5">
              {footerLinks.help.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[16px] text-[#222222] transition hover:text-[#ff4f87]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-start">
            <h3 className="text-[20px] font-semibold text-[#111111]">
              Resources
            </h3>

            <ul className="mt-8 space-y-5">
              {footerLinks.resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[16px] text-[#222222] transition hover:text-[#ff4f87]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
