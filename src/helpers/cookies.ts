const getCookie = (name: string): string | null => {
  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));
  return cookie ? cookie.split('=')[1] : null;
};

export const setCookie = (name: string, value: string, days = 365) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

export const hasCookie = (name: string): boolean => {
  return getCookie(name) !== null;
};
