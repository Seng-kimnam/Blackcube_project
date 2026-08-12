const ALLOWED_ORIGINS = [
  "https://blackcube.website",
  "https://seng-kimnam.github.io",
  // test mode
  "http://localhost:5173",
  "http://localhost:8443",
];

function corsHeaders(origin) {
  if (origin && origin.startsWith(ALLOWED_ORIGINS)) {
    return { "Access-Control-Allow-Origin": origin, Vary: "Origin" };
  }
  return {};
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          ...corsHeaders(origin),
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, origin);
    }

    if (
      origin &&
      !ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed))
    ) {
      return json({ error: "Forbidden origin" }, 403, origin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400, origin);
    }

    const { to, bcc, subject, html, replyTo } = body || {};
    if (!to || !subject || !html) {
      return json({ error: "Missing required fields" }, 400, origin);
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "User-Agent": "blackcube-site/1.0",
      },
      body: JSON.stringify({
        from: env.EMAIL_FROM,
        to: [to],
        bcc: bcc ? [bcc] : undefined,
        subject,
        html,
        reply_to: replyTo || undefined,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return json(
        { error: "Resend upstream error", detail: text },
        res.status,
        origin,
      );
    }
    return json({ ok: true }, 200, origin);
  },
};
