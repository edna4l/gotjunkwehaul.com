// Keep comfortably under Vercel's ~4.5MB serverless request body ceiling,
// since photos attach directly to the notification email (no separate storage).
export const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;
