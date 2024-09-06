import { readFile, writeFile } from "node:fs/promises";

async function getStoredItems() {
  const rawFileContent = await readFile("items.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

function storeItems(items) {
  return writeFile("items.json", JSON.stringify({ items: items || [] }));
}

const _getStoredItems = getStoredItems;
export { _getStoredItems as getStoredItems };
const _storeItems = storeItems;
export { _storeItems as storeItems };
