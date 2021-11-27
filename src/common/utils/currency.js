export const setCurrency = (value) => {
  if (!value) return;
  return `R$ ${value
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    .replace('.', ',')}`;
};
