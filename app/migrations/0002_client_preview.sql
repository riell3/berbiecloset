-- Single shareable client-preview window. The first successful open starts a fixed 10-minute expiry.
CREATE TABLE IF NOT EXISTS client_preview_access (
  id TEXT PRIMARY KEY,
  started_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
