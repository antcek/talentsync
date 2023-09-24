import { LogoFrame } from "~/application/shared/ui/logo-frame";
import VKIcon from "public/icons/VKIcon.svg";
import TelegramIcon from "public/icons/TelegramIcon.svg";
import InstagramIcon from "public/icons/InstagramIcon.svg";
import FacebookIcon from "public/icons/FacebookIcon.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface IFooterItems {
  text: string;
}

export const Footer = () => {
  const { t } = useTranslation("common");

  const items = t("footer.info.items", { returnObjects: true });

  const footerItems: IFooterItems[] | undefined = Array.isArray(items)
    ? items
    : undefined;

  return (
    <footer className=" relative mx-auto flex w-full max-w-screen-xl justify-between rounded-bl-[64px] rounded-br-[64px] rounded-tl-[12px] rounded-tr-[12px] bg-white pb-[101px] pl-[132px] pr-[350px] pt-[66px]">
      <div className="flex flex-col gap-[30px]">
        <LogoFrame
          fill="rgba(246, 98, 98, 1)"
          textColor={"black"}
          position="static"
        />
        <div className="flex gap-3">
          <Image src={VKIcon} width={36} height={36} alt="vk-icon" />
          <Image src={TelegramIcon} width={36} height={36} alt="vk-icon" />
          <Image src={InstagramIcon} width={36} height={36} alt="vk-icon" />
          <Image src={FacebookIcon} width={36} height={36} alt="vk-icon" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-ttFirs pb-5 text-2xl leading-8">
          {t("footer.info.title")}
        </div>
        <div className="flex  flex-col gap-[10px]">
          {footerItems?.map((item: IFooterItems, i: number) => {
            return (
              <>
                <a
                  href="/"
                  target="_blank"
                  className="font-ttFirs fs-base text-contactsColor tracking-wide"
                >
                  {item!.text}
                </a>
              </>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
