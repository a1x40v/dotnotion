import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const HomePageLayout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default HomePageLayout;
