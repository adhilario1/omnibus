import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "The Secret Portfolio of Adam Hilario",
};

const PortfolioLayout = ({
  params,
  children,
}: Readonly<{
  params: Promise<{ breakpoint: number }>, 
  children: React.ReactNode;
}>) => {
    return(
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

export default PortfolioLayout;