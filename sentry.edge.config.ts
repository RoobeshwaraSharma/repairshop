import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://409f5f56a97628204b0f320a1c030eb8@o4508149708947456.ingest.us.sentry.io/4508149716942848",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
