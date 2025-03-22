interface AlertInput {
  type: string;
  message: string;
  timeInMs?: number;
}

export const useAlert = function () {
  const error = ref<boolean>(false);
  const success = ref<boolean>(false);
  const msg = ref<string>();

  const openAlert = function (input: AlertInput) {
    const { type, message, timeInMs } = input;
    type === "error" ? (error.value = true) : (success.value = true);
    msg.value = message;
    _handleCloseAlert(timeInMs || 2000);
  };

  const _handleCloseAlert = function (time: number) {
    setTimeout(() => {
      error.value = false;
      success.value = false;
    }, time);
  };

  return { error, success, msg, openAlert };
};
