// utils/toastService.js
import { toast } from "react-toastify";

export const showToast = (type, message, options = {}) => {
  const { icon = undefined, ...restOptions } = options;

  console.log("custom icon from toast message: ", icon);

  toast(message, {
    type, // success | error | info | warning | default
    icon, // custom icon support (string or JSX)
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    ...restOptions,
  });
};
