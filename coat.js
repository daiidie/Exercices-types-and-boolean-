let isRainy = true
let isWindy = false
let isSunny = true

if (isRainy && isWindy) {
  console.log('Mettez votre manteau')
} else if (isRainy && isSunny) {
  console.log('Nous n avez pas besoin de manteau mais vous pouvez prendre un parapluie')
} else if (isWindy && isSunny) {
  console.log(' Mettez votre manteau.')
}
else {
  console.log('Nous n avez pas besoin de manteau')
}