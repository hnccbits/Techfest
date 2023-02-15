export const pageview = (url) => {
  if (window !== undefined) {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

export const events = ({ action, params }) => {
  if (window !== undefined) {
    window.gtag('event', action, params);
  }
};
