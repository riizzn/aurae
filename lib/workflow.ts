import { Client } from "@upstash/workflow";
import config from "./config";

export const workflowClient = new Client({
  token: config.env.upstash.qstashToken,
});

export async function triggerWelcomeEmail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  await workflowClient.trigger({
    url: "https://aurae-git-main-ranahates-gmailcoms-projects.vercel.app/api/send-welcome-email", // replace with real
    body: {
      name,
      email,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}