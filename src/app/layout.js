import "./globals.scss";
import Provider from "@/redux/Provider";

export const metadata = {
  title: "Nextrun",
  description: "Nextrun Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}