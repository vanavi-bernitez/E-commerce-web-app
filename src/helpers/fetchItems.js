const fetchItems = async (query) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${query}?limit=10`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    // TODO: ERROR HANDLER
  }
};

export { fetchItems };
