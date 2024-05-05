"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import useIntl from "@/hooks/use-intl";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  const { t, locale } = useIntl("layout");

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === `/${locale}` + item.path && styles.active
      }`}
    >
      {t({ id: item.id, defaultMessage: item.name })}
    </Link>
  );
};

export default NavLink;
