export function getSubDomain() {
  const host = window.location.host.split(".");
  if (host.length > 1) {
    return host[0];
  }

  return false;
}
