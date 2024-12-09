import Payment from "../payment/page";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={` antialiased`}
        >
          <Payment/>
          {children}
        </body>
      </html>
    );
  }