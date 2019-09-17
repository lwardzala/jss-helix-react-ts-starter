// Temporary apollo-link-http-common issue fix for TypeScript version 3.6 and higher
// "GlobalFetch is gone. Instead, use WindowOrWorkerGlobalScope"
interface GlobalFetch extends WindowOrWorkerGlobalScope {}