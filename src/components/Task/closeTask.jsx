/* eslint-disable */

import { TodoistApi } from "@doist/todoist-api-typescript";

const api = new TodoistApi(process.env.REACT_APP_TODOIST_API_TOKEN);

export const closeTask = async (taskId) => {
  try {
    await api.closeTask(taskId);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};