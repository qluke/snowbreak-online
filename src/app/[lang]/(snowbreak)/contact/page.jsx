import { Bilibili } from "@/components/icon/bilibili";
import { Github } from "@/components/icon/github";

const ContactPage = () => {
  return (
    <div>
      <Bilibili />
      The original author.
      <br />
      <Github />
      The Github repository for this branch.
    </div>
  );
};

export default ContactPage;
