import { pageMetadata, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/metadata";
import ReferenceHeader from "@/components/reference/ReferenceHeader";
import ReferenceFooter from "@/components/reference/ReferenceFooter";
import Closing from "@/components/reference/Closing";
import "./reference.css";
import "./supporting-pages.css";

export const metadata = {
  ...pageMetadata(SITE_TITLE, SITE_DESCRIPTION, "/"),
  metadataBase: new URL("https://amaea.co.uk"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" data-theme="light" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/pinyon-script.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.dataset.theme=localStorage.getItem('amaea-theme')==='dark'?'dark':'light'}catch(e){}",
          }}
        />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Amaea",
              url: "https://amaea.co.uk",
              logo: "https://amaea.co.uk/icon.png",
              description: SITE_DESCRIPTION,
            }).replace(/</g, "\\u003c"),
          }}
        />
        <ReferenceHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Closing />
        <ReferenceFooter />
      </body>
    </html>
  );
}
