import items from "../items.js";
import { v4 as uuidv4 } from "uuid";

let itemsData = [...items];

const getItems = async (request, reply) => {
  reply.send(itemsData);
};

const getItem = async (request, reply) => {
  const { id } = request.params;
  const item = itemsData.find((item) => item.id === id);
  reply.send(item);
};

const postItem = async (request, reply) => {
  const { name } = request.body;
  const item = {
    id: uuidv4(),
    name: name,
  };
  itemsData.push(item);

  reply.code(201).send(item);
};

const deleteItem = async (request, reply) => {
  const { id } = request.params;
  itemsData = itemsData.filter((item) => item.id !== id);

  reply.send({ message: `Item ${id} has been removed` });
};

const updateItem = async (request, reply) => {
  const { id } = request.params;
  const { name } = request.body;

  itemsData = itemsData.map((item) => (item.id === id ? { id, name } : item));

  let item = itemsData.find((item) => item.id === id);

  reply.send(item);
};

export { getItems, getItem, postItem, deleteItem, updateItem };
