import { ReactElement } from 'react';
import { BodyProps } from './components/Body';
import { HeaderItem } from './components/Header';

interface TableProps<T = string> {
  header: HeaderItem[];
  body: BodyProps<T>;
}

declare const Table: <T = string>(
  props: TableProps<T>
) => ReactElement<TableProps<T>>;

export default Table;
