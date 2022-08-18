import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import * as React from "react";
import globalStylesUrl from "~/styles/global.css";


export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: globalStylesUrl }
    ];
  };

  export const meta: MetaFunction = () => {
    const description = "A cool blog built with remix"
    const keywords = "remix, react, js"

    return {
      description, keywords,
    }
  };


/**
 * The root module's default export is a component that renders the current
 * route via the `<Outlet />` component. Think of this as the global layout
 * component for your app.
 */
export default function App() {
  return (
    <Document>
      <Layout>
          <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <Links />
        <title>{title ? title : 'My Remix Blog' }</title> 
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ?
        <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
    <nav className="navbar">
      <Link to='/' className='logo'>
        Crack of the Bat
      </Link>

      <ul className="nav">
        <li>
            <Link to='/teams'>Teams</Link>
        </li>
      </ul>
    </nav>
    <div className="container">
      {children}
    </div>
    </>
  )
}