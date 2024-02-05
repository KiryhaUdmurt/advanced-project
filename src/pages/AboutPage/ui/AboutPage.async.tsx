import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error
      setTimeout(() => resolve(import("./AboutPage")), 1000);
    })
);
