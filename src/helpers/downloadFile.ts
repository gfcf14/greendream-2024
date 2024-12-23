export const downloadFile = (name: string, url: string) => () => {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
