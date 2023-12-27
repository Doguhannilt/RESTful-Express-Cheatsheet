// CREATE: Add a new item
router.post('/items', async (req, res) => {
  try {
    // Step 1: Create a new item instance with data from the request body
    const newItem = new Item(req.body);

    // Step 2: Save the new item to the database
    const savedItem = await newItem.save();

    // Step 3: Respond with the saved item and set HTTP status code 201 (Created)
    res.status(201).json(savedItem);
  } catch (error) {
    // If an error occurs during creation:
    // - Step 4: Respond with an error message
    // - Step 5: Set HTTP status code 400 (Bad Request)
    res.status(400).json({ message: error.message });
  }
});

// READ: Retrieve all items
router.get('/items', async (req, res) => {
  try {
    // Step 1: Retrieve all items from the database
    const items = await Item.find();

    // Step 2: Respond with the retrieved items
    res.json(items);
  } catch (error) {
    // If an error occurs during retrieval:
    // - Step 3: Respond with an error message
    // - Step 4: Set HTTP status code 500 (Internal Server Error)
    res.status(500).json({ message: error.message });
  }
});

// READ: Retrieve a specific item
router.get('/items/:id', async (req, res) => {
  try {
    // Step 1: Retrieve a specific item from the database using the provided item ID
    const item = await Item.findById(req.params.id);

    // Step 2: If the item is not found, throw an error
    if (!item) throw new Error('Item not found');

    // Step 3: Respond with the retrieved item
    res.json(item);
  } catch (error) {
    // If an error occurs during retrieval:
    // - Step 4: Respond with an error message
    // - Step 5: Set HTTP status code 404 (Not Found)
    res.status(404).json({ message: error.message });
  }
});

// UPDATE: Update a specific item
router.patch('/items/:id', async (req, res) => {
  try {
    // Step 1: Update a specific item in the database using the provided item ID and new data
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Step 2: Respond with the updated item
    res.json(updatedItem);
  } catch (error) {
    // If an error occurs during update:
    // - Step 3: Respond with an error message
    // - Step 4: Set HTTP status code 400 (Bad Request)
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Delete a specific item
router.delete('/items/:id', async (req, res) => {
  try {
    // Step 1: Delete a specific item from the database using the provided item ID
    const deletedItem = await Item.findByIdAndDelete(req.params.id);

    // Step 2: Respond with the deleted item
    res.json(deletedItem);
  } catch (error) {
    // If an error occurs during deletion:
    // - Step 3: Respond with an error message
    // - Step 4: Set HTTP status code 404 (Not Found)
    res.status(404).json({ message: error.message });
  }
});
