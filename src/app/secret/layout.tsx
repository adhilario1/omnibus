import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secret",
  description: "The Secret Portfolio of Adam Hilario",
};
const SecretLayout = ({
  children,
}: Readonly<{
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

export default SecretLayout;