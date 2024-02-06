export const truncate = (string, maxlength) => {
  if (string?.length > maxlength) {
    return `${string.slice(0, maxlength)}...`
  }
  return string;
}