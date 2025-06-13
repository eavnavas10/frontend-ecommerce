// src/components/MessageAnt.jsx
import { message } from "antd";

export const useLocalMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  return { messageApi, contextHolder };
};
