export const routes = {
  BASE: "/",
  OS_LIST: "/os",
  OS_CREATE: "/os/create",
  OS_EDIT: (id: string = "") => `/os/${id}/edit`,
  OS_VIEW: (id: string = "") => `/os/${id}/view`,
  OS_CALENDAR: "/os/calendar",
  NOTIFICACAO_LIST: "/notificacao",
  OS_AVALIACAO_CREATE: (id: string = "") => `/os/${id}/avaliacao/create`,
  OS_AVALIACAO_VIEW: (id: string = "") => `/os/${id}/avaliacao/view`,
  OS_AVALIACAO_SAVED: `/os/avaliacao/saved`,
  OS_AVALIACAO_UNAVAILABLE: `/os/avaliacao/unavailable`,
  OS_AVALIACAO_LIST: `os/avaliacao`,
};
