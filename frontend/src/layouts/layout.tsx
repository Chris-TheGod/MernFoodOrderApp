import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='felx felx-col min-h-screen'>
      <Header />
      <div className='container mx-auto flex-1 py-10'>{children}</div>
    </div>
  );
};

export default Layout;
