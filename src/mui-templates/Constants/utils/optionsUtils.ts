import { IDefaultOption, IListaSuspensaItem } from "../../model/utils";

export const getValueFromDafaultOption = (option?: IDefaultOption | null) =>
  option?.value || null;

export const buildDefaultOptionFromListaSuspensaItem = (
  listaSuspensaItem: IListaSuspensaItem
) => {
  const option: IDefaultOption = {
    label: listaSuspensaItem?.nome_item_visual,
    value: listaSuspensaItem?.nome_item_visual,
  };
  return option;
};

export const ifOrNull = <T, U>(
  condition: boolean,
  trueReturn: T,
  falseReturn?: U
): T | U | null => {
  if (condition) {
    return trueReturn;
  }
  return falseReturn || null;
};
