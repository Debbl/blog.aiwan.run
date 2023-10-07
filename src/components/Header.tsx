interface IProps {
  title: string;
}

const Header = (props: IProps) => {
  const { title } = props;
  return (
    <div className="flex justify-center">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
