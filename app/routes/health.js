// app/routes/health.ts
import { json } from "@remix-run/node";
export const loader = () => json({ status: "ok" });
