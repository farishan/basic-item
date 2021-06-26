for (let index = 0; index < 10; index++) {
  const item = new Item({
    name: `item${index}`,
    extend: {
      craftable: index % 2 === 0 ? true : false,
      recipe: index % 4 === 0 ? {ingredient1: 'test'} : false
    }
  })

  document.write(JSON.stringify(item))
}
