// Keep comfortably under Vercel's ~4.5MB serverless request body ceiling,
// since photos attach directly to the notification email (no separate storage).
export const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;

// Google Business Profile links for "Got Junk" (CID 0xdc6dca33e0923ec3).
export const GOOGLE_MAPS_PLACE_URL = "https://maps.google.com/?cid=15883573784965430979";
export const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/Got+Junk/@36.096934,-119.5667011,17z/data=!4m18!1m9!3m8!1s0x80eb2dc17f12b82b:0xdc6dca33e0923ec3!2sGot+Junk!8m2!3d36.096934!4d-119.5667011!9m1!1b1!16s%2Fg%2F11zd2xy39n!3m7!1s0x80eb2dc17f12b82b:0xdc6dca33e0923ec3!8m2!3d36.096934!4d-119.5667011!9m1!1b1!16s%2Fg%2F11zd2xy39n?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D";
export const GOOGLE_MAPS_EMBED_SRC = "https://www.google.com/maps?cid=15883573784965430979&output=embed";
