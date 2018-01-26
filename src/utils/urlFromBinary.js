function urlFromBinary(binary) {
  if (!binary) { return null; }

  const blob = binary.get('blob');
  if (!blob) { return null; }

  return blob.url() || null;
}

export default urlFromBinary;
