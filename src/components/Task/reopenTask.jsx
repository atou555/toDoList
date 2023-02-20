/* eslint-disable */
import { TodoistApi } from '@doist/todoist-api-typescript';

const api = new TodoistApi(process.env.REACT_APP_TODOIST_API_KEY);

export const reopenTask = async (taskId) => {
  try {
    const response = await api.reopenTask(taskId);
    return response === 204;
  } catch (error) {
    console.log(error);
    return false;
  }
};