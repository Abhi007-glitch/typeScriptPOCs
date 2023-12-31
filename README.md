# JavaScript to TypeScript Transition POCs

## Overview

If you are someone who wants to transition from JavaScript to TypeScript, you are at the right place. This repo will assist you in building TypeScript concepts on top of your JavaScript knowledge.

This Git repository contains a collection of TypeScript proof-of-concepts (POCs) aimed at helping developers transition from JavaScript to TypeScript. The POCs cover basic concepts such as different ways to add type annotations and inference on various elements like variables, arrays, classes, object literals, functions, tuples, and interfaces. Each POC is designed to provide a hands-on understanding of TypeScript's features.

## Concepts Covered

### Type Annotation

#### Type annotation in TypeScript is the explicit specification of the data type for a variable, function parameter, or function return value.
#### It provides clarity to both developers and the TypeScript compiler about the expected type of a particular element.

- **Type Annotation:**
  ```typescript
  let variableName: number;

- **Type Annotation:**
  ```typescript
  let variableName: number;

### Type Inference

#### Type inference is a TypeScript feature that allows the compiler to automatically determine the data type of a variable based on its initialization value. 
#### TypeScript leverages the knowledge of the assigned value to infer and assign the appropriate type to the variable.

### Note : Always prefer not to use this unless you are intializing and declearing variable on the same line.



### 1. Variables

- **Type Annotation:**
  ```typescript
  let variableName: number;


- **Type Inference:**
  ```typescript
  let variableName = 42; // TypeScript infers the type as number


### 2. Arrays

- **Type Annotation:**
  ```typescript
  let arrayName: string[];


- **Type Inference:**
  ```typescript
  let arrayName = ['item1', 'item2']; // TypeScript infers the type as string[]

### 3. Classes

- **Type Annotation:**
  ```typescript
  class MyClass {
  propertyName: string;
  constructor(param: string) {
    this.propertyName = param;
  }
  }


- **Type Inference:**
  ```typescript
  class MyClass {
  propertyName = 'default'; // TypeScript infers the type as string
  constructor(param: string) {
    this.propertyName = param;
  }
  }


### 4. Object Literal

- **Type Annotation:**
  ```typescript
  let myObject: { key1: string; key2: number } = {
  key1: 'value',
  key2: 42,
  };


### 5. Functions

- **Type Annotation:**
  ```typescript
  function addNumbers(a: number, b: number): number {
  return a + b;
  }

- **Type Inference(for return type):**
  ```typescript
  function addNumbers(a: number, b: number) {
  return a + b; // TypeScript infers the return type as number



### 6. Tuples

- **Type Annotation:**
  ```typescript
   let myTuple: [string, number] = ['value', 42];

 

#### Explore each POC in the corresponding directory to understand TypeScript concepts.
#### Some more example and concepts would be added with the time.
#### Feel free to experiment with and modify these POCs to deepen your understanding of TypeScript. If you have any questions or suggestions, please open an issue in the repository.

### Happy TypeScript Learning!







