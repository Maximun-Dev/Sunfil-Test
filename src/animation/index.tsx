import React from "react";
// import PageTransition from '@Animation/PageTransition';
// import PageLoader from '@Animation/PageLoader';

export default function Animation({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <main>
      {/* <PageLoader /> */}
      {children}
      {/* <PageTransition /> */}
    </main>
  );
}
