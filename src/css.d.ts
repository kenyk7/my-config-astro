import type * as CSS from 'csstype';
// for use css vars inline
declare module 'csstype' {
  interface Properties {
    [index: string]: any;
  }
}
