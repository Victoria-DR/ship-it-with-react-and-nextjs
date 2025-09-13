import { getGreeting } from "@/lib/utils";

export function GET(request) {
  const response = getGreeting(request.nextUrl.searchParams.get("name"));
  return new Response(JSON.stringify(response))
}