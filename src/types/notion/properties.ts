export interface RootObject {
  properties: Properties;
}

interface Properties {
  value: Value;
  description: Value;
  name: Name;
}

interface Name {
  id: string;
  type: string;
  title: Richtext[];
}

interface Value {
  id: string;
  type: string;
  rich_text: Richtext[];
}

interface Richtext {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

interface Text {
  content: string;
  link?: any;
}

export interface IPropertiesInfinitiveVerb {
  value: string;
  description: string;
  name: string;
}
