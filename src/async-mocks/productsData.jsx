const items = [
  {
    id: 1,
    title: "Set Completo Matteoli",
    description: "Descripción del Set Completo Matteoli",
    price: 10400,
    image: "https://via.placeholder.com/200",
    categoryId: 1,
  },
  {
    id: 2,
    title: "Mate Imperial",
    description: "Descripción del Mate Imperial",
    price: 9000,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/127/506/products/dd26c3d5-3791-4c88-9c3c-271058393c9a-4ab77c1048f1899d7c16491919694857-640-0.webp",
    categoryId: 2,
  },
  {
    id: 3,
    title: "Mate Torpedo",
    description: "Descripción del Mate Torpedo",
    price: 8500,
    image: "https://via.placeholder.com/200",
    categoryId: 1,
  },
  {
    id: 4,
    title: "Mate Camionero",
    description: "Descripción del Mate Camionero",
    price: 9500,
    image: "https://via.placeholder.com/200",
    categoryId: 2,
  },
];
export function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 1000);
  });
}

export function getItemsByCategory(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.filter((item) => item.categoryId === categoryId));
    }, 1000);
  });
}

export function getItem(itemId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find((item) => item.id === itemId));
    }, 1000);
  });
}
  