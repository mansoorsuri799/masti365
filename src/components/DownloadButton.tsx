import { SITE } from "@/lib/site";

type Props = {
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
};

const sizeStyles = {
  sm: {
    padding: "px-4 py-2 text-xs",
    iconPad: "p-1.5",
    iconSize: "w-3.5 h-3.5",
    gap: "ml-2",
  },
  md: {
    padding: "px-5 py-2.5 text-sm",
    iconPad: "p-1.5",
    iconSize: "w-4 h-4",
    gap: "ml-2",
  },
  lg: {
    padding: "px-6 py-3 text-base",
    iconPad: "p-2",
    iconSize: "w-4.5 h-4.5",
    gap: "ml-2.5",
  },
} as const;

export default function DownloadButton({
  href = SITE.downloadUrl,
  className = "",
  size = "md",
  label = "DOWNLOAD NOW",
}: Props) {
  const s = sizeStyles[size];
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer sponsored" }
        : {})}
      className={`download-btn relative inline-flex items-center justify-center shrink-0 whitespace-nowrap ${s.padding} bg-accent hover:bg-[#e0b000] text-primary font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all group ${className}`}
      aria-label={`Download ${SITE.name} app for Android`}
    >
      <span>{label}</span>
      <div
        className={`download-icon ${s.gap} bg-primary text-accent rounded-full ${s.iconPad} group-hover:scale-110 transition-transform flex items-center justify-center`}
      >
        <svg
          className={s.iconSize === "w-4.5 h-4.5" ? "w-[18px] h-[18px]" : s.iconSize}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </div>
    </a>
  );
}
