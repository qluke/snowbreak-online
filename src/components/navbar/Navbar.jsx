import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = async () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src={"/logo.png"}
          alt=""
          width={200}
          height={200}
        />
        {/* className={styles.avatar}
          src={user.img ? user.img : "/noavatar.png"}
          alt=""
          width={50}
          height={50} */}
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
