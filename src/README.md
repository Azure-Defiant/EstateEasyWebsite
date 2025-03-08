# Project Structure

This project follows Object-Oriented Programming (OOP) principles with a clean and modular architecture. Here's an overview of the directory structure:

## Directory Structure

```
src/
├── app/              # Next.js app directory containing pages and layouts
├── components/       # Reusable UI components
│   ├── common/       # Shared components used across features
│   └── features/     # Feature-specific components
├── hooks/            # Custom React hooks
├── interfaces/       # TypeScript interfaces and types
├── services/         # Business logic and API services
│   ├── api/          # API integration classes
│   └── domain/       # Domain-specific business logic
├── utils/            # Helper functions and utilities
└── README.md        # This documentation file
```

## OOP Principles Implementation

1. **Encapsulation**
   - Components are self-contained with their own state and methods
   - Services encapsulate business logic and data operations

2. **Inheritance**
   - Base components and classes can be extended for specific use cases
   - Common functionality is shared through abstract classes and interfaces

3. **Polymorphism**
   - Components can be rendered differently based on props and state
   - Services can have different implementations while maintaining the same interface

4. **Abstraction**
   - Complex logic is abstracted into services and hooks
   - Interfaces define clear contracts for components and services

## Best Practices

- Keep components small and focused on a single responsibility
- Use interfaces to define clear contracts between components
- Implement services as classes for better organization of business logic
- Utilize custom hooks for reusable stateful logic
- Follow SOLID principles in service and component design