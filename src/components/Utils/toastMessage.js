import { toast } from "react-toastify";

export default function (message, type, styles = {}) {
  if (type === "success") return toast.success(message);
  else if (type === "error") return toast.error(message);
  else if (type === "info") return toast.info(message);
  else if (type === "warn") return toast.warn(message);
  else return toast(message);
}
