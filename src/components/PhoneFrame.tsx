import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title?: string;
  caption: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

/** Portrait app screenshot inside a simple phone bezel for mobile-first layout */
export default function PhoneFrame({
  src,
  alt,
  title,
  caption,
  width = 416,
  height = 740,
  priority = false,
  className = "",
}: Props) {
  return (
    <figure className={`w-full max-w-[280px] mx-auto ${className}`}>
      <div className="relative rounded-[1.75rem] border-[3px] border-[#2a1a12] bg-[#0A0508] p-2 shadow-2xl shadow-black/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 h-4 w-24 rounded-b-xl bg-[#2a1a12]" aria-hidden="true" />
        <div className="overflow-hidden rounded-[1.35rem] bg-black">
          <Image
            src={src}
            alt={alt}
            title={title || alt}
            width={width}
            height={height}
            className="w-full h-auto"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            sizes="(max-width: 768px) 70vw, 280px"
            quality={80}
          />
        </div>
      </div>
      <figcaption className="text-center text-gray-300 mt-3 font-medium text-sm">
        {caption}
      </figcaption>
    </figure>
  );
}
