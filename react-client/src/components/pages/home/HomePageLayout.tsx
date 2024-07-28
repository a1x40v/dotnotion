interface Props {
  children: React.ReactNode;
}

const HomePageLayout: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default HomePageLayout;
