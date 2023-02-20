/* eslint-disable */

import { TodoistApi } from "@doist/todoist-api-typescript";
const YOUR_API_KEY = '1d3bec9a140e53f77f2c2f16a164e114316d55b9';

export const deleteTask = async (taskId) => {
  const api = new TodoistApi(YOUR_API_KEY);

  try {
    const isSuccess = await api.deleteTask(taskId);
    return isSuccess;
  } catch (error) {
    console.log(error);
    return false;
  }
};