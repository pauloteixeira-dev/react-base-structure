import Swal from "sweetalert2";
import {
  ERROR_OCCURRED_ON_OPERATION,
  INFO_SUCCESS_RECORD_REMOVED,
  INFO_SUCCESS_RECORD_SAVED,
} from "../Constants/messages";
import { corGeral } from "../Styles/cores";

export interface IAlertProps {
  status: "success" | "info" | "warning" | "error" | "question";
  title: string;
  message: string;
  confirmButtonText?: string;
  showCancelButton?: boolean;
  cancelButtonText?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

export interface IDeleteConfirmationAlertProps {
  onConfirm?: () => void;
}

export const alertNotify = ({
  status,
  title,
  message,
  confirmButtonText = "Ok",
  showCancelButton,
  cancelButtonText = "Cancelar",
  onClose,
  onConfirm,
}: IAlertProps) => {
  Swal.fire({
    title: title,
    text: message,
    icon: status,
    confirmButtonText: confirmButtonText,
    confirmButtonColor: corGeral.navyBlue,
    showCancelButton: showCancelButton,
    cancelButtonText: cancelButtonText,
    didClose: onClose,
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm && onConfirm();
    }
  });
};

export const deleteConfirmationAlert = ({
  onConfirm,
}: IDeleteConfirmationAlertProps) => {
  alertNotify({
    status: "warning",
    title: "Deseja remover este registro?",
    message: "Ao confirmar, o registro será removido",
    confirmButtonText: "Confirmar",
    showCancelButton: true,
    onConfirm: onConfirm,
  });
};

export const toastNotify = ({
  status,
  title,
  message,
  onClose,
}: IAlertProps) => {
  Swal.fire({
    toast: true,
    position: "top-right",
    timer: 5000,
    timerProgressBar: true,
    color: corGeral.navyBlue,
    titleText: title,
    text: message,
    icon: status,
    showConfirmButton: false,
    didClose: onClose,
  });
};

export const notifySuccessfullySaved = (onClose?: () => void) => {
  toastNotify({
    title: "Sucesso",
    message: INFO_SUCCESS_RECORD_SAVED,
    status: "success",
    onClose: onClose,
  });
};

export const notifySuccessfullyRemoved = (onClose?: () => void) => {
  toastNotify({
    title: "Sucesso",
    message: INFO_SUCCESS_RECORD_REMOVED,
    status: "success",
    onClose: onClose,
  });
};

export const notifyError = (message?: string) => {
  const notifyMessage = message ? message : ERROR_OCCURRED_ON_OPERATION;
  toastNotify({
    title: "Erro",
    message: notifyMessage,
    status: "error",
  });
};
