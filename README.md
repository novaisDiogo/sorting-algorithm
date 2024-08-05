# TypeScript Sorting Algorithms

This repository contains a collection of sorting algorithms implemented in TypeScript. The primary goal of this project is to enhance my understanding of TypeScript by applying design patterns and best practices in building sorters for different data structures, including numbers, characters, and linked lists.

## Features

- **Numbers Sorting**: Implements sorting for numerical arrays using a custom sorter.
- **Characters Sorting**: Includes a sorting mechanism for characters, following a pattern similar to numerical sorting.
- **Linked List Sorting**: Provides sorting for linked lists, demonstrating how to handle more complex data structures in TypeScript.

## Project Structure

- **`Sorter`**: An abstract class that defines the blueprint for the sorting algorithms. It uses the Bubble Sort algorithm by default but can be extended to implement other sorting algorithms.
- **`NumbersCollection`**: A class that extends `Sorter` to sort arrays of numbers.
- **`CharactersCollection`**: A class that extends `Sorter` to sort strings of characters.
- **`LinkedList`**: A class that extends `Sorter` to sort linked list.

## Acknowledgements
Inspired by the TypeScript course by Stephen Grider.
