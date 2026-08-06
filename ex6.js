const idades = [12, 18, 25, 40, 16, 22];

const menor18 = idades.filter(idade => idade < 18);
const maior18 = idades.filter(idade => idade >= 18);

console.log(`Menores de 18: ${menor18}`);
console.log(`Maiores de 18: ${maior18}`);