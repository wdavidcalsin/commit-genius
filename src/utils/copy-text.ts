export const copyText = (outputMessage: string) => {
  let tempElement = document.createElement("input");

  tempElement.setAttribute("value", outputMessage);
  document.body.appendChild(tempElement);
  tempElement.select();

  document.execCommand("copy");
  document.body.removeChild(tempElement);
};
