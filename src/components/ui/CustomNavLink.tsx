"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function CustomLink({
  name,
  link,
  className = "",
}: {
  name: string;
  link: string;
  className?: string;
}) {
  const pathName = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Link href={link} legacyBehavior>
        <a className={`mx-4 relative group ${className}`}>
          {name}
        </a>
      </Link>
    );
  }

  return (
    <Link href={link} legacyBehavior>
      <a className={`mx-4 relative group ${className}`}>
        {name}
        <span
          className={`h-[1px] inline-block dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            pathName === link ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </a>
    </Link>
  );
}
