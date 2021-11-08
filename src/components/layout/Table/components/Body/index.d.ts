import { FC, ReactElement } from 'react';

export interface BodyItem<T> {
  item: T;
}

export interface BodyProps<T = string> {
  data: BodyItem<T>[][];
  renderItem?(data: BodyItem<T>): ReactElement<BodyItem<T>>;
}

declare const Body: FC<BodyProps>;

export default Body;
