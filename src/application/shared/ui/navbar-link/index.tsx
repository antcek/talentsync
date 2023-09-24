interface INavLink {
  value: string;
  className: string | null;
}

export const NavLink = ({ value, className }: INavLink) => {
  return (
    <span
      className={`font-TT-Wellingtons flex px-4 py-4 text-xs font-normal leading-normal text-black xl:px-[84px] xl:py-5  xl:text-base ${className}`}
    >
      <a target="blank">{value}</a>
    </span>
  );
};
