/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { JSX } from '@stencil/core';


export namespace Components {
  interface StudentList {}
  interface StudentName {
    'first': string;
    'last': string;
  }
}

declare namespace LocalJSX {
  interface StudentList extends JSXBase.HTMLAttributes {}
  interface StudentName extends JSXBase.HTMLAttributes {
    'first'?: string;
    'last'?: string;
  }

  interface ElementInterfaces {
    'StudentList': Components.StudentList;
    'StudentName': Components.StudentName;
  }

  interface IntrinsicElements {
    'StudentList': LocalJSX.StudentList;
    'StudentName': LocalJSX.StudentName;
  }
}
export { LocalJSX as JSX };

declare module "@stencil/core" {
  export namespace JSX {
    interface ElementInterfaces extends LocalJSX.ElementInterfaces {}
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

declare global {


  interface HTMLStudentListElement extends Components.StudentList, HTMLStencilElement {}
  var HTMLStudentListElement: {
    prototype: HTMLStudentListElement;
    new (): HTMLStudentListElement;
  };

  interface HTMLStudentNameElement extends Components.StudentName, HTMLStencilElement {}
  var HTMLStudentNameElement: {
    prototype: HTMLStudentNameElement;
    new (): HTMLStudentNameElement;
  };
  interface HTMLElementTagNameMap {
    'student-list': HTMLStudentListElement
    'student-name': HTMLStudentNameElement
  }

  interface ElementTagNameMap {
    'student-list': HTMLStudentListElement;
    'student-name': HTMLStudentNameElement;
  }
}

