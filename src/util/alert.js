import Swal from "sweetalert2";

const alert = (title, message, type) => Swal.fire(title, message, type);

const confirmDialog = (title, message, loader = false, preConfirm = null) =>
  Swal.fire({
    title: title,
    text: message,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sim",
    cancelButtonText: "Não",
    reverseButtons: true,
    showLoaderOnConfirm: loader,
    preConfirm: preConfirm
  });

export default {
  success: (title, message) => alert(title, message, "success"),
  error: (title, message) => alert(title, message, "error"),
  warn: (title, message) => alert(title, message, "warning"),
  info: (title, message) => alert(title, message, "info"),
  confirm: confirmDialog,
};
