
// Helpers

export const getStyles = (
    allowFieldErrorBorder,
    meta,
    wrapInsideContainer = false
  ) => {
    if (!allowFieldErrorBorder) return;
    if (meta.error && meta.touched) {
      return wrapInsideContainer
        ? "wt-field-error-box-with-container"
        : "wt-field-error-box";
    }
  };