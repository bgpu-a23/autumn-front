import { Notify } from "quasar";

export function showError(error) {
  Notify.create({
    position: "top-right",
    message: formatError(error),
    type: "negative",
  });
}

export function showSuccess(message) {
  Notify.create({
    position: "top-right",
    message,
    type: "positive",
  });
}

export function showInfo(message) {
  Notify.create({
    position: "top-right",
    message,
    type: "info",
  });
}

export function formatError(error) {
  return (
    error?.response?.data?.error?.message ||
    error?.message ||
    "Произошла ошибка"
  );
}