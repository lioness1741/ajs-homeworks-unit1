export default function heroesHealth(heroes) {
  return heroes.sort((a, b) => b.health - a.health).reverse();
}
