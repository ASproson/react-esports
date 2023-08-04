export const NavElement = ({ navEl, id }) => {
  return (
    <span
      key={id}
      className="cursor-pointer transition duration-200 hover:scale-110 hover:text-white hidden sm:block"
    >
      {navEl.title}
    </span>
  );
};
