import { format, parse } from "date-fns";

export const dateFormats = {
  ddMMyyyy: "dd/MM/yyyy",
  ddMMyyyy_HHmm: "dd/MM/yyyy HH:mm",
};

export const formatDate = (date?: Date | null, _format?: string) => {
  const formatTemplate = _format || dateFormats.ddMMyyyy;
  if (!date) {
    return null;
  }
  return format(date, formatTemplate);
};

export const parseStringDateToDate = (
  stringDate?: string | null,
  _format?: string
) => {
  const formatTemplate = _format || dateFormats.ddMMyyyy;
  if (!stringDate) {
    return null;
  }
  return parse(stringDate, formatTemplate, new Date());
};
