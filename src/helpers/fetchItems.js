const fetchItems = async (category) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${category}?limit=12`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    // TODO: ERROR HANDLER
  }
};

export { fetchItems };
