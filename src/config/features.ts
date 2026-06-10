/**
 * Build-time flags (Astro `import.meta.env`).
 *
 * PUBLIC_SHOW_IN_PROGRESS_CERTIFICATIONS=true — show AWS DVA-C02 while it is in progress.
 * When the exam is passed, set status to `valid` in resume.ts instead of relying on this flag.
 */
export const showInProgressCertifications =
  import.meta.env.PUBLIC_SHOW_IN_PROGRESS_CERTIFICATIONS === 'true';
