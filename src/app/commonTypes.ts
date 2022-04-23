/**  */
export interface CommonDialogDataType {
  title: string,
  messageList: Array<string>,
  createCancelButton: boolean,
}

/**  */
export interface CommonDialogInfo {
  data: CommonDialogDataType
  height?: string,
  width?: string,
  disableClose: boolean,
}
